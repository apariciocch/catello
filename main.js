const questions = [
  {
    "num": 1,
    "text": "Tengo las instrucciones de esta prueba bien grabadas en la mente.",
    "options": [
      {
        "value": "a",
        "text": "Sí"
      },
      {
        "value": "b",
        "text": "A medias"
      },
      {
        "value": "c",
        "text": "No"
      }
    ]
  },
  {
    "num": 2,
    "text": "Estoy listo para contestar cada pregunta tan sinceramente como me sea posible",
    "options": [
      {
        "value": "a",
        "text": "Sí"
      },
      {
        "value": "b",
        "text": "En duda"
      },
      {
        "value": "c",
        "text": "No"
      }
    ]
  },
  {
    "num": 3,
    "text": "Sería muy bueno que las vacaciones fueran más largas y todos tuvieran que tomarlas",
    "options": [
      {
        "value": "a",
        "text": "Siempre"
      },
      {
        "value": "b",
        "text": "Por lo general"
      },
      {
        "value": "c",
        "text": "Raras veces"
      }
    ]
  },
  {
    "num": 4,
    "text": "Yo puedo encontrar energía suficiente para enfrentarme a mis dificultades",
    "options": [
      {
        "value": "a",
        "text": "Siempre"
      },
      {
        "value": "b",
        "text": "Por lo general"
      },
      {
        "value": "c",
        "text": "Raras veces"
      }
    ]
  },
  {
    "num": 5,
    "text": "Me pongo un poco nervioso con los animales salvajes, aun cuando estén cerrados en jaulas macizas",
    "options": [
      {
        "value": "a",
        "text": "Sí"
      },
      {
        "value": "b",
        "text": "Indeciso"
      },
      {
        "value": "c",
        "text": "No"
      }
    ]
  },
  {
    "num": 6,
    "text": "Evito criticar a la gente y sus ideas",
    "options": [
      {
        "value": "a",
        "text": "Sí"
      },
      {
        "value": "b",
        "text": "A veces"
      },
      {
        "value": "c",
        "text": "No"
      }
    ]
  },
  {
    "num": 7,
    "text": "Le hago observaciones sarcásticas a las personas que creo que se lo mercen",
    "options": [
      {
        "value": "a",
        "text": "Por lo general"
      },
      {
        "value": "b",
        "text": "A veces"
      },
      {
        "value": "c",
        "text": "Nunca"
      }
    ]
  },
  {
    "num": 8,
    "text": "Prefiero la música semiclasica a las tonadas populares",
    "options": [
      {
        "value": "a",
        "text": "Cierto"
      },
      {
        "value": "b",
        "text": "En duda"
      },
      {
        "value": "c",
        "text": "F also"
      }
    ]
  },
  {
    "num": 9,
    "text": "Si mirara pelear a los niños de mi vecino:",
    "options": [
      {
        "value": "a",
        "text": "Dearía que terminaran de solucionar su problema"
      },
      {
        "value": "b",
        "text": "No sé"
      },
      {
        "value": "c",
        "text": "Razonaría con ellos"
      }
    ]
  },
  {
    "num": 10,
    "text": "En los eventos sociales:",
    "options": [
      {
        "value": "a",
        "text": "Me anticipo rápidamente"
      },
      {
        "value": "b",
        "text": "A medias"
      },
      {
        "value": "c",
        "text": "Prefiero estarme tranquilo y a distancia"
      }
    ]
  },
  {
    "num": 11,
    "text": "Yo preferiría ser:",
    "options": [
      {
        "value": "a",
        "text": "Ingeniero constructor"
      },
      {
        "value": "b",
        "text": "Quién sabe"
      },
      {
        "value": "c",
        "text": "Profesor de ciencias sociales"
      }
    ]
  },
  {
    "num": 12,
    "text": "Yo pasaría una tarde libre:",
    "options": [
      {
        "value": "a",
        "text": "Con un buen libro"
      },
      {
        "value": "b",
        "text": "En duda"
      },
      {
        "value": "c",
        "text": "Trabajando con mis amigos en algún pasatiempo"
      }
    ]
  },
  {
    "num": 13,
    "text": "Por lo general puedo tolerar a la gente vanidosa aun cuando fanfarronee y demuestre que se cree la gran cosa",
    "options": [
      {
        "value": "a",
        "text": "Sí"
      },
      {
        "value": "b",
        "text": "A medias"
      },
      {
        "value": "c",
        "text": "No"
      }
    ]
  },
  {
    "num": 14,
    "text": "Yo preferiria que la persona con la que me casara fuera socialmente admirada, más que bien dotada para el arte y la literatura",
    "options": [
      {
        "value": "a",
        "text": "Cierto"
      },
      {
        "value": "b",
        "text": "En duda"
      },
      {
        "value": "c",
        "text": "F also"
      }
    ]
  },
  {
    "num": 15,
    "text": "A veces siento un desagrado irracional por alguna persona",
    "options": [
      {
        "value": "a",
        "text": "Pero es tan ligero que puedo ocultarlo fácilmente"
      },
      {
        "value": "b",
        "text": "A medias"
      },
      {
        "value": "c",
        "text": "Es tan claro que tiendo a expresarlo"
      }
    ]
  },
  {
    "num": 16,
    "text": "En una situación que puede volverse peligrosa creo que hay que hacer ruido y gritar aunque se pierda la cortesía y las buenas maneras",
    "options": [
      {
        "value": "a",
        "text": "Sí"
      },
      {
        "value": "b",
        "text": "En duda"
      },
      {
        "value": "c",
        "text": "No"
      }
    ]
  },
  {
    "num": 17,
    "text": "Estoy siempre, completamente al tanto de los intentos de hacerle propaganda a algo en las cosas que leo",
    "options": [
      {
        "value": "a",
        "text": "Sí"
      },
      {
        "value": "b",
        "text": "En duda"
      },
      {
        "value": "c",
        "text": "No"
      }
    ]
  },
  {
    "num": 18,
    "text": "Me despirto por las noches y tengo dificultades para dormirme porque estoy intranquilo",
    "options": [
      {
        "value": "a",
        "text": "A medias"
      },
      {
        "value": "b",
        "text": "A veces"
      },
      {
        "value": "c",
        "text": "Nunca"
      }
    ]
  },
  {
    "num": 19,
    "text": "No me siento culpable se me regañan por algo que no hice",
    "options": [
      {
        "value": "a",
        "text": "Cierto"
      },
      {
        "value": "b",
        "text": "En duda"
      },
      {
        "value": "c",
        "text": "F also"
      }
    ]
  },
  {
    "num": 20,
    "text": "Me considero una persona literal, que busca nuevos caminos, más que una persona práctica  que sigue caminos conocidos",
    "options": [
      {
        "value": "a",
        "text": "Cierto"
      },
      {
        "value": "b",
        "text": "Dudoso"
      },
      {
        "value": "c",
        "text": "F also"
      }
    ]
  },
  {
    "num": 21,
    "text": "Me doy cuenta que si mi interés por la gente y por las diversiones tienden a cambiar bastante rápido",
    "options": [
      {
        "value": "a",
        "text": "Sí"
      },
      {
        "value": "b",
        "text": "A medias"
      },
      {
        "value": "c",
        "text": "No"
      }
    ]
  },
  {
    "num": 22,
    "text": "Si se trata de hacer algo, preferiría trabajar:",
    "options": [
      {
        "value": "a",
        "text": "En un comité"
      },
      {
        "value": "b",
        "text": "No sé"
      },
      {
        "value": "c",
        "text": "Por mi propia cuenta"
      }
    ]
  },
  {
    "num": 23,
    "text": "Me sorprendo a mí mismo contando cosas sin ningún objeto en especial",
    "options": [
      {
        "value": "a",
        "text": "A menudo"
      },
      {
        "value": "b",
        "text": "En ocaciones"
      },
      {
        "value": "c",
        "text": "Nunca"
      }
    ]
  },
  {
    "num": 24,
    "text": "Cuando estoy conversando me gusta:",
    "options": [
      {
        "value": "a",
        "text": "Decir las cosas tal y como se me ocurren"
      },
      {
        "value": "b",
        "text": "A medias"
      },
      {
        "value": "c",
        "text": "Organizar primero mis pensamientos"
      }
    ]
  },
  {
    "num": 25,
    "text": "Nunca siento la necesidad de hacer garabatos ni estarme moviendo mientras estoy sentado con otras personas",
    "options": [
      {
        "value": "a",
        "text": "Cierto"
      },
      {
        "value": "b",
        "text": "En duda"
      },
      {
        "value": "c",
        "text": "F also"
      }
    ]
  },
  {
    "num": 26,
    "text": "Con las mismas horas de trabajo o idéntica paga, preferiría la vida de:",
    "options": [
      {
        "value": "a",
        "text": "Un carpintero o un cocinero"
      },
      {
        "value": "b",
        "text": "Quién sabe"
      },
      {
        "value": "c",
        "text": "Mozo de un buen restaurante"
      }
    ]
  },
  {
    "num": 27,
    "text": "Hablando con las personas que conozco prefiero:",
    "options": [
      {
        "value": "a",
        "text": "Conversar sobre cosas impersonales"
      },
      {
        "value": "b",
        "text": "A medias"
      },
      {
        "value": "c",
        "text": "Charlar aceraca de la gente y sus sentimiendtos"
      }
    ]
  },
  {
    "num": 28,
    "text": "\"Pala\" es a \"Cavar\" como \"Cuchillo\" es a:",
    "options": [
      {
        "value": "a",
        "text": "Afilado"
      },
      {
        "value": "b",
        "text": "Cortar"
      },
      {
        "value": "c",
        "text": "Palear"
      }
    ]
  },
  {
    "num": 29,
    "text": "A veces no puedo dormirme porque tengo una idea rotando en mi mente",
    "options": [
      {
        "value": "a",
        "text": "Cierto"
      },
      {
        "value": "b",
        "text": "Dudoso"
      },
      {
        "value": "c",
        "text": "F also"
      }
    ]
  },
  {
    "num": 30,
    "text": "En mi vida personal, casi siempre alcanzo las metas que me propongo:",
    "options": [
      {
        "value": "a",
        "text": "Cierto"
      },
      {
        "value": "b",
        "text": "Dudoso"
      },
      {
        "value": "c",
        "text": "F also"
      }
    ]
  },
  {
    "num": 31,
    "text": "Cuando le digo a alguien deliberadamente una mentira, tengo que bajar la vista porque me avergonzaría mirarlo a los ojos",
    "options": [
      {
        "value": "a",
        "text": "Cierto"
      },
      {
        "value": "b",
        "text": "Dudoso"
      },
      {
        "value": "c",
        "text": "F also"
      }
    ]
  },
  {
    "num": 32,
    "text": "No estoy a gusto cuando trabajo en un proyecto que requiere acciones rápidas que afecten a los demás",
    "options": [
      {
        "value": "a",
        "text": "Cierto"
      },
      {
        "value": "b",
        "text": "A medias"
      },
      {
        "value": "c",
        "text": "F also"
      }
    ]
  },
  {
    "num": 33,
    "text": "La mayoría de la gente que conozco me considera como un conversador agradable",
    "options": [
      {
        "value": "a",
        "text": "Sí"
      },
      {
        "value": "b",
        "text": "Quién sabe"
      },
      {
        "value": "c",
        "text": "No"
      }
    ]
  },
  {
    "num": 34,
    "text": "Mucha gente común y corriente se sorprendería si conociera mis opiniones personales íntimas",
    "options": [
      {
        "value": "a",
        "text": "Sí"
      },
      {
        "value": "b",
        "text": "En duda"
      },
      {
        "value": "c",
        "text": "No"
      }
    ]
  },
  {
    "num": 35,
    "text": "Me siento un poco turbado si de repente me convierto en el foco de atención de un grupo de personas",
    "options": [
      {
        "value": "a",
        "text": "Sí"
      },
      {
        "value": "b",
        "text": "A medias"
      },
      {
        "value": "c",
        "text": "No"
      }
    ]
  },
  {
    "num": 36,
    "text": "Me da gusto siempre reunirme con grupos grandes, por ejemplo: en una fiesta, en una junta, etc.",
    "options": [
      {
        "value": "a",
        "text": "Sí"
      },
      {
        "value": "b",
        "text": "A medias"
      },
      {
        "value": "c",
        "text": "No"
      }
    ]
  },
  {
    "num": 37,
    "text": "En el colegip prefiero (o preferí):",
    "options": [
      {
        "value": "a",
        "text": "La música"
      },
      {
        "value": "b",
        "text": "En duda"
      },
      {
        "value": "c",
        "text": "El trabajo manual y los talleres o artesanías"
      }
    ]
  },
  {
    "num": 38,
    "text": "Creo que la mayoría de la gente está un poco \"chiflada\" aunque no les guste admitirlo",
    "options": [
      {
        "value": "a",
        "text": "Sí"
      },
      {
        "value": "b",
        "text": "Quien sabe"
      },
      {
        "value": "c",
        "text": "No"
      }
    ]
  },
  {
    "num": 39,
    "text": "Me agrada un amigo de mi sexo que:",
    "options": [
      {
        "value": "a",
        "text": "Piense seriamente sus actitudes ante la vida"
      },
      {
        "value": "b",
        "text": "A medias"
      },
      {
        "value": "c",
        "text": "Sea eficiente y práctico en sus intereses"
      }
    ]
  },
  {
    "num": 40,
    "text": "\"Si la primera vez no resultó, pruebe una y otra vez\". Es un refrán completamente olvidado en el mundo moderno",
    "options": [
      {
        "value": "a",
        "text": "Sí"
      },
      {
        "value": "b",
        "text": "Quién sabe"
      },
      {
        "value": "c",
        "text": "No"
      }
    ]
  },
  {
    "num": 41,
    "text": "Siento una necesidad de emprender actividades físicas rudas, de vez en cuando",
    "options": [
      {
        "value": "a",
        "text": "Sí"
      },
      {
        "value": "b",
        "text": "En duda"
      },
      {
        "value": "c",
        "text": "No"
      }
    ]
  },
  {
    "num": 42,
    "text": "Preferiría juntarme con gente bien adecuada a juntarme con individuos toscos y rebeldes",
    "options": [
      {
        "value": "a",
        "text": "Sí"
      },
      {
        "value": "b",
        "text": "A medias"
      },
      {
        "value": "c",
        "text": "No"
      }
    ]
  },
  {
    "num": 43,
    "text": "Respecto a intereses intelectuales, mis padres están (o estuvieron):",
    "options": [
      {
        "value": "a",
        "text": "Un poco bajo del promedio"
      },
      {
        "value": "b",
        "text": "En el promedio"
      },
      {
        "value": "c",
        "text": "Arriba del promedio"
      }
    ]
  },
  {
    "num": 44,
    "text": "Cuando el jefe (o el profesor) me llaman:",
    "options": [
      {
        "value": "a",
        "text": "Veo una oportunidad para hablar de cosas que me interesan"
      },
      {
        "value": "b",
        "text": "En duda"
      },
      {
        "value": "c",
        "text": "Temo que algo haya salido mal"
      }
    ]
  },
  {
    "num": 45,
    "text": "Cuando estoy triste, siento una fuerte necesidad de recurrir a alguien",
    "options": [
      {
        "value": "a",
        "text": "Sí"
      },
      {
        "value": "b",
        "text": "En duda"
      },
      {
        "value": "c",
        "text": "No"
      }
    ]
  },
  {
    "num": 46,
    "text": "Me confundo en ocaciones de la posición de la derecha y de la izquierda cuando me veo en el espejo",
    "options": [
      {
        "value": "a",
        "text": "Cierto"
      },
      {
        "value": "b",
        "text": "Dudoso"
      },
      {
        "value": "c",
        "text": "F also"
      }
    ]
  },
  {
    "num": 47,
    "text": "De adolescente participé en los deportes escolares",
    "options": [
      {
        "value": "a",
        "text": "de vez en cuando"
      },
      {
        "value": "b",
        "text": "Bastante"
      },
      {
        "value": "c",
        "text": "Con frecuencia"
      }
    ]
  },
  {
    "num": 48,
    "text": "Preferiría detenerme en la calle a mirar a un artista pintando que a escuchar a quienes discuten.",
    "options": [
      {
        "value": "a",
        "text": "Cierto"
      },
      {
        "value": "b",
        "text": "En duda"
      },
      {
        "value": "c",
        "text": "F also"
      }
    ]
  },
  {
    "num": 49,
    "text": "A veces me entra un estado de tensión y confución cuando pienso en los sucesos del día",
    "options": [
      {
        "value": "a",
        "text": "Sí"
      },
      {
        "value": "b",
        "text": "A medias"
      },
      {
        "value": "c",
        "text": "No"
      }
    ]
  },
  {
    "num": 50,
    "text": "A veces dudo que la gente con la que estoy hablando se interese verdaderamente en lo que estoy diciendo",
    "options": [
      {
        "value": "a",
        "text": "Sí"
      },
      {
        "value": "b",
        "text": "A medias"
      },
      {
        "value": "c",
        "text": "No"
      }
    ]
  },
  {
    "num": 51,
    "text": "Me gustaría ser:",
    "options": [
      {
        "value": "a",
        "text": "Un guardabosques"
      },
      {
        "value": "b",
        "text": "Quién sabe"
      },
      {
        "value": "c",
        "text": "Maestro de primaria o secundaria"
      }
    ]
  },
  {
    "num": 52,
    "text": "En santos y cumpleaños",
    "options": [
      {
        "value": "a",
        "text": "Me gusta hacer regalos personales"
      },
      {
        "value": "b",
        "text": "Quien sabe"
      },
      {
        "value": "c",
        "text": "siento que comprar regalos es un poco fastidioso"
      }
    ]
  },
  {
    "num": 53,
    "text": "\"Cansado\" es a \"Trabajo\", omo \"Orgullo\" es a:",
    "options": [
      {
        "value": "a",
        "text": "descanso"
      },
      {
        "value": "b",
        "text": "éxito"
      },
      {
        "value": "c",
        "text": "ejercicio"
      }
    ]
  },
  {
    "num": 54,
    "text": "¿Cuál de estas tres palabras es diferente de las otras?",
    "options": [
      {
        "value": "a",
        "text": "vela"
      },
      {
        "value": "b",
        "text": "luna"
      },
      {
        "value": "c",
        "text": "luz eléctrica"
      }
    ]
  },
  {
    "num": 55,
    "text": "Yo admiro  a mis padres en todos los aspectos importantes",
    "options": [
      {
        "value": "a",
        "text": "Sí"
      },
      {
        "value": "b",
        "text": "En duda"
      },
      {
        "value": "c",
        "text": "No"
      }
    ]
  },
  {
    "num": 56,
    "text": "Tengo ciuertas características en las que me siento definitivamente superior a la mayoría de la gente",
    "options": [
      {
        "value": "a",
        "text": "Sí"
      },
      {
        "value": "b",
        "text": "En duda"
      },
      {
        "value": "c",
        "text": "No"
      }
    ]
  },
  {
    "num": 57,
    "text": "Si es útil para otros, a mi no me importaría aceptar un trabajo en donde me ensucie, aunque  algunas personas lo consideran inferior",
    "options": [
      {
        "value": "a",
        "text": "Cierto"
      },
      {
        "value": "b",
        "text": "no se"
      },
      {
        "value": "c",
        "text": "F also"
      }
    ]
  },
  {
    "num": 58,
    "text": "Me gustaria asistor a espectáculos, o ir a divertirme",
    "options": [
      {
        "value": "a",
        "text": "Más de una vez por semana (más de lo normal)"
      },
      {
        "value": "b",
        "text": "Una vez a la semana (lo normal)"
      },
      {
        "value": "c",
        "text": "Menos de una vez por semana (menos de lo normal)"
      }
    ]
  },
  {
    "num": 59,
    "text": "Pienso que la plena libertad es más importante que las buenas maneras o el respeto a la ley",
    "options": [
      {
        "value": "a",
        "text": "Sí"
      },
      {
        "value": "b",
        "text": "En duda"
      },
      {
        "value": "c",
        "text": "No"
      }
    ]
  },
  {
    "num": 60,
    "text": "Tengo la tendencia a quedarme callado en la presencia de personas superiores (de más edad, experiencia, jerarquía o puesto)",
    "options": [
      {
        "value": "a",
        "text": "Sí"
      },
      {
        "value": "b",
        "text": "En duda"
      },
      {
        "value": "c",
        "text": "No"
      }
    ]
  },
  {
    "num": 61,
    "text": "Se me hace difícil hablar o recitar frente a un grupo grande",
    "options": [
      {
        "value": "a",
        "text": "Sí"
      },
      {
        "value": "b",
        "text": "En duda"
      },
      {
        "value": "c",
        "text": "No"
      }
    ]
  },
  {
    "num": 62,
    "text": "Preferiría vivir en una población que fuera:",
    "options": [
      {
        "value": "a",
        "text": "Tosca pero llena de prosperidad y progreso"
      },
      {
        "value": "b",
        "text": "No sé"
      },
      {
        "value": "c",
        "text": "Artística y relativamente pobre"
      }
    ]
  },
  {
    "num": 63,
    "text": "Si cometo falta de educación puedo olvifarla pronto",
    "options": [
      {
        "value": "a",
        "text": "Sí"
      },
      {
        "value": "b",
        "text": "Quien sabe"
      },
      {
        "value": "c",
        "text": "No"
      }
    ]
  },
  {
    "num": 64,
    "text": "Cuando leo algun artículo tendencioso o injusto en una revista tiendo a olvidarlo más que sentir ganas de \"devolverles el golpe\"",
    "options": [
      {
        "value": "a",
        "text": "Cierto"
      },
      {
        "value": "b",
        "text": "En duda"
      },
      {
        "value": "c",
        "text": "F also"
      }
    ]
  },
  {
    "num": 65,
    "text": "Tiendo a olvidar muchas cosas triviales y sin importancia, como nombres de calles, tiendas, etc.",
    "options": [
      {
        "value": "a",
        "text": "Sí"
      },
      {
        "value": "b",
        "text": "En duda"
      },
      {
        "value": "c",
        "text": "No"
      }
    ]
  },
  {
    "num": 66,
    "text": "Se me considera una persona fácilmente influenciable cuando recurren a mis sentimientos",
    "options": [
      {
        "value": "a",
        "text": "Sí"
      },
      {
        "value": "b",
        "text": "Quien sabe"
      },
      {
        "value": "c",
        "text": "No"
      }
    ]
  },
  {
    "num": 67,
    "text": "Yo como mis alimentos con gusto, no siempre tan cuidadosay apropiadamente como algunas personas",
    "options": [
      {
        "value": "a",
        "text": "Cierto"
      },
      {
        "value": "b",
        "text": "En duda"
      },
      {
        "value": "c",
        "text": "F also"
      }
    ]
  },
  {
    "num": 68,
    "text": "En las dificultades diarias por lo general no pierdo la esperanza",
    "options": [
      {
        "value": "a",
        "text": "Sí"
      },
      {
        "value": "b",
        "text": "En duda"
      },
      {
        "value": "c",
        "text": "No"
      }
    ]
  },
  {
    "num": 69,
    "text": "A veces la gente me advierte que demuestro mi excitación con voces y ademanes demasiado avidentes",
    "options": [
      {
        "value": "a",
        "text": "Sí"
      },
      {
        "value": "b",
        "text": "En duda"
      },
      {
        "value": "c",
        "text": "No"
      }
    ]
  },
  {
    "num": 70,
    "text": "De adolescente, si mi opinión era distinta a la de mis padres, por lo general:",
    "options": [
      {
        "value": "a",
        "text": "La mantenía"
      },
      {
        "value": "b",
        "text": "A medias"
      },
      {
        "value": "c",
        "text": "Aceptaba la autoridad de mis padres"
      }
    ]
  },
  {
    "num": 71,
    "text": "Preferiría casarme con alguien capaz de:",
    "options": [
      {
        "value": "a",
        "text": "Mantener a la familia interesada en sus propias actividades"
      },
      {
        "value": "b",
        "text": "En duda"
      },
      {
        "value": "c",
        "text": "Hacer que la familia tome parte de la vida social del vecindario"
      }
    ]
  },
  {
    "num": 72,
    "text": "Preferiría gozar de la vida con calma a mi manera, más que ser admirado por mis éxitos",
    "options": [
      {
        "value": "a",
        "text": "Cierto"
      },
      {
        "value": "b",
        "text": "En duda"
      },
      {
        "value": "c",
        "text": "No"
      }
    ]
  },
  {
    "num": 73,
    "text": "Puedo trabajar con cuidado en ela mayor parte de las cosas sin que me pertube el ruido que la gente hace a mi alrededor",
    "options": [
      {
        "value": "a",
        "text": "Sí"
      },
      {
        "value": "b",
        "text": "En duda"
      },
      {
        "value": "c",
        "text": "No"
      }
    ]
  },
  {
    "num": 74,
    "text": "Se me hace últimamente, una o dos veces, me ha echado la culpa más de lo que realmente merecía",
    "options": [
      {
        "value": "a",
        "text": "Sí"
      },
      {
        "value": "b",
        "text": "En duda"
      },
      {
        "value": "c",
        "text": "No"
      }
    ]
  },
  {
    "num": 75,
    "text": "Soy capaz de expresar mis sentimientos bajo mi estricto control",
    "options": [
      {
        "value": "a",
        "text": "Sí"
      },
      {
        "value": "b",
        "text": "En duda"
      },
      {
        "value": "c",
        "text": "No"
      }
    ]
  },
  {
    "num": 76,
    "text": "Al inventar algo útil preferiría:",
    "options": [
      {
        "value": "a",
        "text": "Perfeccionarlo en el laboratorio"
      },
      {
        "value": "b",
        "text": "En duda"
      },
      {
        "value": "c",
        "text": "Venderselo a la gente"
      }
    ]
  },
  {
    "num": 77,
    "text": "\"Sorpresa\" es a \"Extraño\" como \"Miedo\" es a:",
    "options": [
      {
        "value": "a",
        "text": "Valiente"
      },
      {
        "value": "b",
        "text": "Ansioso"
      },
      {
        "value": "c",
        "text": "Terrible"
      }
    ]
  },
  {
    "num": 78,
    "text": "¿Cuál de estas fracciones es distinta de las otras dos?",
    "options": [
      {
        "value": "a",
        "text": "3/7"
      },
      {
        "value": "b",
        "text": "3/9"
      },
      {
        "value": "c",
        "text": "3/11"
      }
    ]
  },
  {
    "num": 79,
    "text": "No sé porqué, pero algunas personas como que me ignoran o me evitan",
    "options": [
      {
        "value": "a",
        "text": "Cierto"
      },
      {
        "value": "b",
        "text": "En duda"
      },
      {
        "value": "c",
        "text": "F also"
      }
    ]
  },
  {
    "num": 80,
    "text": "La gente me trata menos razonablemente de lo que merecen mis buenas intenciones",
    "options": [
      {
        "value": "a",
        "text": "A menudo"
      },
      {
        "value": "b",
        "text": "En ocaciones"
      },
      {
        "value": "c",
        "text": "Nunca"
      }
    ]
  },
  {
    "num": 81,
    "text": "Me molesta que se digan palabras groseras aun cuando no hay mujeres delante",
    "options": [
      {
        "value": "a",
        "text": "Sí"
      },
      {
        "value": "b",
        "text": "A medias"
      },
      {
        "value": "c",
        "text": "No"
      }
    ]
  },
  {
    "num": 82,
    "text": "Decididamente tengo bastante menos amigos que la mayoría de la gente",
    "options": [
      {
        "value": "a",
        "text": "Sí"
      },
      {
        "value": "b",
        "text": "Quien sabe"
      },
      {
        "value": "c",
        "text": "No"
      }
    ]
  },
  {
    "num": 83,
    "text": "Me disgustaría estar en un sitio donde no hubiera mucha gente con quien nonversar",
    "options": [
      {
        "value": "a",
        "text": "Sí"
      },
      {
        "value": "b",
        "text": "En duda"
      },
      {
        "value": "c",
        "text": "No"
      }
    ]
  },
  {
    "num": 84,
    "text": "La gente me dice descuidado, a veces, aunque piensen que soy persona activa",
    "options": [
      {
        "value": "a",
        "text": "Sí"
      },
      {
        "value": "b",
        "text": "En duda"
      },
      {
        "value": "c",
        "text": "No"
      }
    ]
  }
];
document.addEventListener("DOMContentLoaded", () => {
  const container = document.getElementById("questions-container");
  questions.forEach(q => {
    const fieldset = document.createElement("fieldset");
    const legend = document.createElement("legend");
    legend.textContent = q.num + ". " + q.text;
    fieldset.appendChild(legend);
    q.options.forEach(opt => {
      const label = document.createElement("label");
      const input = document.createElement("input");
      input.type = "radio";
      input.name = "q" + q.num;
      input.value = opt.value;
      label.appendChild(input);
      label.appendChild(document.createTextNode(" " + opt.text));
      fieldset.appendChild(label);
      fieldset.appendChild(document.createElement("br"));
    });
    container.appendChild(fieldset);
  });
});
