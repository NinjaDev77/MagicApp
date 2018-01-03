<template>
  <div class="row">
    <div class="col-md-12">
      <!--Nav Bar -->
      <nav class="navbar">
        <div class="container-fluid">
          <div class="navbar-header">
            <a class="navbar-brand" href="#">Magic App</a>
          </div>

          <ul class="nav navbar-nav navbar-right">
            <li class="">Zapier Access Token</li>
            <li class="dropdown">
              <a href="#" data-toggle="dropdown" class="dropdown-toggle">
                <span class="glyphicon glyphicon-user"></span>Profile<b class="caret"></b>
              </a>
              <ul class="dropdown-menu">
                <li><a @click="onSignOut">Logout</a></li>
              </ul>
            </li>
          </ul>
        </div>
      </nav>
      <!--End-->
    </div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
      }
    },
    methods:{
      onSignOut(){
        this.$store.dispatch('userSignOut');
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  a {
    pointer : cursor;
  }

</style>
