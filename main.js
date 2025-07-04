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
  },
  {
    "num": 85,
    "text": "Mi timidez siempre se interpone cuando quiero entablar conversación con un desconocido del sexo que me atraiga",
    "options": [
      {
        "value": "a",
        "text": "Sí",
      },
      {
        "value": "b",
        "text": "A medias",
      },
      {
        "value": "c",
        "text": "No",
      },
    ]
  },
  {
    "num": 86,
    "text": "Preferiría un trabajo con:",
    "options": [
      {
        "value": "a",
        "text": "Un sueldo fijo y seguro",
      },
      {
        "value": "b",
        "text": "En duda",
      },
      {
        "value": "c",
        "text": "Un sueldo elevado que dependiera de mi capacidad para demostrar constantemente que lo merezco",
      },
    ]
  },
  {
    "num": 87,
    "text": "Prefiero leer:",
    "options": [
      {
        "value": "a",
        "text": "Una narración realista de batallas militares o políticas",
      },
      {
        "value": "b",
        "text": "Quién sabe",
      },
      {
        "value": "c",
        "text": "Una novela sentimental",
      },
    ]
  },
  {
  "num": 88,
  "text": "Cuando la gente mandona trata de \"empujarme a hacer algo\" yo hago justamente lo opuesto",
  "options": [
    {
      "value": "a",
      "text": "A lo que ellos quieren"
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
    "num": 89,
    "text": "Mucha gente mejoraría si recibiera más alabanzas y menos críticas",
    "options": [
      {
        "value": "a",
        "text": "Cierto",
      },
      {
        "value": "b",
        "text": "Dudoso",
      },
      {
        "value": "c",
        "text": "F also",
      },
    ]
  },
  {
    "num": 90,
    "text": "Cuando discuten de arte, religión o política, rara vez me acaloro hasta perder la cortesía y los buenos modales",
    "options": [
      {
        "value": "a",
        "text": "Cierto",
      },
      {
        "value": "b",
        "text": "En duda",
      },
      {
        "value": "c",
        "text": "F also",
      },
    ]
  },
  {
    "num": 91,
    "text": "Si alguien se enoja conmigo:",
    "options": [
      {
        "value": "a",
        "text": "Trataría de calmarlo",
      },
      {
        "value": "b",
        "text": "Quién sabe",
      },
      {
        "value": "c",
        "text": "Me irritaría",
      },
    ]
  },
  {
    "num": 92,
    "text": "Me gustaría que se formara un movimiento para:",
    "options": [
      {
        "value": "a",
        "text": "Que la gente coma más vegetales y así evitar el asesinato de tantos animales",
      },
      {
        "value": "b",
        "text": "No sé",
      },
      {
        "value": "c",
        "text": "Fabricar mejores venenos que maten a los animales que echan a perder las cosechas (ardillas, conejos y algunos pájaros)",
      },
    ]
  },
  {
    "num": 93,
    "text": "Si mis conocidos me hacen ver que les caigo mal y me tratan mal:",
    "options": [
      {
        "value": "a",
        "text": "Me importa poco",
      },
      {
        "value": "b",
        "text": "A medias",
      },
      {
        "value": "c",
        "text": "Tiendo a ponerme triste",
      },
    ]
  },
  {
    "num": 94,
    "text": "Los tipos indiferentes que dicen \"lo mejor de la vida es gratis\" por lo general no han trabajado para conseguir mucho",
    "options": [
      {
        "value": "a",
        "text": "Cierto",
      },
      {
        "value": "b",
        "text": "En duda",
      },
      {
        "value": "c",
        "text": "F also",
      },
    ]
  },
  {
    "num": 95,
    "text": "Dado que no siempre es posible que las cosas se hagan por métodos razonables y lógicos a veces es necesario usar la fuerza",
    "options": [
      {
        "value": "a",
        "text": "Cierto",
      },
      {
        "value": "b",
        "text": "A medias",
      },
      {
        "value": "c",
        "text": "F also",
      },
    ]
  },
  {
    "num": 96,
    "text": "Entre los quince y dieciséis años me interesé por el sexo opuesto",
    "options": [
      {
        "value": "a",
        "text": "Mucho",
      },
      {
        "value": "b",
        "text": "Lo mismo que los demás",
      },
      {
        "value": "c",
        "text": "Menos que los demás",
      },
    ]
  },
  {
    "num": 97,
    "text": "Me gusta tomar parte activa en asuntos sociales, comités, etc.",
    "options": [
      {
        "value": "a",
        "text": "Sí",
      },
      {
        "value": "b",
        "text": "Quien sabe",
      },
      {
        "value": "c",
        "text": "No",
      },
    ]
  },
  {
    "num": 98,
    "text": "La idea de que las enfermedades provienen tanto de causas mentales como físicas es muy exagerada.",
    "options": [
      {
        "value": "a",
        "text": "Sí",
      },
      {
        "value": "b",
        "text": "Quien sabe",
      },
      {
        "value": "c",
        "text": "No",
      },
    ]
  },
  {
    "num": 99,
    "text": "A veces me irritan demasiado pequeñas contrariedades.",
    "options": [
      {
        "value": "a",
        "text": "Sí",
      },
      {
        "value": "b",
        "text": "En duda",
      },
      {
        "value": "c",
        "text": "No",
      },
    ]
  },
  {
    "num": 100,
    "text": "Muy rara vez suelto exclamaciones molestas que puedan herir los sentimientos de la gente.",
    "options": [
      {
        "value": "a",
        "text": "Cierto",
      },
      {
        "value": "b",
        "text": "En duda",
      },
      {
        "value": "c",
        "text": "F also",
      },
    ]
  },
  {
    "num": 101,
    "text": "Preferiría trabajar en una empresa",
    "options": [
      {
        "value": "a",
        "text": "Hablando con los clientes",
      },
      {
        "value": "b",
        "text": "En duda",
      },
      {
        "value": "c",
        "text": "Llevando las cuentas y el archivo.",
      },
    ]
  },
  {
    "num": 102,
    "text": "\"Tamaño\" es la \"Longitud\" como \"Deshonesto\" a:",
    "options": [
      {
        "value": "a",
        "text": "Prisión",
      },
      {
        "value": "b",
        "text": "pecado",
      },
      {
        "value": "c",
        "text": "Robo",
      },
    ]
  },
  {
    "num": 103,
    "text": "A B es a dc como S R es a:",
    "options": [
      {
        "value": "a",
        "text": "qp",
      },
      {
        "value": "b",
        "text": "pq",
      },
      {
        "value": "c",
        "text": "tu",
      },
    ]
  },
  {
    "num": 104,
    "text": "Cuando la gente no es razonable",
    "options": [
      {
        "value": "a",
        "text": "Me quedo callado",
      },
      {
        "value": "b",
        "text": "A medias",
      },
      {
        "value": "c",
        "text": "Los desprecio",
      },
    ]
  },
  {
    "num": 105,
    "text": "Si alguien habla en voz alta cuando estoy escuchando música",
    "options": [
      {
        "value": "a",
        "text": "Me concentro en la música y así no me molesta",
      },
      {
        "value": "b",
        "text": "A medias",
      },
      {
        "value": "c",
        "text": "Me echan a perder mi gusto y me molesto",
      },
    ]
  },
  {
    "num": 106,
    "text": "Creo que lo que me describe mejor es:",
    "options": [
      {
        "value": "a",
        "text": "Educado y tranquilo",
      },
      {
        "value": "b",
        "text": "A medias",
      },
      {
        "value": "c",
        "text": "Enérgico",
      },
    ]
  },
  {
    "num": 107,
    "text": "Asisto a eventos sociales solo cuando tengo que hacerlo, pero el resto del tiempo me alejo de ellos.",
    "options": [
      {
        "value": "a",
        "text": "Sí",
      },
      {
        "value": "b",
        "text": "En duda",
      },
      {
        "value": "c",
        "text": "No",
      },
    ]
  },
  {
    "num": 108,
    "text": "Ser precavido y esperarpoco es mejor que ser optimista y esperar siempre el éxito.",
    "options": [
      {
        "value": "a",
        "text": "Cierto",
      },
      {
        "value": "b",
        "text": "En duda",
      },
      {
        "value": "c",
        "text": "No",
      },
    ]
  },
  {
    "num": 109,
    "text": "Cuando pienso en las dificultades de mi trabajo académico:",
    "options": [
      {
        "value": "a",
        "text": "Trato de planearlas anticipadamente",
      },
      {
        "value": "b",
        "text": "A medias",
      },
      {
        "value": "c",
        "text": "Supongo que podré manejarlas cuando se presenten",
      },
    ]
  },
  {
    "num": 110,
    "text": "Tengo tantas amistades del sexo opuesto como del mío.",
    "options": [
      {
        "value": "a",
        "text": "Sí",
      },
      {
        "value": "b",
        "text": "Quien sabe",
      },
      {
        "value": "c",
        "text": "No",
      },
    ]
  },
  {
    "num": 111,
    "text": "Aún cuando se trate de un juego importante me interesa más divertirme que ganarlo",
    "options": [
      {
        "value": "a",
        "text": "Siempre",
      },
      {
        "value": "b",
        "text": "Por lo general",
      },
      {
        "value": "c",
        "text": "En Ocasiones",
      },
    ]
  },
  {
    "num": 112,
    "text": "Preferiría ser:",
    "options": [
      {
        "value": "a",
        "text": "Orientador vocacional de muchachos que tratan de encontrar su carrera",
      },
      {
        "value": "b",
        "text": "En duda",
      },
      {
        "value": "c",
        "text": "La gente, en el aspecto técnico, de una fábrica",
      },
    ]
  },
  {
    "num": 113,
    "text": "Si estoy ompletamente seguro de que una persona es injusta o se porta de un modo egoísta se lo digo, aunque me traiga problemas",
    "options": [
      {
        "value": "a",
        "text": "Sí",
      },
      {
        "value": "b",
        "text": "En duda",
      },
      {
        "value": "c",
        "text": "No",
      },
    ]
  },
  {
    "num": 114,
    "text": "Algunas gentes critican mi sentido de responsabilidad",
    "options": [
      {
        "value": "a",
        "text": "Sí",
      },
      {
        "value": "b",
        "text": "En duda",
      },
      {
        "value": "c",
        "text": "No",
      },
    ]
  },
  {
    "num": 115,
    "text": "Me gustaría ser reportero de teatro, ópera, conciertos, etc.",
    "options": [
      {
        "value": "a",
        "text": "Sí",
      },
      {
        "value": "b",
        "text": "Quien sabe",
      },
      {
        "value": "c",
        "text": "No",
      },
    ]
  },
  {
    "num": 116,
    "text": "Me perturba que me alaben o me digan cumplidos",
    "options": [
      {
        "value": "a",
        "text": "Sí",
      },
      {
        "value": "b",
        "text": "En duda",
      },
      {
        "value": "c",
        "text": "No",
      },
    ]
  },
  {
    "num": 117,
    "text": "Me parece que es más importante para el mundo actual resolver",
    "options": [
      {
        "value": "a",
        "text": "Las dificultades políticas",
      },
      {
        "value": "b",
        "text": "En duda",
      },
      {
        "value": "c",
        "text": "El problema moral",
      },
    ]
  },
  {
    "num": 118,
    "text": "En ocasiones tengo un vago sentimiento de peligro o un repentino temor sin que exista motivo suficiente",
    "options": [
      {
        "value": "a",
        "text": "Sí",
      },
      {
        "value": "b",
        "text": "En duda",
      },
      {
        "value": "c",
        "text": "No",
      },
    ]
  },
  {
    "num": 119,
    "text": "De chico le tenía miedo a la oscuridad",
    "options": [
      {
        "value": "a",
        "text": "A menudo",
      },
      {
        "value": "b",
        "text": "A veces",
      },
      {
        "value": "c",
        "text": "Nunca",
      },
    ]
  },
  {
    "num": 120,
    "text": "En una tarde libre me gustaría:",
    "options": [
      {
        "value": "a",
        "text": "Ver una película de aventuras históricas",
      },
      {
        "value": "b",
        "text": "En duda",
      },
      {
        "value": "c",
        "text": "No",
      },
    ]
  },
  {
    "num": 121,
    "text": "Me fastidia que la gente piense que soy demasiado diferente a muy poco convencional",
    "options": [
      {
        "value": "a",
        "text": "Mucho",
      },
      {
        "value": "b",
        "text": "A veces",
      },
      {
        "value": "c",
        "text": "Nunca",
      },
    ]
  },
  {
    "num": 122,
    "text": "La mayoría de la gente sería más feliz si viviera más ligada a sus semejantes e hiciera las mismas cosas que todos",
    "options": [
      {
        "value": "a",
        "text": "Sí",
      },
      {
        "value": "b",
        "text": "Quien sabe",
      },
      {
        "value": "c",
        "text": "No",
      },
    ]
  },
  {
    "num": 123,
    "text": "Me gustaría hacer las cosas a mi modo en vez de obrar de acuerdo con las reglas aprobadas",
    "options": [
      {
        "value": "a",
        "text": "Cierto",
      },
      {
        "value": "b",
        "text": "En duda",
      },
      {
        "value": "c",
        "text": "F also",
      },
    ]
  },
  {
    "num": 124,
    "text": "A menudo me enojo demasiado rápido con la gente",
    "options": [
      {
        "value": "a",
        "text": "Sí",
      },
      {
        "value": "b",
        "text": "En duda",
      },
      {
        "value": "c",
        "text": "No",
      },
    ]
  },
  {
    "num": 125,
    "text": "Cuando algo me transtorna de veras,por lo general me calmo muy rápido",
    "options": [
      {
        "value": "a",
        "text": "Sí",
      },
      {
        "value": "b",
        "text": "A medias",
      },
      {
        "value": "c",
        "text": "No",
      },
    ]
  },
  {
    "num": 126,
    "text": "Si el sueldo fuera igual, preferiría ser:",
    "options": [
      {
        "value": "a",
        "text": "Abogado",
      },
      {
        "value": "b",
        "text": "Quien sabe",
      },
      {
        "value": "c",
        "text": "Piloto o navegante",
      },
    ]
  },
  {
    "num": 127,
    "text": "\"Mejor\" es a \"Peor\",como \"Más lento\" es a:",
    "options": [
      {
        "value": "a",
        "text": "Rápido",
      },
      {
        "value": "b",
        "text": "Óptimo",
      },
      {
        "value": "c",
        "text": "Más veloz",
      },
    ]
  },
  {
    "num": 128,
    "text": "Cuál es la que debe ir al final de esta lista:: xooooxxoooxxx?",
    "options": [
      {
        "value": "a",
        "text": "xox",
      },
      {
        "value": "b",
        "text": "oox",
      },
      {
        "value": "c",
        "text": "oxx",
      },
    ]
  },
  {
    "num": 129,
    "text": "Cuando llega la hora de algo que yo había planeado o anticipado, a veces siento ganas de no ir.",
    "options": [
      {
        "value": "a",
        "text": "Cierto",
      },
      {
        "value": "b",
        "text": "A medias",
      },
      {
        "value": "c",
        "text": "F also",
      },
    ]
  },
  {
    "num": 130,
    "text": "Podría gustarme la vida de un veterinario ocupado en las enfermedades y cirugía de los animales.",
    "options": [
      {
        "value": "a",
        "text": "Sí",
      },
      {
        "value": "b",
        "text": "Quien sabe",
      },
      {
        "value": "c",
        "text": "No",
      },
    ]
  },
  {
    "num": 131,
    "text": "En ocasiones les digo a personas desconocidas cosas que me parecen importantes aunque ellas no me las pregunten.",
    "options": [
      {
        "value": "a",
        "text": "Sí",
      },
      {
        "value": "b",
        "text": "En duda",
      },
      {
        "value": "c",
        "text": "No",
      },
    ]
  },
  {
    "num": 132,
    "text": "Yo paso mucho de mi tiempo libre hablando con amigos de eventos sociales con los cuales nos divertimos en el pasado",
    "options": [
      {
        "value": "a",
        "text": "Sí",
      },
      {
        "value": "b",
        "text": "En duda",
      },
      {
        "value": "c",
        "text": "No",
      },
    ]
  },
  {
    "num": 133,
    "text": "Me agrada hacer cosas temerarias y atrevidas nada más por gusto.",
    "options": [
      {
        "value": "a",
        "text": "Sí",
      },
      {
        "value": "b",
        "text": "En duda",
      },
      {
        "value": "c",
        "text": "No",
      },
    ]
  },
  {
    "num": 134,
    "text": "Creo que podemos confiar en que la policía no maltrata a los inocentes",
    "options": [
      {
        "value": "a",
        "text": "Sí",
      },
      {
        "value": "b",
        "text": "En duda",
      },
      {
        "value": "c",
        "text": "No",
      },
    ]
  },
  {
    "num": 135,
    "text": "Me considero una persona muy sociable con la que es fácil llevarse.",
    "options": [
      {
        "value": "a",
        "text": "Sí",
      },
      {
        "value": "b",
        "text": "A medias",
      },
      {
        "value": "c",
        "text": "No",
      },
    ]
  },
  {
    "num": 136,
    "text": "En el trato social:",
    "options": [
      {
        "value": "a",
        "text": "Demuestro mis emociones",
      },
      {
        "value": "b",
        "text": "A medias",
      },
      {
        "value": "c",
        "text": "No",
      },
    ]
  },
  {
    "num": 137,
    "text": "Me gusta la música",
    "options": [
      {
        "value": "a",
        "text": "Aguda, ligera y viva.",
      },
      {
        "value": "b",
        "text": "En duda",
      },
      {
        "value": "c",
        "text": "Emotiva y sentimental",
      },
    ]
  },
  {
    "num": 138,
    "text": "En los chistes yo trato de hacer que mi risa sea más moderada  que la de la mayoría de la gente.",
    "options": [
      {
        "value": "a",
        "text": "Sí",
      },
      {
        "value": "b",
        "text": "En duda",
      },
      {
        "value": "c",
        "text": "No",
      },
    ]
  },
  {
    "num": 139,
    "text": "Admiro más las belleza de un cuento de hadas, que la de un revólver bien hecho.",
    "options": [
      {
        "value": "a",
        "text": "Sí",
      },
      {
        "value": "b",
        "text": "En duda",
      },
      {
        "value": "c",
        "text": "No",
      },
    ]
  },
  {
    "num": 140,
    "text": "Oir diferentes opiniones del bien y del mal:",
    "options": [
      {
        "value": "a",
        "text": "Siempre interesa",
      },
      {
        "value": "b",
        "text": "No se puede evitar",
      },
      {
        "value": "c",
        "text": "Perjudica a la mayoría de la gente",
      },
    ]
  },
  {
    "num": 141,
    "text": "Siempre me interesa los asuntos de mecánica, como los coches y aviones, por ejemplo.",
    "options": [
      {
        "value": "a",
        "text": "Sí",
      },
      {
        "value": "b",
        "text": "A medias",
      },
      {
        "value": "c",
        "text": "No",
      },
    ]
  },
  {
    "num": 142,
    "text": "Me gusta enfrentarme a los problemas que otras gentes han dejado enredados",
    "options": [
      {
        "value": "a",
        "text": "Sí",
      },
      {
        "value": "b",
        "text": "En duda",
      },
      {
        "value": "c",
        "text": "No",
      },
    ]
  },
  {
    "num": 143,
    "text": "Me consideran, acertadamente, como una persona trabajadora y de poco éxito",
    "options": [
      {
        "value": "a",
        "text": "Sí",
      },
      {
        "value": "b",
        "text": "En duda",
      },
      {
        "value": "c",
        "text": "No",
      },
    ]
  },
  {
    "num": 144,
    "text": "Si la gente abusa de mi amistad, no lo resiento y lo olvido rápido",
    "options": [
      {
        "value": "a",
        "text": "Si",
      },
      {
        "value": "b",
        "text": "Quien sabe",
      },
      {
        "value": "c",
        "text": "No",
      },
    ]
  },
  {
    "num": 145,
    "text": "Pienso que difundir el control de la natalidad, es esencial para resolver los problemas de la paz y de la economía en el mundo",
    "options": [
      {
        "value": "a",
        "text": "Sí",
      },
      {
        "value": "b",
        "text": "Quien sabe",
      },
      {
        "value": "c",
        "text": "No",
      },
    ]
  },
  {
    "num": 146,
    "text": "Me gusta hacer mis planes yo solo, sin que nadie me interrumpa para aconsejarme.",
    "options": [
      {
        "value": "a",
        "text": "Sí",
      },
      {
        "value": "b",
        "text": "En duda",
      },
      {
        "value": "c",
        "text": "No",
      },
    ]
  },
  {
    "num": 147,
    "text": "A veces dejo que mis acciones se vean influenciados por mis celos.",
    "options": [
      {
        "value": "a",
        "text": "Sí",
      },
      {
        "value": "b",
        "text": "En duda",
      },
      {
        "value": "c",
        "text": "No",
      },
    ]
  },
  {
    "num": 148,
    "text": "Estoy convencido de que \"el patrón podrá no tener la razón, pero tiene más derecho por ser patrón.\"",
    "options": [
      {
        "value": "a",
        "text": "Sí",
      },
      {
        "value": "b",
        "text": "En duda",
      },
      {
        "value": "c",
        "text": "No",
      },
    ]
  },
  {
    "num": 149,
    "text": "Cuando pienso que se me viene un trabajo difícil tiendo a sudar o a temblar.",
    "options": [
      {
        "value": "a",
        "text": "Por lo general",
      },
      {
        "value": "b",
        "text": "En ocasiones",
      },
      {
        "value": "c",
        "text": "Nunca",
      },
    ]
  },
  {
    "num": 150,
    "text": "Me molesta que la gente me grite lo que tengo que hacer cuando estoy jugando",
    "options": [
      {
        "value": "a",
        "text": "Cierto",
      },
      {
        "value": "b",
        "text": "Dudoso",
      },
      {
        "value": "c",
        "text": "F also",
      },
    ]
  },
  {
    "num": 151,
    "text": "Preferiría la vida de:",
    "options": [
      {
        "value": "a",
        "text": "Un artista",
      },
      {
        "value": "b",
        "text": "Quien sabe",
      },
      {
        "value": "c",
        "text": "Encargado de un club social",
      },
    ]
  },
  {
    "num": 152,
    "text": "¿Cuál de las siguientes palabras  no es de la misma clase que las otras dos?",
    "options": [
      {
        "value": "a",
        "text": "Cualquiera",
      },
      {
        "value": "b",
        "text": "Algo",
      },
      {
        "value": "c",
        "text": "Más",
      },
    ]
  },
  {
    "num": 153,
    "text": "\"Llama\" es a \"Calor\" como \"Rosa\" es a:",
    "options": [
      {
        "value": "a",
        "text": "Espina",
      },
      {
        "value": "b",
        "text": "Pétalo rojo",
      },
      {
        "value": "c",
        "text": "Perfume",
      },
    ]
  },
  {
    "num": 154,
    "text": "Tengo sueños tan reales que turban mi dormir",
    "options": [
      {
        "value": "a",
        "text": "A menudo",
      },
      {
        "value": "b",
        "text": "En ocasiones",
      },
      {
        "value": "c",
        "text": "Casi nunca",
      },
    ]
  },
  {
    "num": 155,
    "text": "Aunque las probabilidades de que algo tenga éxito están completamente en contra, sigo pensando en aceptar el riesgo",
    "options": [
      {
        "value": "a",
        "text": "Sí",
      },
      {
        "value": "b",
        "text": "En duda",
      },
      {
        "value": "c",
        "text": "No",
      },
    ]
  },
  {
    "num": 156,
    "text": "Me agrada saber bien lo que el grupo tiene que hacer para que así sea yo el que manda.",
    "options": [
      {
        "value": "a",
        "text": "Sí",
      },
      {
        "value": "b",
        "text": "En duda",
      },
      {
        "value": "c",
        "text": "No",
      },
    ]
  },
  {
    "num": 157,
    "text": "Preferiría vestirme sencilla y correctamente y no con un estilo personal y llamativo",
    "options": [
      {
        "value": "a",
        "text": "Sí",
      },
      {
        "value": "b",
        "text": "Dudoso",
      },
      {
        "value": "c",
        "text": "F also",
      },
    ]
  },
  {
    "num": 158,
    "text": "Me llama más la atención pasar una tarde con un pasatiempo tranquilo que en una fiesta animada",
    "options": [
      {
        "value": "a",
        "text": "Cierto",
      },
      {
        "value": "b",
        "text": "Quien sabe",
      },
      {
        "value": "c",
        "text": "F also",
      },
    ]
  },
  {
    "num": 159,
    "text": "Cierro los ojos ante los consejos bien intencionados de otras personas, aunque no debería hacerlo",
    "options": [
      {
        "value": "a",
        "text": "En ocasiones",
      },
      {
        "value": "b",
        "text": "Casi nunca",
      },
      {
        "value": "c",
        "text": "Nunca",
      },
    ]
  },
  {
    "num": 160,
    "text": "Al decidir cualquier cosa, siempre hago hincapié en las reglas básicas de lo bueno y lo malo",
    "options": [
      {
        "value": "a",
        "text": "Sí",
      },
      {
        "value": "b",
        "text": "En duda",
      },
      {
        "value": "c",
        "text": "No",
      },
    ]
  },
  {
    "num": 161,
    "text": "Me disgusta un poco que mi grupo me observe cuando estoy en el trabajo",
    "options": [
      {
        "value": "a",
        "text": "Sí",
      },
      {
        "value": "b",
        "text": "En duda",
      },
      {
        "value": "c",
        "text": "No",
      },
    ]
  },
  {
    "num": 162,
    "text": "Casi siempre mi cuarto está bien arreglado con lugar para cada cosa y cada cosa en su lugar",
    "options": [
      {
        "value": "a",
        "text": "Si",
      },
      {
        "value": "b",
        "text": "En duda",
      },
      {
        "value": "c",
        "text": "No",
      },
    ]
  },
  {
    "num": 163,
    "text": "En el colegio me gustaba más",
    "options": [
      {
        "value": "a",
        "text": "Lengua y Literatura",
      },
      {
        "value": "b",
        "text": "Quien sabe",
      },
      {
        "value": "c",
        "text": "Aritmética y Matemáticas",
      },
    ]
  },
  {
    "num": 164,
    "text": "A veces me causa problemas el que la gente hable mal de mí a mis espaldas, sin tener razón",
    "options": [
      {
        "value": "a",
        "text": "Sí",
      },
      {
        "value": "b",
        "text": "En duda",
      },
      {
        "value": "c",
        "text": "No",
      },
    ]
  },
  {
    "num": 165,
    "text": "Hablar con la gente convencional, común y corriente:",
    "options": [
      {
        "value": "a",
        "text": "A menudo es interesante e importante",
      },
      {
        "value": "b",
        "text": "A medias",
      },
      {
        "value": "c",
        "text": "Me molesta porque dicen tonterías y cosas superficiales",
      },
    ]
  },
  {
    "num": 166,
    "text": "me gusta:",
    "options": [
      {
        "value": "a",
        "text": "Tener un círculo de amigos íntimos aunque sean exigentes",
      },
      {
        "value": "b",
        "text": "En duda",
      },
      {
        "value": "c",
        "text": "Sentirme sin ataduras",
      },
    ]
  },
  {
    "num": 167,
    "text": "Pienso que es más sensato mantener poderosas a las Fuerzas Armadas del país, que depender de la buena voluntad internacional.",
    "options": [
      {
        "value": "a",
        "text": "Sí",
      },
      {
        "value": "b",
        "text": "Quien sabe",
      },
      {
        "value": "c",
        "text": "No",
      },
    ]
  },
  {
    "num": 168,
    "text": "La gente me considera una persona estable, sin perturbaciones, inconmovible ante las altas y las bajas de la vida",
    "options": [
      {
        "value": "a",
        "text": "Sí",
      },
      {
        "value": "b",
        "text": "En duda",
      },
      {
        "value": "c",
        "text": "No",
      },
    ]
  },
  {
    "num": 169,
    "text": "Pienso que la sociedad debería dejar que la razón la encaminara hacia nuevas costumbres y hacer a un lado los viejos hábitos y meras tradiciones",
    "options": [
      {
        "value": "a",
        "text": "Sí",
      },
      {
        "value": "b",
        "text": "En duda",
      },
      {
        "value": "c",
        "text": "No",
      },
    ]
  },
  {
    "num": 170,
    "text": "Mis puntos de vista cambian de un modo incierto porque le tengo mas fé a mis sentimientos que a mi razonamiento lógico.",
    "options": [
      {
        "value": "a",
        "text": "Cierto",
      },
      {
        "value": "b",
        "text": "Hasta cierto punto",
      },
      {
        "value": "c",
        "text": "F also",
      },
    ]
  },
  {
    "num": 171,
    "text": "Yo aprendo mejor",
    "options": [
      {
        "value": "a",
        "text": "Leyendo un libro bien escrito",
      },
      {
        "value": "b",
        "text": "A medias",
      },
      {
        "value": "c",
        "text": "Interviniendo en la discusión de un grupo.",
      },
    ]
  },
  {
    "num": 172,
    "text": "Tengo ratos en los que me es difícil evitar un sentimiento de autocompasión",
    "options": [
      {
        "value": "a",
        "text": "A menudo",
      },
      {
        "value": "b",
        "text": "En ocasiones",
      },
      {
        "value": "c",
        "text": "Nunca",
      },
    ]
  },
  {
    "num": 173,
    "text": "Me gusta esperar hasta estar seguro de que lo que estoy haciendo es correcto antes de .presentar mis opiniones",
    "options": [
      {
        "value": "a",
        "text": "Siempre",
      },
      {
        "value": "b",
        "text": "Por lo general",
      },
      {
        "value": "c",
        "text": "Sólo si es conveniente",
      },
    ]
  },
  {
    "num": 174,
    "text": "Aunque me doy cuenta de que no tiene ninguna importancia algunas veces ciertas cositas me ponen los nervios de punta",
    "options": [
      {
        "value": "a",
        "text": "Sí",
      },
      {
        "value": "b",
        "text": "En duda",
      },
      {
        "value": "c",
        "text": "No",
      },
    ]
  },
  {
    "num": 175,
    "text": "Pocas veces digo cosas, de las que después tenga que arrepentirme, empujado por una situación pasajera",
    "options": [
      {
        "value": "a",
        "text": "Cierto",
      },
      {
        "value": "b",
        "text": "En duda",
      },
      {
        "value": "c",
        "text": "F also",
      },
    ]
  },
  {
    "num": 176,
    "text": "Si me pidieran que trabajara en una obra de caridad",
    "options": [
      {
        "value": "a",
        "text": "Aceptaría",
      },
      {
        "value": "b",
        "text": "Quien sabe",
      },
      {
        "value": "c",
        "text": "respondería cortésmente que estoy ocupado",
      },
    ]
  },
  {
    "num": 177,
    "text": "¿Cuál de las siguientes palabras  no es de la misma clase que las otras dos?",
    "options": [
      {
        "value": "a",
        "text": "Amplio",
      },
      {
        "value": "b",
        "text": "zigzag",
      },
      {
        "value": "c",
        "text": "regular",
      },
    ]
  },
  {
    "num": 178,
    "text": "\"Pronto\" es a \"Nunca\" como \"Cerca\" es a:",
    "options": [
      {
        "value": "a",
        "text": "En ninguna parte",
      },
      {
        "value": "b",
        "text": "Lejos",
      },
      {
        "value": "c",
        "text": "Siguiente",
      },
    ]
  },
  {
    "num": 179,
    "text": "Tengo un buen sentido de orientación cuando estoy en un lugar extraño (descubro con facilidad dónde está el Norte, el Sur,etc.)",
    "options": [
      {
        "value": "a",
        "text": "Sí",
      },
      {
        "value": "b",
        "text": "En duda",
      },
      {
        "value": "c",
        "text": "No",
      },
    ]
  },
  {
    "num": 180,
    "text": "Me conocen como un \"hombre de ideas\" porque siempre se me ocurren algunas cuando hay un problema.",
    "options": [
      {
        "value": "a",
        "text": "Sí",
      },
      {
        "value": "b",
        "text": "En duda",
      },
      {
        "value": "c",
        "text": "No",
      },
    ]
  },
  {
    "num": 181,
    "text": "Pienso que soy mejor cuando demuestro:",
    "options": [
      {
        "value": "a",
        "text": "Serenidad en los retos que me hacen dentro del grupo.",
      },
      {
        "value": "b",
        "text": "Quien sabe",
      },
      {
        "value": "c",
        "text": "Mi tolerancia para con los deseos de otras personas",
      },
    ]
  },
  {
    "num": 182,
    "text": "me consideran una persona muy entusiasta.",
    "options": [
      {
        "value": "a",
        "text": "Sí",
      },
      {
        "value": "b",
        "text": "A medias",
      },
      {
        "value": "c",
        "text": "No",
      },
    ]
  },
  {
    "num": 183,
    "text": "Me gusta un trabajo que tenga novedades, cambios y viajes aunque presenten ciertos peligros.",
    "options": [
      {
        "value": "a",
        "text": "Sí",
      },
      {
        "value": "b",
        "text": "En duda",
      },
      {
        "value": "c",
        "text": "No",
      },
    ]
  },
  {
    "num": 184,
    "text": "Soy una persona bastante estricta que insiste siempre en hacer las cosas correctamente como sea posible",
    "options": [
      {
        "value": "a",
        "text": "Cierto",
      },
      {
        "value": "b",
        "text": "En duda",
      },
      {
        "value": "c",
        "text": "No",
      },
    ]
  },
  {
    "num": 185,
    "text": "Me gustan los trabajos que requieran habilidades exactas, concienzudas.",
    "options": [
      {
        "value": "a",
        "text": "Sí",
      },
      {
        "value": "b",
        "text": "A medias",
      },
      {
        "value": "c",
        "text": "No",
      },
    ]
  },
  {
    "num": 186,
    "text": "Soy del tipo de gente con energía, de los que se mantienen ocupados",
    "options": [
      {
        "value": "a",
        "text": "Sí",
      },
      {
        "value": "b",
        "text": "En duda",
      },
      {
        "value": "c",
        "text": "No",
      },
    ]
  },
  {
    "num": 187,
    "text": "Estoy seguro de que no hubo preguntas que haya omitido o que las haya contestado impropiamente",
    "options": [
      {
        "value": "a",
        "text": "Sí",
      },
      {
        "value": "b",
        "text": "Quien sabe",
      },
      {
        "value": "c",
        "text": "No",
      },
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
    const updateColors = () => {
      fieldset.querySelectorAll('label').forEach(l => {
        l.classList.remove('user-selected');
        l.classList.remove('default-selected');
      });
      const checked = fieldset.querySelector('input:checked');
      if (checked) checked.parentElement.classList.add('user-selected');
    };
    q.options.forEach(opt => {
      const label = document.createElement("label");
      const input = document.createElement("input");
      input.type = "radio";
      input.name = "q" + q.num;
      input.value = opt.value;
      if (opt.value === 'a') {
        input.checked = true;
        label.classList.add('default-selected');
      }
      input.addEventListener('click', updateColors);
      label.appendChild(input);
      label.appendChild(
        document.createTextNode(" " + opt.value + ") " + opt.text)
      );
      fieldset.appendChild(label);
      fieldset.appendChild(document.createElement("br"));
    });
    container.appendChild(fieldset);
  });
});

