<template>
  <div>
    <div class="row app_register">
      <div class="col-md-3"></div>
      <div class="col-md-6 app_register_form">
        <form @submit.prevent="onLogin">
          <div class="row form-group">
            <div class="col-md-12">
              <p style="text-align: center"><b>MAGIC APP</b></p>
            </div>
          </div>
          <div class="row form-group">
            <div class="col-md-12">
              <label class="control-label col-xs-2">Email</label>
              <div class="col-xs-10">
                <input type="email" class="form-control" placeholder="Email" v-model="user.email">
              </div>
            </div>
          </div>
          <div class="row form-group">
            <div class="col-md-12">
              <label  class="control-label col-xs-2">Password</label>
              <div class="col-xs-10">
                <input type="password" class="form-control"  placeholder="Password" v-model="user.password">
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-md-2"></div>
            <div class="col-md-3">
              <button type="submit" class="btn btn-primary">Login</button>
              <button type="reset" class="btn btn-primary pull-right">Reset</button>
            </div>
            <div class="col-md-4">
              <a><router-link to="/register">Don't Have An Account ?</router-link></a>
            </div>
          </div>
        </form>
      </div>
      <div class="col-md-3"></div>
    </div>
  </div>
</template>

<script>
  import {mapGetters} from 'vuex'
  export default {
    data () {
      return {
        user:{
          email:'',
          password:''
        }
      }
    },
    methods:{
      onLogin () {
        this.$store.dispatch('userSignIn', this.user)
      },
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .app_register_form{
    border: solid 1px gray;
    padding: 20px;

  }
  .app_register {
    margin-top: 200px;
  }

</style>
