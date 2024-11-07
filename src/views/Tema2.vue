<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Métodos de intervención en caso de aparición de enfermedades

    .row.justify-content-center.mb-5
      .col-lg-7.mb-lg-0.mb-3
        p.mb-3 El acuicultor debe revisar continuamente los organismos cultivados, prestando atención a cualquier comportamiento anómalo que indique problemas de salud, y tomar medidas oportunas para minimizar los riesgos.  

        .bg-color-1.px-4.py-3
          .row.justify-content-center.align-items-center
            .col-lg-auto.d-lg-block.d-none
              img(src='@/assets/curso/temas/28.svg', alt='' style="width: 85px ").m-auto
            .col-lg
              p.mb-0 El productor debe estar capacitado en las acciones básicas que deben ejecutarse cuando se detecta alguna irregularidad en el cultivo. A continuación, se presenta una secuencia de procedimientos básicos para recolectar la información necesaria.
      .col-lg-5
        img(src='@/assets/curso/temas/29.png', alt='').mx-auto


    .titulo-tres(data-aos="flip-up").mb-4
      h3 Registro de campo

    .bg-full-width.bg-fondo-2
      .px-4.px-md-5
        .bg-color-2
          .row.justify-content-stretch.mb-5.g-0
            .col-lg-8.align-self-center
              .px-4.py-3.h-100
                p.mb-0 Es crucial mantener registros actualizados de las actividades diarias en el campo, tales como la alimentación, la siembra, la compra de reproductores, y las condiciones climáticas (lluvias intensas, días nublados), así como situaciones excepcionales (floración de algas, disminución de oxígeno, entre otros.). Estos registros permiten correlacionar las actividades rutinarias con la aparición de problemas.
            .col-lg-4
              img(src='@/assets/curso/temas/30.png', alt='').mx-auto

        .titulo-tres(data-aos="flip-up").mb-4
          h3 Información de apoyo al acuicultor

        p.mb-5(data-aos='fade-right') Esta información incluye los datos fundamentales de la explotación acuícola y su evolución desde el comienzo. Para ello, es necesario contar con la siguiente información:


        .row.justify-content-center.mb-5
          .col-lg-3
            img(src='@/assets/curso/temas/31.png', alt='').mx-auto.d-lg-block.d-none
          .col-lg-9
            .carousel-bg
              SlyderF.mb-5(columnas="col-lg-6 col-xxl-4")(data-aos="zoom-in-up")
                .tarjeta.bg-color-white.p-4.border-gray.text-center
                  img(src='@/assets/curso/temas/32.png', style="max-width: 220px", alt='').mx-auto.mb-4
                  .bg-color-5.d-inline-block.px-2.py-1.mb-3
                    h5.text-center.mb-0.text-color-black #[strong Ciclo de producción]
                  p.text-center Reproducción, alevinaje, levante, pre-engorde y engorde.

                .tarjeta.bg-color-white.p-4.border-gray.text-center
                  img(src='@/assets/curso/temas/33.png', style="max-width: 220px", alt='').mx-auto.mb-4
                  .bg-color-5.d-inline-block.px-2.py-1.mb-3
                    h5.text-center.mb-0.text-color-black #[strong Tipo de producción]
                  p.text-center Extensiva, semi-intensiva, intensiva, superintensiva.

                .tarjeta.bg-color-white.p-4.border-gray.text-center
                  img(src='@/assets/curso/temas/34.png', style="max-width: 220px", alt='').mx-auto.mb-4
                  .bg-color-5.d-inline-block.px-2.py-1.mb-3
                    h5.text-center.mb-0.text-color-black #[strong Densidad de siembra]
                  p.text-center Por metro cuadrado en estanques de tierra o concreto y por metro cúbico en jaulas flotantes.

                .tarjeta.bg-color-white.p-4.border-gray.text-center
                  img(src='@/assets/curso/temas/35.png', style="max-width: 220px", alt='').mx-auto.mb-4
                  .bg-color-5.d-inline-block.px-2.py-1.mb-3
                    h5.text-center.mb-0.text-color-black #[strong Lugar de compra de alevinos y certificado]
                  p.text-center Lugar de compra de los alevinos en caso de engorde y su respectivo certificado sanitario.

                .tarjeta.bg-color-white.p-4.border-gray.text-center
                  img(src='@/assets/curso/temas/36.png', style="max-width: 220px", alt='').mx-auto.mb-4
                  .bg-color-5.d-inline-block.px-2.py-1.mb-3
                    h5.text-center.mb-0.text-color-black #[strong Alimento balanceado]
                  p.text-center Sitio de compra y tipos de alimento balanceado utilizados, su almacenamiento y tiempo de conservación.

                .tarjeta.bg-color-white.p-4.border-gray.text-center
                  img(src='@/assets/curso/temas/37.png', style="max-width: 220px", alt='').mx-auto.mb-4
                  .bg-color-5.d-inline-block.px-2.py-1.mb-3
                    h5.text-center.mb-0.text-color-black #[strong Formulación de balanceado artesanal]
                  p.text-center Información sobre la formulación del balanceado artesanal, el origen de los ingredientes y los procedimientos de preparación.


    .row.justify-content-center.align-items-center.mb-5
      .col-lg-8
        .titulo-tres(data-aos="flip-up").mb-4
          h3 Naturaleza del problema

        p.mb-5(data-aos='fade-right') Los problemas relacionados con patógenos suelen manifestarse en una reducción en el consumo de alimento balanceado y mortalidad de los organismos. En casos de alta mortalidad, se podría sospechar de la falta de oxígeno, altos niveles de nitritos u otro agente infeccioso agresivo. Cuando la mortalidad es baja, resulta más complicado identificar la causa.

        .titulo-tres(data-aos="flip-up").mb-4
          h3 Manejo de campo

        p.mb-5(data-aos='fade-right') Basándose en los datos rutinarios de la explotación, se puede orientar la investigación hacia el origen del problema que causó la enfermedad. Algunos puntos clave a tener en cuenta son:

      .col-lg-4
        img(src='@/assets/curso/temas/36.png', alt='').mx-auto

    .bg-full-width.bg-fondo-slider(data-aos="fade-down").mb-5
      .p-4.p-md-5
        .tarjeta.bg-color-white.p-4.p-lg-5.pb-lg-4.shadow-soft(data-aos="fade-up")
          SlyderA(tipo='b')
            .row.pt-lg-4
              .col-lg-8.mb-4.mb-lg-0
               .pe-4
                 h4 Medidas de transporte y siembra
                 p.mt-4 Determinar las medidas de transporte y siembra en la adquisición de un nuevo lote de organismos.
              .col-lg-4
                img(src='@/assets/curso/tema2/4.png', style="max-width: 525px").mx-auto

            .row.pt-lg-4
              .col-lg-8.mb-4.mb-lg-0
                .pe-4
                  h4 Frecuencia de manipulación
                  p.mt-4 Frecuencia de manipulación de los peces y su propósito (transferencia entre estanques, biometrías, etc.), especificando la última realizada en el estanque donde aparecen los animales enfermos.
              .col-lg-4
                img(src='@/assets/curso/tema2/5.png', style="max-width: 525px").mx-auto

            .row.pt-lg-4
              .col-lg-8.mb-4.mb-lg-0
                .pe-4
                  h4 Raciones de alimento y consumo
                  p.mt-4 Cantidad de raciones de alimento balanceado suministrado y estimación del consumo por parte de los organismos.
              .col-lg-4
                img(src='@/assets/curso/tema2/6.png', style="max-width: 525px").mx-auto

            .row.pt-lg-4
              .col-lg-8.mb-4.mb-lg-0
                .pe-4
                  h4 Captación de agua
                  p.mt-4 Lugar de captación del agua utilizada en el cultivo y manejos recientes en el estanque afectado.
              .col-lg-4
                img(src='@/assets/curso/tema2/7.png', style="max-width: 525px").mx-auto

            .row.pt-lg-4
              .col-lg-8.mb-4.mb-lg-0
                .pe-4
                  h4 Turbidez del estanque
                  p.mt-4 Turbidez presente en el estanque, causada por sólidos disueltos o floración de algas.
              .col-lg-4
                img(src='@/assets/curso/tema2/8.png', style="max-width: 525px").mx-auto


    .titulo-tres(data-aos="flip-up").mb-4
      h3 Profilaxis
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-7

        p.mb-4(data-aos='fade-right') Basándose en los datos rutinarios de la explotación, se puede orientar la investigación hacia el origen del problema que causó la enfermedad. Algunos puntos clave a tener en cuenta son:

        .bg-color-4.brounded-sm(data-aos='fade-left')

          .d-flex.align-items-center.py-3.px-4
            i.fas.fa-check-circle.txt-color-1.me-3
            p.mb-0 ¿Los alevinos o reproductores adquiridos cuentan con registro sanitario?

          .border-bottom-dashed

          .d-flex.align-items-center.py-3.px-4
            i.fas.fa-check-circle.txt-color-1.me-3
            p.mb-0 ¿Se realiza cuarentena a los organismos antes de introducirlos al ciclo productivo?

          .border-bottom-dashed

          .d-flex.align-items-center.py-3.px-4
            i.fas.fa-check-circle.txt-color-1.me-3
            p.mb-0 ¿Cuál es el protocolo a seguir al detectar animales muertos o enfermos?

          .border-bottom-dashed

          .d-flex.align-items-center.py-3.px-4
            i.fas.fa-check-circle.txt-color-1.me-3
            p.mb-0 ¿Cómo se lleva acabo la limpieza y desinfección en los estanques y en toda la explotación?

          .border-bottom-dashed

          .d-flex.align-items-center.py-3.px-4
            i.fas.fa-check-circle.txt-color-1.me-3
            p.mb-0 ¿Qué medidas se implementan para prevenir la entrada de patógenos (pediluvios, cercos sanitarios, otros) en la finca?

      .col-lg-5
        img(src='@/assets/curso/tema2/9.png', alt='').mx-auto

    .titulo-tres(data-aos="flip-up").mb-4
      h3 Entorno del pez

    .bg-color-1
      .row.justify-content-center.align-items-stretch.g-0
        .col-lg-8(data-aos='fade-up').align-self-center
          .p-3.px-4
            p.mb-0 Los parámetros físico-químicos son indicadores clave para la posible aparición de patógenos. Monitorear y controlar estos parámetros crea un ambiente adecuado para los organismos, por lo que el acuicultor debe estar alerta ante cualquier cambio repentino, evitando esperar hasta que se produzcan mortalidades.
        .col-lg-4(data-aos='fade-right')
          img(src='@/assets/curso/tema2/10.png', alt='')

</template>

<script>
export default {
  name: 'Tema2',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
