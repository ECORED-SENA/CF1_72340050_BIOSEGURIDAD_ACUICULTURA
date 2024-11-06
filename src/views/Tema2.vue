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
        p.mb-4 El acuicultor debe revisar continuamente los organismos cultivados, prestando atención a cualquier comportamiento anómalo que indique problemas de salud, y tomar medidas oportunas para minimizar los riesgos.  
        .tarjeta.p-4(style="background-color: #CBE7F0 ")
          .row.justify-content-center.align-items-center
            .col-lg-2.d-lg-block.d-none: img(src='@/assets/curso/temas/28.svg', alt='' style="width: 100px ").m-auto
            .col-lg-10: p.mb-0 El productor debe estar capacitado en las acciones básicas que deben ejecutarse cuando se detecta alguna irregularidad en el cultivo. A continuación, se presenta una secuencia de procedimientos básicos para recolectar la información necesaria.
      .col-lg-5.col-7: img(src='@/assets/curso/temas/29.png', alt='')
    .titulo-tres: h3 Registro de campo
    .row.justify-content-center.mb-5.g-0
      .col-lg-8.mb-lg-0.mb-3
        .p-3(style="background-color: #F9F2C8 ").h-100.d-flex.align-items-center
          p.mb-0 Es crucial mantener registros actualizados de las actividades diarias en el campo, tales como la alimentación, la siembra, la compra de reproductores, y las condiciones climáticas (lluvias intensas, días nublados), así como situaciones excepcionales (floración de algas, disminución de oxígeno, entre otros.). Estos registros permiten correlacionar las actividades rutinarias con la aparición de problemas.
      .col-lg-4: img(src='@/assets/curso/temas/30.png', alt='')
    .titulo-tres: h3 Información de apoyo al acuicultor
    p.mb-5(data-aos='fade-right') Esta información incluye los datos fundamentales de la explotación acuícola y su evolución desde el comienzo. Para ello, es necesario contar con la siguiente información:
    .row.justify-content-center.mb-5
      .col-lg-3
        .d-lg-block.d-none: img(src='@/assets/curso/temas/31.png', alt='')
      .col-lg-9
        SlyderF.mb-5(columnas="col-lg-6 col-xl-4")
          .tarjeta--boton.color-secundario.p-4.h-100
            .row.justify-content-center.mb-3
              .col-12
                figure
                  img(src='@/assets/curso/temas/32.png', alt='Texto que describa la imagen')
            .d-flex.justify-content-center
              .d-inline-block.p-2(style="background-color: #F0E077 ").mb-4
                h4.text-center.mb-0 Ciclo de producción
            p.text-small.text-center Reproducción, alevinaje, levante, pre-engorde y engorde.
          .tarjeta--boton.color-secundario.p-4.h-100
            .row.justify-content-center.mb-3
              .col-12
                figure
                  img(src='@/assets/curso/temas/33.png', alt='Texto que describa la imagen')
            .d-flex.justify-content-center
              .d-inline-block.p-2(style="background-color: #F0E077 ").mb-4
                h4.text-center.mb-0 Tipo de producción
            p.text-small.text-center Extensiva, semi-intensiva, intensiva, superintensiva.
          .tarjeta--boton.color-secundario.p-4.h-100
            .row.justify-content-center.mb-3
              .col-12
                figure
                  img(src='@/assets/curso/temas/34.png', alt='Texto que describa la imagen')
            .d-flex.justify-content-center
              .d-inline-block.p-2(style="background-color: #F0E077 ").mb-4
                h4.text-center.mb-0 Densidad de siembra
            p.text-small.text-center Por metro cuadrado en estanques de tierra o concreto y por metro cúbico en jaulas flotantes.
          .tarjeta--boton.color-secundario.p-4.h-100
            .row.justify-content-center.mb-3
              .col-12
                figure
                  img(src='@/assets/curso/temas/35.png', alt='Texto que describa la imagen')
            .d-flex.justify-content-center
              .d-inline-block.p-2(style="background-color: #F0E077 ").mb-4
                h4.text-center.mb-0 Lugar de compra de alevinos y certificado
            p.text-small.text-center Lugar de compra de los alevinos en caso de engorde y su respectivo certificado sanitario.
          .tarjeta--boton.color-secundario.p-4.h-100
            .row.justify-content-center.mb-3
              .col-12
                figure
                  img(src='@/assets/curso/temas/36.png', alt='Texto que describa la imagen')
            .d-flex.justify-content-center
              .d-inline-block.p-2(style="background-color: #F0E077 ").mb-4
                h4.text-center.mb-0 Alimento balanceado
            p.text-small.text-center Sitio de compra y tipos de alimento balanceado utilizados, su almacenamiento y tiempo de conservación.
          .tarjeta--boton.color-secundario.p-4.h-100
            .row.justify-content-center.mb-3
              .col-12
                figure
                  img(src='@/assets/curso/temas/37.png', alt='Texto que describa la imagen')
            .d-flex.justify-content-center
              .d-inline-block.p-2(style="background-color: #F0E077 ").mb-4
                h4.text-center.mb-0 Formulación de balanceado artesanal
            p.text-small.text-center Información sobre la formulación del balanceado artesanal, el origen de los ingredientes y los procedimientos de preparación.

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
