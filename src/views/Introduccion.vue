<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción

    .row.justify-content-center.mb-5
      .col-lg-8.mb-lg-0.mb-mb-3(data-aos="fade-right")
        p.mb-3 Cuando no se maneja adecuadamente los cultivos acuícolas o no se considera la bioseguridad, pueden surgir problemas graves que impactan tanto la rentabilidad del negocio como la calidad e inocuidad del producto. Esto ha llevado a que la bioseguridad acuícola sea actualmente un tema prioritario para evitar estos inconvenientes.

        .bg-color-1
          .row.justify-content-center.g-0
            .col-lg-auto.d-lg-block.d-none.bg-color-3
              img(src='@/assets/curso/tema1/1.svg', alt='')
            .col-lg
              .p-4
                p.mb-0 A nivel mundial, la producción acuícola ha ido incrementando sus volúmenes, casi igualando las capturas provenientes de medios naturales. Los animales acuáticos susceptibles de cultivo, como crustáceos, moluscos y peces, interactúan con el ser humano en busca de optimizar los rendimientos de la explotación.

      .col-lg-4.col-7: img(src='@/assets/curso/temas/2.png', alt='').d-lg-block.d-none
    .mn
      img(src='@/assets/curso/temas/3.png', alt='')
            
    
</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