document.getElementById('generate-report').addEventListener('click', () => {
  if (!window.reportData) {
    // Si el usuario no ha presionado "Enviar" generamos los resultados
    const form = document.getElementById('survey-form');
    if (form) {
      form.dispatchEvent(new Event('submit', { cancelable: true, bubbles: true }));
    }
  }
  if (!window.reportData) {
    alert('Primero complete el formulario y presione Enviar.');
    return;
  }
  const { personal, pb, decat } = window.reportData;
  const doc = new docx.Document({ sections: [] });
  const P = docx.Paragraph;
  const H1 = level => new docx.Paragraph({ text: level, heading: docx.HeadingLevel.HEADING_1 });

  doc.addSection({
    children: [
      H1('I. Datos Generales'),
      new P(`Nombre y apellidos: ${personal.nombre}`),
      new P('Fecha de nacimiento: ______________________________'),
      new P(`Edad: ${personal.edad}`),
      new P(`Sexo: ${personal.sexo}`),
      new P(`Grado Educativo: ${personal.grado}`),
      new P(`Fecha de evaluación  informe: ${personal.fecha}`),
      new P(`Responsable Psicólogo: ${personal.responsable}`),

      H1('II. Motivo de Consulta'),
      new P('Propósito de la evaluación: __________________________________________'),

      H1('III. Observación General de la Conducta'),
      new P('Apariencia física: __________________________________________'),
      new P('Conducta durante la evaluación: __________________________________________'),

      H1('IV. Técnicas e Instrumentos Utilizados'),
      new P('Enumeración de instrumentos: __________________________________________'),
      new P('Entrevista'),
      new P('Observación'),
      new P('Test 16PF de Cattell'),

      H1('V. Resultados'),
      new P(`A PB:${pb.A} Decat:${decat.A}`),
      new P(`B PB:${pb.B} Decat:${decat.B}`),
      new P(`C PB:${pb.C} Decat:${decat.C}`),
      new P(`E PB:${pb.E} Decat:${decat.E}`),
      new P(`F PB:${pb.F} Decat:${decat.F}`),
      new P(`G PB:${pb.G} Decat:${decat.G}`),
      new P(`H PB:${pb.H} Decat:${decat.H}`),
      new P(`I PB:${pb.I} Decat:${decat.I}`),
      new P(`L PB:${pb.L} Decat:${decat.L}`),
      new P(`M PB:${pb.M} Decat:${decat.M}`),
      new P(`N PB:${pb.N} Decat:${decat.N}`),
      new P(`O PB:${pb.O} Decat:${decat.O}`),
      new P(`Q1 PB:${pb.Q1} Decat:${decat.Q1}`),
      new P(`Q2 PB:${pb.Q2} Decat:${decat.Q2}`),
      new P(`Q3 PB:${pb.Q3} Decat:${decat.Q3}`),
      new P(`Q4 PB:${pb.Q4} Decat:${decat.Q4}`),

      H1('VI. Integración de Resultados'),
      new P('____________________________________________________________'),

      H1('VII. Conclusiones'),
      new P('____________________________________________________________'),

      H1('VIII. Recomendaciones'),
      new P('____________________________________________________________'),

      H1('IX. Anexos'),
      new P('Gráficos de perfil incluidos.'),

      new P('Nombre y firma del evaluador'),
      new P('Cláusula de confidencialidad y condiciones (válida para el momento presente, sujeta a nuevas evaluaciones si cambian las condiciones)')
    ]
  });

  docx.Packer.toBlob(doc).then(blob => {
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'informe.docx';
    a.click();
    URL.revokeObjectURL(url);
  });
});

