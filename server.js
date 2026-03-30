require('dotenv').config();
const express = require('express');
const cors = require('cors');
const { OpenAI } = require('openai');

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(cors());
app.use(express.json());

// Inicializar cliente de OpenAI
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY
});

// Endpoint para generar interpretación
app.post('/api/analyze', async (req, res) => {
  try {
    const { personal, pb, decat } = req.body;

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

    const prompt = `Eres un psicólogo experto en el test 16PF de Cattell. Proporciona interpretaciones profesionales basadas en estos resultados:

DATOS DEL EVALUADO:
- Nombre: ${personal.nombre}
- Edad: ${personal.edad}
- Sexo: ${personal.sexo === 'm' ? 'Masculino' : 'Femenino'}
- Grado Educativo: ${personal.grado}

RESULTADOS 16PF:
${factorData}

Por favor, genera:

1. **INTERPRETACIÓN GENERAL DEL PERFIL** (3-4 párrafos):
Describe el perfil general de personalidad del evaluado considerando todos los factores.

2. **FORTALEZAS PRINCIPALES** (máximo 5):
Lista las fortalezas principales basadas en factores altos.

3. **ÁREAS DE DESARROLLO** (máximo 5):
Lista las áreas en las que podría trabajar.

4. **RECOMENDACIONES PROFESIONALES** (3-4 puntos):
Proporciona recomendaciones específicas y prácticas.

5. **CONCLUSIÓN PROFESIONAL** (2-3 párrafos):
Una conclusión profesional que integre todo el análisis.

Mantén un tono profesional, específico y basado en los datos del test.`;

    // Llamar a OpenAI
    const message = await openai.chat.completions.create({
      model: 'gpt-3.5-turbo',
      messages: [
        { role: 'user', content: prompt }
      ],
      temperature: 0.7,
      max_tokens: 2000
    });

    const interpretation = message.choices[0].message.content;

    res.json({ 
      success: true, 
      interpretation 
    });

  } catch (error) {
    console.error('Error en /api/analyze:', error);
    res.status(500).json({ 
      error: 'Error al procesar la solicitud',
      message: error.message 
    });
  }
});

// Health check
app.get('/api/health', (req, res) => {
  res.json({ status: 'OK', message: 'Servidor funcionando correctamente' });
});

// Iniciar servidor
app.listen(PORT, () => {
  console.log(`🚀 Servidor seguro corriendo en http://localhost:${PORT}`);
  console.log(`✅ API Key cargada desde .env`);
  console.log(`📡 Endpoint: POST http://localhost:${PORT}/api/analyze`);
});
