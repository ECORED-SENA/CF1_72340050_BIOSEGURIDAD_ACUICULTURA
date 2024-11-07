<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    p.mb-5 A continuación, se muestra un mapa conceptual con los elementos más importantes desarrollados en este componente.

    .row.justify-content-center
      .col-lg-11.mb-5
        figure.bg-color-sintesis.p-5.brounded
          img(src="@/assets/curso/sintesis.svg", alt="El diagrama presenta  un conjunto de medidas de bioseguridad en acuicultura para evitar la introducción y propagación de patógenos en los cultivos acuícolas. Se detallan las causas de las enfermedades, que incluyen factores biológicos, físico-químicos, nutricionales y denso-dependientes. Los métodos de intervención abarcan el registro de campo, el manejo adecuado de los organismos y el control de parámetros físico-químicos. La normatividad menciona el cumplimiento de normas, como la Resolución 2424 de 2009 (INCODER), mientras que la prevención incluye medidas como cuarentenas y uso de filtros. Finalmente, la seguridad laboral se enfoca en la identificación de riesgos en las zonas de trabajo acuícolas.")
      .col-auto
        a.anexo.mb-5(:href="obtenerLink('/downloads/Sintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-pdf.svg")
          .anexo__texto
            p Anexo. Síntesis

</template>

<script>
export default {
  name: 'Sintesis',
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