// Calcular Factor PB para A según las respuestas
function calcularFactorPB_A(ans) {
  const primera = [
    [3, 'a'], [26, 'c'], [27, 'c'], [51, 'c'], [52, 'a'],
    [76, 'c'], [101, 'a'], [126, 'a'], [151, 'c'], [176, 'a']
  ];
  const segunda = [
    [3, 'b'], [26, 'b'], [27, 'b'], [51, 'b'], [52, 'b'],
    [76, 'b'], [101, 'b'], [126, 'b'], [151, 'b'], [176, 'b']
  ];
  let total = 0;
  primera.forEach(([n,v]) => { if (ans['q'+n] === v) total += 1; });
  total *= 2;
  segunda.forEach(([n,v]) => { if (ans['q'+n] === v) total += 1; });
  return total;
}

// Calcular Factor PB para B según las respuestas
function calcularFactorPB_B(ans) {
  const items = [
    [28, 'b'], [53, 'b'], [54, 'b'], [77, 'c'], [78, 'b'],
    [102, 'c'], [103, 'b'], [127, 'c'], [128, 'b'], [152, 'a'],
    [153, 'a'], [177, 'a'], [178, 'a']
  ];
  let total = 0;
  items.forEach(([n,v]) => { if (ans['q'+n] === v) total += 1; });
  return total;
}

