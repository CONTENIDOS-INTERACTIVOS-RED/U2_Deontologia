<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(:subTitulo="'1. Relación del administrador con el cliente y deberes profesionales'")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.overflow-hidden


    .row.align-items-center.mb-5
      .col-lg
        p.mb-0 A continuación, se analiza la relación ética entre el administrador de empresas y sus clientes, destacando los principios y responsabilidades que rigen esta interacción profesional en función del bien común, la transparencia y la integridad institucional.
      .col-lg-auto
        img(src="@/assets/curso/tema1/1.svg", style="max-width: 295px").mx-auto


    .bg-full-width.bg-fondo-slider.mb-5
      .p-4.p-md-5
        figure
          .video
            iframe(width="560" height="315" src="https://www.youtube.com/embed/9cqLwqWDCzs?si=F1b2M6SlLRnGqFf9" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)


    #t_1_1.titulo-segundo(data-aos="flip-up")
      h2 #[span 1.1] Principios éticos que rigen la relación entre administrador y cliente

    p.mb-4 En el contexto administrativo, los principios éticos orientan las decisiones y acciones del profesional, asegurando una relación justa y constructiva con los clientes. Estos principios no solo estructuran la práctica profesional, sino que también fortalecen la cultura organizacional y el impacto social de la gestión.
    
    

    .bg-full-width.border-top.color-primario
      .p-4.p-md-5
        h2(data-aos="fade-left") MATERIAL COMPLEMENTARIO
        .row.material-complementario
          .col-12.col-md-6.col-lg-7
            p Los invitamos a explorar el material complementario de este curso, en esta sección encontrará recursos que le permitirán profundizar  y enriquecer su aprendizaje en los temas tratados en esta unidad.

            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://elibro.net/es/lc/tecnologicadeloriente/titulos/274611" target="_blank" rel="noopener noreferrer") De Castro Emilio Cerdá, F. J. A. L. M. (s/f). Las energías renovables en el ámbito internacional. Revistasice.com. 

            p.d-flex.my-4
              img.me-3(src='@/assets/template/book.svg' :style="{'max-width':'16px'}")
              span De Janeiro, R. (1992). La declaración del Río sobre el Medio Ambiente y el Desarrollo. Río de Janeiro República Federativa del Brasil., aprobada en Estocolmo el, 16.

            p.d-flex.my-4
              img.me-3(src='@/assets/template/icono-yt.svg' :style="{'max-width':'16px'}")
              a(href="https://youtu.be/QKLjwCMyv3M?si=uAWhO9tnyghljaJg" target="_blank" rel="noopener noreferrer") Innovación y sostenibilidad.

          .col-12.col-md-6.col-lg-3.offset-lg-1
            figure
              img(src='@/assets/componentes/material-complementario.svg', alt='')

</template>

<script>
export default {
  name: 'Tema1',
  data: () => ({}),

  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
}
</script>

<style lang="sass"></style>
