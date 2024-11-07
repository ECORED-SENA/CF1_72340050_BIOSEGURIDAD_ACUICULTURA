<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno(icono="far fa-question-circle" titulo="Actividad didáctica")
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5
  
      #Actividad                
        <Actividad :cuestionario="cuestionario"/>
  
  </template>

<script>
import Actividad from '@/components/actividad/Actividad.vue'
export default {
  name: 'ActividadDidactica',
  components: {
    Actividad,
  },
  data: () => ({
    cuestionario: {
      tema: 'Maquetación y narrativa en historietas gráficas',
      titulo: 'Cuestionario',
      introduccion:
        '<b> Objetivo:</b> Identificar la normativa y prácticas relacionadas con la bioseguridad en acuicultura, incluyendo la identificación de causas de enfermedades, medidas preventivas, normativas vigentes y la importancia de la seguridad laboral en este sector.',
      barajarPreguntas: true,
      preguntas: [
        {
          id: 1,
          texto:
            '¿Cuál es el objetivo principal de la bioseguridad en acuicultura?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Mejorar el sabor del producto final.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Aumentar la producción de alimentos para los consumidores.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Evitar la introducción, proliferación y propagación de patógenos en los cultivos.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Optimizar la calidad del agua utilizada en los cultivos.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 2,
          texto:
            '¿Cuál de las siguientes NO es una causa de enfermedades en la acuicultura?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Factores biológicos.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Contaminación con plásticos.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Parámetros físico-químicos inadecuados.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Deficiencia nutricional.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 3,
          texto:
            '¿Qué técnica ayuda a aumentar la rentabilidad de la acuicultura?',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Reducción de la cantidad de agua utilizada.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Mejora genética y aumento de la densidad de siembra.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Disminución en el uso de alimentos balanceados.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Menor interacción con los organismos acuáticos.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 4,
          texto:
            '¿Cuál de las siguientes es una acción preventiva en la bioseguridad acuícola?',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Realizar cuarentenas antes de ingresar animales al ciclo productivo.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Reducir la cantidad de alimentación diaria.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Incrementar la manipulación de los organismos.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Utilizar un solo tipo de alimento balanceado.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 5,
          texto: '¿Qué institución expidió la Resolución 2424 de 2009?',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Ministerio de Ambiente.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Ministerio de Salud.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Ministerio de Agricultura.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Instituto Colombiano de Desarrollo Rural (INCODER).',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 6,
          texto:
            '¿Cuál de los siguientes elementos se utiliza para prevenir el escape de especies exóticas en acuicultura?',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Aumentar la densidad de siembra en los estanques.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Instalar filtros o cajas de mallas en los tubos de drenaje.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Realizar más monitoreo visual de los estanques.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Disminuir el nivel de oxígeno en el agua.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 7,
          texto:
            '¿Cuál es una de las prácticas recomendadas para evitar la aparición de enfermedades en los peces?',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Mantener registros detallados de las actividades de campo.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Reducir la limpieza de los estanques.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Utilizar el mismo lote de alevinos en varias etapas.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Evitar la cuarentena de los organismos.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 8,
          texto:
            '¿Cuál es uno de los beneficios de la bioseguridad en la acuicultura?',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Disminuir la pérdida de animales acuáticos por enfermedades.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Aumentar el uso de pesticidas en el agua.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Eliminar la necesidad de monitorear los parámetros físico-químicos.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Evitar el uso de alimentos balanceados comerciales.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 9,
          texto:
            'Las normativas de bioseguridad buscan proteger tanto al medio ambiente como a los productos acuícolas.',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Verdadero.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Falso.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 10,
          texto:
            'El cumplimiento de protocolos de bioseguridad en acuicultura no tiene relación con la salud pública.',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Verdadero.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Falso.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
      ],
      mensaje_final_aprobado: '¡Excelente! Ha superado la actividad.',
      mensaje_final_reprobado:
        'Le recomendamos volver a revisar el componente formativo e intentar nuevamente la actividad didáctica.',
    },
  }),
}
</script>