// Calcular Factor PB para C según las respuestas
function calcularFactorPB_C(ans) {
  const primera = [
    [4, 'a'], [5, 'c'], [29, 'c'], [30, 'a'],
    [55, 'a'], [79, 'c'], [80, 'c'], [104, 'a'],
    [105, 'a'], [129, 'a'], [154, 'c'], [179, 'a']
  ];
  const segunda = [
    [4, 'b'], [5, 'b'], [29, 'b'], [30, 'b'],
    [55, 'b'], [79, 'b'], [80, 'b'], [104, 'b'],
    [105, 'b'], [129, 'b'], [154, 'b'], [179, 'b']
  ];
  let total = 0;
  primera.forEach(([n,v]) => { if (ans['q'+n] === v) total += 1; });
  total *= 2;
  segunda.forEach(([n,v]) => { if (ans['q'+n] === v) total += 1; });
  return total;
}

// Calcular Factor PB para E según las respuestas
function calcularFactorPB_E(ans) {
  const primera = [
    [6, 'a'], [7, 'a'], [31, 'c'], [32, 'c'],
    [56, 'a'], [57, 'c'], [58, 'c'], [106, 'c'],
    [131, 'a'], [155, 'a'], [156, 'a'], [180, 'a'],
    [181, 'a']
  ];
  const segunda = [
    [6, 'b'], [7, 'b'], [31, 'b'], [32, 'b'],
    [56, 'b'], [57, 'b'], [58, 'c'], [106, 'b'],
    [131, 'b'], [155, 'b'], [156, 'b'], [180, 'b'],
    [181, 'b']
  ];
  let total = 0;
  primera.forEach(([n,v]) => { if (ans['q'+n] === v) total += 1; });
  total *= 2;
  segunda.forEach(([n,v]) => { if (ans['q'+n] === v) total += 1; });
  return total;
}

