<template>
  <div>
    <app-header></app-header>
    <app-sidebars style="position: fixed; z-index:10000"></app-sidebars>
    <div class="row" style="margin-right: 50px; margin-left: 50px">
      <div class="col-md-12">
        What is Lorem Ipsum?
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.

        Why do we use it?
        It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
      </div>
    </div>

  </div>
</template>

<script>
  import Header from './Header.vue'
  import Sidebars from './Sidebars.vue'
  export default {
    data () {
      return {
        msg: 'Welcome to Your Vue.js App'
      }
    },
    components:{
      appHeader:Header,
      appSidebars:Sidebars
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
