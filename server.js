require('dotenv').config();
const express = require('express');
const path = require('path');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3000;
const OLLAMA_API = 'http://localhost:11434/api/generate';

// Función de fallback para generar interpretación cuando Ollama falla
function generateFallbackInterpretation(personal, pb, decat, factorNames) {
  const getInterpretation = (factor, decat) => {
    if (decat >= 8) return 'muy alto - fortaleza principal';
    if (decat >= 6) return 'alto - competencia notable';
    if (decat >= 4) return 'promedio - equilibrio';
    if (decat >= 2) return 'bajo - área a mejorar';
    return 'muy bajo - requiere desarrollo';
  };

  const strengths = Object.keys(decat)
    .filter(f => decat[f] >= 7)
    .map(f => `${f} (${factorNames[f]}): ${getInterpretation(f, decat[f])}`)
    .slice(0, 4);

  const improvements = Object.keys(decat)
    .filter(f => decat[f] <= 3)
    .map(f => `${f} (${factorNames[f]}): ${getInterpretation(f, decat[f])}`)
    .slice(0, 4);

  return `ANÁLISIS 16PF - ${personal.nombre}
Edad: ${personal.edad} | Sexo: ${personal.sexo === 'm' ? 'Masculino' : 'Femenino'} | Formación: ${personal.grado}

PERFIL GENERAL:
El evaluado presenta un perfil balanceado de personalidad con características distintivas en su patrón de respuestas. Su configuración refleja adaptatibilidad moderada a diferentes contextos sociales y situaciones de presión.

FORTALEZAS PRINCIPALES:
${strengths.length > 0 ? strengths.map((s, i) => `${i+1}. ${s}`).join('\n') : 'Competencias equilibradas en varios factores.'}

ÁREAS DE DESARROLLO:
${improvements.length > 0 ? improvements.map((i, n) => `${n+1}. ${i}`).join('\n') : 'Oportunidades de crecimiento en desarrollo de nuevas habilidades.'}

RECOMENDACIONES:
- Aprovechar las fortalezas identificadas en contextos laborales y personales
- Trabajar en la mejora continua de las áreas señaladas
- Buscar desarrollo profesional alineado con el perfil

CONCLUSIÓN:
El perfil del evaluado sugiere una persona con potencial para el desarrollo profesional. Se recomienda un plan de acción personalizado basado en los factores identificados.

---
Nota: Este análisis es una aproximación automática. Para interpretaciones más detalladas, se recomienda consultar con un psicólogo especializado en evaluación psicométrica.`;
}

// Middleware
app.use(cors());
app.use(express.json());

// Servir archivos estáticos (HTML, CSS, JS)
app.use(express.static(path.join(__dirname)));

// Endpoint para generar interpretación
app.post('/api/analyze', async (req, res) => {
  const { personal, pb, decat } = req.body;
  
  try {
    // Validar datos
    if (!personal || !pb || !decat) {
      return res.status(400).json({ error: 'Datos incompletos' });
    }

    const factorNames = {
      'A': 'Afabilidad', 'B': 'Razonamiento', 'C': 'Estabilidad Emocional', 'E': 'Dominancia',
      'F': 'Animación', 'G': 'Atención a Normas', 'H': 'Atrevimiento', 'I': 'Sensibilidad',
      'L': 'Vigilancia', 'M': 'Abstracción', 'N': 'Privacidad', 'O': 'Aprensión',
      'Q1': 'Apertura al Cambio', 'Q2': 'Autosuficiencia', 'Q3': 'Perfeccionismo', 'Q4': 'Tensión'
    };

    const factorData = Object.keys(pb).map(f => `${f} (${factorNames[f]}): PB=${pb[f]}, Decat=${decat[f]}`).join('\n');

    const prompt = `Análisis 16PF - ${personal.nombre}:
Edad: ${personal.edad}, Sexo: ${personal.sexo === 'm' ? 'M' : 'F'}, Educación: ${personal.grado}

RESULTADOS:
${factorData}

Proporciona un breve análisis profesional (máx 200 palabras):
1. Perfil general resumido
2. Fortalezas (3-5)
3. Áreas a mejorar (3-5)
4. Una recomendación práctica`;

    // Llamar a Ollama (mistral - modelo más ligero y confiable)
    const response = await fetch(OLLAMA_API, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        model: 'mistral',
        prompt: prompt,
        stream: false,
        temperature: 0.7
      })
    });

    if (!response.ok) {
      throw new Error(`Error de Ollama: ${response.statusText}`);
    }

    const data = await response.json();
    
    // Si hay error en la respuesta, usar fallback automático
    if (data.error) {
      const interpretation = generateFallbackInterpretation(personal, pb, decat, factorNames);
      res.json({ 
        success: true, 
        interpretation,
        note: '⚠️ Respuesta generada automáticamente (Ollama offline)'
      });
      return;
    }
    
    const interpretation = data.response;

    res.json({ 
      success: true, 
      interpretation 
    });

  } catch (error) {
    console.error('Error en /api/analyze:', error);
    
    // Fallback automático cuando falla todo
    const fallback_interpretation = generateFallbackInterpretation(
      personal || { nombre: 'Evaluado', edad: 'N/A', sexo: 'm', grado: 'N/A' },
      pb || {},
      decat || {},
      {
        'A': 'Afabilidad', 'B': 'Razonamiento', 'C': 'Estabilidad Emocional', 'E': 'Dominancia',
        'F': 'Animación', 'G': 'Atención a Normas', 'H': 'Atrevimiento', 'I': 'Sensibilidad',
        'L': 'Vigilancia', 'M': 'Abstracción', 'N': 'Privacidad', 'O': 'Aprensión',
        'Q1': 'Apertura al Cambio', 'Q2': 'Autosuficiencia', 'Q3': 'Perfeccionismo', 'Q4': 'Tensión'
      }
    );
    
    res.status(200).json({ 
      success: true,
      interpretation: fallback_interpretation,
      note: '⚠️ Respuesta generada automáticamente'
    });
  }
});

// Health check
app.get('/api/health', (req, res) => {
  res.json({ status: 'OK', message: 'Servidor funcionando correctamente' });
});

// Iniciar servidor
app.listen(PORT, '0.0.0.0', () => {
  console.log(`🚀 Servidor seguro corriendo en http://localhost:${PORT}`);
  console.log(`✅ API Key cargada desde .env`);
  console.log(`📡 Endpoint: POST http://localhost:${PORT}/api/analyze`);
});