// Calcular Factor PB para F según las respuestas
function calcularFactorPB_F(ans) {
  const primera = [
    [8, 'c'], [33, 'a'], [58, 'a'], [82, 'c'],
    [83, 'a'], [107, 'c'], [132, 'a'], [133, 'a'],
    [157, 'c'], [158, 'c'], [182, 'a'], [183, 'a']
  ];
  const segunda = [
    [8, 'b'], [33, 'b'], [58, 'b'], [82, 'b'],
    [83, 'b'], [107, 'b'], [132, 'b'], [133, 'b'],
    [157, 'b'], [158, 'b'], [182, 'b'], [183, 'b']
  ];
  let total = 0;
  primera.forEach(([n,v]) => { if (ans['q'+n] === v) total += 1; });
  total *= 2;
  segunda.forEach(([n,v]) => { if (ans['q'+n] === v) total += 1; });
  return total;
}

// Calcular Factor PB para G según las respuestas
function calcularFactorPB_G(ans) {
  const primera = [
    [9, 'c'], [34, 'c'], [59, 'c'], [84, 'c'],
    [109, 'a'], [134, 'a'], [159, 'c'], [160, 'a'],
    [184, 'a'], [185, 'a']
  ];
  const segunda = [
    [9, 'b'], [34, 'b'], [59, 'b'], [84, 'b'],
    [109, 'b'], [134, 'b'], [159, 'b'], [160, 'b'],
    [184, 'b'], [185, 'b']
  ];
  let total = 0;
  primera.forEach(([n,v]) => { if (ans['q'+n] === v) total += 1; });
  total *= 2;
  segunda.forEach(([n,v]) => { if (ans['q'+n] === v) total += 1; });
  return total;
}

// Calcular Factor PB para H según las respuestas
function calcularFactorPB_H(ans) {
  const primera = [
    [10, 'a'], [35, 'c'], [36, 'a'], [60, 'c'],
    [61, 'c'], [85, 'c'], [86, 'c'], [110, 'a'],
    [111, 'a'], [135, 'a'], [136, 'a'], [161, 'c'],
    [186, 'a']
  ];
  const segunda = [
    [10, 'b'], [35, 'b'], [36, 'b'], [60, 'b'],
    [61, 'b'], [85, 'b'], [86, 'b'], [110, 'b'],
    [135, 'b'], [136, 'b'], [161, 'b'], [186, 'b']
  ];
  let total = 0;
  primera.forEach(([n,v]) => { if (ans['q'+n] === v) total += 1; });
  total *= 2;
  segunda.forEach(([n,v]) => { if (ans['q'+n] === v) total += 1; });
  return total;
}

// Calcular Factor PB para I según las respuestas
function calcularFactorPB_I(ans) {
  const primera = [
    [11, 'c'], [12, 'a'], [37, 'a'], [62, 'c'],
    [87, 'c'], [112, 'a'], [137, 'c'], [138, 'a'],
    [162, 'c'], [163, 'a']
  ];
  const segunda = [
    [11, 'b'], [12, 'b'], [37, 'b'], [62, 'b'],
    [87, 'b'], [112, 'b'], [137, 'b'], [138, 'b'],
    [162, 'b'], [163, 'b']
  ];
  let total = 0;
  primera.forEach(([n,v]) => { if (ans['q'+n] === v) total += 1; });
  total *= 2;
  segunda.forEach(([n,v]) => { if (ans['q'+n] === v) total += 1; });
  return total;
}

// Calcular Factor PB para L según las respuestas
function calcularFactorPB_L(ans) {
  const primera = [
    [13, 'c'], [38, 'a'], [63, 'c'], [64, 'c'],
    [88, 'a'], [89, 'c'], [113, 'a'], [114, 'a'],
    [139, 'c'], [164, 'a']
  ];
  const segunda = [
    [13, 'b'], [38, 'b'], [63, 'b'], [64, 'b'],
    [88, 'b'], [89, 'b'], [113, 'b'], [114, 'b'],
    [139, 'b'], [164, 'b']
  ];
  let total = 0;
  primera.forEach(([n,v]) => { if (ans['q'+n] === v) total += 1; });
  total *= 2;
  segunda.forEach(([n,v]) => { if (ans['q'+n] === v) total += 1; });
  return total;
}

// Calcular Factor PB para M según las respuestas
function calcularFactorPB_M(ans) {
  const primera = [
    [14, 'c'], [15, 'c'], [39, 'a'], [40, 'a'],
    [65, 'a'], [90, 'c'], [91, 'a'], [115, 'a'],
    [116, 'a'], [140, 'a'], [141, 'c'], [165, 'c'],
    [166, 'c']
  ];
  const segunda = [
    [14, 'b'], [15, 'b'], [39, 'b'], [40, 'b'],
    [65, 'b'], [90, 'b'], [91, 'b'], [115, 'b'],
    [116, 'b'], [140, 'b'], [141, 'b'], [165, 'b'],
    [166, 'b']
  ];
  let total = 0;
  primera.forEach(([n,v]) => { if (ans['q'+n] === v) total += 1; });
  total *= 2;
  segunda.forEach(([n,v]) => { if (ans['q'+n] === v) total += 1; });
  return total;
}

// Calcular Factor PB para N según las respuestas
function calcularFactorPB_N(ans) {
  const primera = [
    [20, 'a'], [45, 'c'], [70, 'a'], [95, 'c'],
    [120, 'c'], [145, 'a'], [169, 'a'], [170, 'c']
  ];
  const segunda = [
    [20, 'b'], [21, 'c'], [45, 'b'], [46, 'a'],
    [70, 'b'], [95, 'b'], [120, 'b'], [145, 'b'],
    [169, 'b'], [170, 'b']
  ];
  let total = 0;
  primera.forEach(([n,v]) => { if (ans['q'+n] === v) total += 1; });
  total *= 2;
  segunda.forEach(([n,v]) => { if (ans['q'+n] === v) total += 1; });
  return total;
}

// Calcular Factor PB para O según las respuestas
function calcularFactorPB_O(ans) {
  const primera = [
    [18, 'a'], [19, 'c'], [43, 'a'], [44, 'c'],
    [68, 'c'], [69, 'a'], [93, 'c'], [94, 'a'],
    [118, 'a'], [119, 'a'], [143, 'a'], [144, 'c'],
    [168, 'c']
  ];
  const segunda = [
    [18, 'b'], [19, 'b'], [43, 'b'], [44, 'b'],
    [68, 'b'], [69, 'b'], [93, 'b'], [94, 'b'],
    [118, 'b'], [119, 'b'], [143, 'b'], [144, 'b'],
    [168, 'b']
  ];
  let total = 0;
  primera.forEach(([n,v]) => { if (ans['q'+n] === v) total += 1; });
  total *= 2;
  segunda.forEach(([n,v]) => { if (ans['q'+n] === v) total += 1; });
  return total;
}

// Calcular Factor PB para Q1 según las respuestas
function calcularFactorPB_Q1(ans) {
  const primera = [
    [21, 'a'], [46, 'c'], [70, 'a'], [95, 'c'],
    [120, 'c'], [145, 'a'], [169, 'a'], [170, 'c']
  ];
  const segunda = [
    [21, 'b'], [22, 'c'], [46, 'b'], [47, 'a'],
    [70, 'b'], [95, 'b'], [120, 'b'], [145, 'b'],
    [169, 'b'], [170, 'b']
  ];
  let total = 0;
  primera.forEach(([n,v]) => { if (ans['q'+n] === v) total += 1; });
  total *= 2;
  segunda.forEach(([n,v]) => { if (ans['q'+n] === v) total += 1; });
  return total;
}

// Calcular Factor PB para Q2 según las respuestas
function calcularFactorPB_Q2(ans) {
  const primera = [
    [22, 'c'], [47, 'a'], [71, 'a'], [72, 'a'],
    [96, 'c'], [97, 'c'], [121, 'c'], [122, 'c'],
    [146, 'a'], [171, 'a']
  ];
  const segunda = [
    [22, 'b'], [47, 'b'], [71, 'b'], [72, 'b'],
    [96, 'b'], [97, 'b'], [121, 'b'], [122, 'b'],
    [146, 'b'], [171, 'b']
  ];
  let total = 0;
  primera.forEach(([n,v]) => { if (ans['q'+n] === v) total += 1; });
  total *= 2;
  segunda.forEach(([n,v]) => { if (ans['q'+n] === v) total += 1; });
  return total;
}

// Calcular Factor PB para Q3 según las respuestas
function calcularFactorPB_Q3(ans) {
  const primera = [
    [24, 'c'], [25, 'c'], [49, 'a'], [74, 'a'],
    [99, 'a'], [123, 'c'], [147, 'c'], [148, 'a'],
    [172, 'c'], [173, 'a']
  ];
  const segunda = [
    [24, 'b'], [25, 'b'], [49, 'b'], [74, 'b'],
    [99, 'b'], [123, 'b'], [147, 'b'], [148, 'b'],
    [172, 'b'], [173, 'b']
  ];
  let total = 0;
  primera.forEach(([n,v]) => { if (ans['q'+n] === v) total += 1; });
  total *= 2;
  segunda.forEach(([n,v]) => { if (ans['q'+n] === v) total += 1; });
  return total;
}

// Calcular Factor PB para Q4 según las respuestas
function calcularFactorPB_Q4(ans) {
  const primera = [
    [25, 'c'], [49, 'a'], [50, 'a'], [74, 'a'],
    [75, 'c'], [99, 'a'], [100, 'c'], [124, 'a'],
    [125, 'c'], [149, 'a'], [150, 'c'], [174, 'a'],
    [175, 'c']
  ];
  const segunda = [
    [25, 'b'], [49, 'b'], [50, 'b'], [74, 'b'],
    [75, 'b'], [99, 'b'], [100, 'b'], [124, 'b'],
    [125, 'b'], [149, 'b'], [150, 'b'], [174, 'b'],
    [175, 'b']
  ];
  let total = 0;
  primera.forEach(([n,v]) => { if (ans['q'+n] === v) total += 1; });
  total *= 2;
  segunda.forEach(([n,v]) => { if (ans['q'+n] === v) total += 1; });
  return total;
}

document.getElementById('survey-form').addEventListener('submit', evt => {
  evt.preventDefault();
  const formData = new FormData(evt.target);
  const sexo = formData.get('sexo');
  const personal = {
    nombre: formData.get('nombre'),
    edad: formData.get('edad'),
    sexo: sexo,
    grado: formData.get('grado'),
    fecha: formData.get('fecha'),
    responsable: formData.get('responsable')
  };
  const respuestas = {};
  questions.forEach(q => { respuestas['q'+q.num] = formData.get('q'+q.num); });
  const pbA = calcularFactorPB_A(respuestas);
  const pbB = calcularFactorPB_B(respuestas);
  const pbC = calcularFactorPB_C(respuestas);
  const pbE = calcularFactorPB_E(respuestas);
  const pbF = calcularFactorPB_F(respuestas);
  const pbG = calcularFactorPB_G(respuestas);
  const pbH = calcularFactorPB_H(respuestas);
  const pbI = calcularFactorPB_I(respuestas);
  const pbL = calcularFactorPB_L(respuestas);
  const pbM = calcularFactorPB_M(respuestas);
  const pbN = calcularFactorPB_N(respuestas);
  const pbO = calcularFactorPB_O(respuestas);
  const pbQ1 = calcularFactorPB_Q1(respuestas);
  const pbQ2 = calcularFactorPB_Q2(respuestas);
  const pbQ3 = calcularFactorPB_Q3(respuestas);
  const pbQ4 = calcularFactorPB_Q4(respuestas);
  const cellA = document.getElementById('pb-a');
  if (cellA) cellA.textContent = pbA;
  const cellB = document.getElementById('pb-b');
  if (cellB) cellB.textContent = pbB;
  const cellC = document.getElementById('pb-c');
  if (cellC) cellC.textContent = pbC;
  const cellE = document.getElementById('pb-e');
  if (cellE) cellE.textContent = pbE;
  const cellF = document.getElementById('pb-f');
  if (cellF) cellF.textContent = pbF;
  const cellG = document.getElementById('pb-g');
  if (cellG) cellG.textContent = pbG;
  const cellH = document.getElementById('pb-h');
  if (cellH) cellH.textContent = pbH;
  const cellI = document.getElementById('pb-i');
  if (cellI) cellI.textContent = pbI;
  const cellL = document.getElementById('pb-l');
  if (cellL) cellL.textContent = pbL;
  const cellM = document.getElementById('pb-m');
  if (cellM) cellM.textContent = pbM;
  const cellN = document.getElementById('pb-n');
  if (cellN) cellN.textContent = pbN;
  const cellO = document.getElementById('pb-o');
  if (cellO) cellO.textContent = pbO;
  const cellQ1 = document.getElementById('pb-q1');
  if (cellQ1) cellQ1.textContent = pbQ1;
  const cellQ2 = document.getElementById('pb-q2');
  if (cellQ2) cellQ2.textContent = pbQ2;
  const cellQ3 = document.getElementById('pb-q3');
  if (cellQ3) cellQ3.textContent = pbQ3;
  const cellQ4 = document.getElementById('pb-q4');
  if (cellQ4) cellQ4.textContent = pbQ4;

  const newPbCells = ['a','b','c','e','f','g','h','i','l','m','n','o','q1','q2','q3','q4'];
  const newPbValues = [pbA,pbB,pbC,pbE,pbF,pbG,pbH,pbI,pbL,pbM,pbN,pbO,pbQ1,pbQ2,pbQ3,pbQ4];
  newPbCells.forEach((letter, idx) => {
    const el = document.getElementById(`res-pb-${letter}`);
    if (el) el.textContent = newPbValues[idx];
  });

  function pbToDecat(pb) {
    return Math.min(10, Math.floor((pb - 1) / 3) + 1);
  }

  const decA = pbToDecat(pbA);
  const decB = pbToDecat(pbB);
  const decC = pbToDecat(pbC);
  const decE = pbToDecat(pbE);
  const decF = pbToDecat(pbF);
  const decG = pbToDecat(pbG);
  const decH = pbToDecat(pbH);
  const decI = pbToDecat(pbI);
  const decL = pbToDecat(pbL);
  const decM = pbToDecat(pbM);
  const decN = pbToDecat(pbN);
  const decO = pbToDecat(pbO);
  const decQ1 = pbToDecat(pbQ1);
  const decQ2 = pbToDecat(pbQ2);
  const decQ3 = pbToDecat(pbQ3);
  const decQ4 = pbToDecat(pbQ4);

  const dA = document.getElementById('decat-a');
  if (dA) dA.textContent = decA;
  const dB = document.getElementById('decat-b');
  if (dB) dB.textContent = decB;
  const dC = document.getElementById('decat-c');
  if (dC) dC.textContent = decC;
  const dE = document.getElementById('decat-e');
  if (dE) dE.textContent = decE;
  const dF = document.getElementById('decat-f');
  if (dF) dF.textContent = decF;
  const dG = document.getElementById('decat-g');
  if (dG) dG.textContent = decG;
  const dH = document.getElementById('decat-h');
  if (dH) dH.textContent = decH;
  const dI = document.getElementById('decat-i');
  if (dI) dI.textContent = decI;
  const dL = document.getElementById('decat-l');
  if (dL) dL.textContent = decL;
  const dM = document.getElementById('decat-m');
  if (dM) dM.textContent = decM;
  const dN = document.getElementById('decat-n');
  if (dN) dN.textContent = decN;
  const dO = document.getElementById('decat-o');
  if (dO) dO.textContent = decO;
  const dQ1 = document.getElementById('decat-q1');
  if (dQ1) dQ1.textContent = decQ1;
  const dQ2 = document.getElementById('decat-q2');
  if (dQ2) dQ2.textContent = decQ2;
  const dQ3 = document.getElementById('decat-q3');
  if (dQ3) dQ3.textContent = decQ3;
  const dQ4 = document.getElementById('decat-q4');
  if (dQ4) dQ4.textContent = decQ4;

  const newDecCells = ['a','b','c','e','f','g','h','i','l','m','n','o','q1','q2','q3','q4'];
  const newDecValues = [decA,decB,decC,decE,decF,decG,decH,decI,decL,decM,decN,decO,decQ1,decQ2,decQ3,decQ4];
  newDecCells.forEach((letter, idx) => {
    const el = document.getElementById(`res-decat-${letter}`);
    if (el) el.textContent = newDecValues[idx];
  });

  const factorLetters = [
    'A','B','C','E','F','G','H','I',
    'L','M','N','O','Q1','Q2','Q3','Q4'
  ];
  const chartHeight = factorLetters.length * 40;
  const canvas = document.getElementById('results-chart');
  if (canvas) canvas.height = chartHeight;
  const pbData = [
    pbA, pbB, pbC, pbE, pbF, pbG, pbH, pbI,
    pbL, pbM, pbN, pbO, pbQ1, pbQ2, pbQ3, pbQ4
  ];
  const decatData = [
    decA, decB, decC, decE, decF, decG, decH, decI,
    decL, decM, decN, decO, decQ1, decQ2, decQ3, decQ4
  ];
  Chart.register(ChartDataLabels);
  if (!window.resultsChart) {
    const ctx = document.getElementById('results-chart').getContext('2d');
    window.resultsChart = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: factorLetters,
        datasets: [
          {
            label: 'PB',
            data: pbData,
            backgroundColor: 'rgba(54, 162, 235, 0.7)',
            borderColor: 'rgba(54, 162, 235, 1)',
            borderWidth: 1
          },
          {
            label: 'Decat',
            data: decatData,
            backgroundColor: 'rgba(255, 99, 132, 0.7)',
            borderColor: 'rgba(255, 99, 132, 1)',
            borderWidth: 1
          }
        ]
      },
      options: {
        indexAxis: 'y',
        scales: {
          x: { beginAtZero: true, max: 20 }
        },
        plugins: { legend: { display: false } }
      }
    });
  } else {
    window.resultsChart.data.datasets[0].data = pbData;
    window.resultsChart.data.datasets[1].data = decatData;
    window.resultsChart.update();
  }

  const perfilData = [
    pbA, pbB, pbC, pbE, pbF, pbG, pbH, pbI,
    pbL, pbM, pbN, pbO, pbQ1, pbQ2, pbQ3, pbQ4
  ];
  if (!window.perfilChart) {
    const perfilCtx = document.getElementById('perfil-chart').getContext('2d');
    window.perfilChart = new Chart(perfilCtx, {
      type: 'line',
      data: {
        labels: ['A','B','C','E','F','G','H','I','L','M','N','O','Q1','Q2','Q3','Q4'],
        datasets: [{
          label: 'Factores de personalidad',
          data: perfilData,
          borderColor: 'red',
          backgroundColor: 'blue',
          pointBackgroundColor: 'blue',
          fill: false,
          tension: 0.3,
          pointRadius: 6,
          pointHoverRadius: 8
        }]
      },
      options: {
        scales: { y: { beginAtZero: true, max: 20 } },
        plugins: { legend: { display: false } }
      }
    });
  } else {
    window.perfilChart.data.datasets[0].data = perfilData;
    window.perfilChart.update();
  }

  window.reportData = {
    personal: personal,
    pb: {
      A: pbA, B: pbB, C: pbC, E: pbE, F: pbF,
      G: pbG, H: pbH, I: pbI, L: pbL, M: pbM,
      N: pbN, O: pbO, Q1: pbQ1, Q2: pbQ2,
      Q3: pbQ3, Q4: pbQ4
    },
    decat: {
      A: decA, B: decB, C: decC, E: decE, F: decF,
      G: decG, H: decH, I: decI, L: decL, M: decM,
      N: decN, O: decO, Q1: decQ1, Q2: decQ2,
      Q3: decQ3, Q4: decQ4
    }
  };
});
