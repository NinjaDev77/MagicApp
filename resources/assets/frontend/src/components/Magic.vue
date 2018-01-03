<template>
  <div>
   <div class="row">
     <div class="col-md-12">
       <button class="btn btn-primary" @click="isNewZap = !isNewZap">New Zap</button>
     </div>
   </div>
    <div class="clearfix"></div>
    <div class="row" v-if="isNewZap">
      <div class="col-md-12">
        <form>
          <div class="row">
            <div class="col-md-12">
              <label class="control-label col-md-2">Zap Name</label>
              <div class="col-md-6">
                <input type="text" class="form-control" placeholder="Zap Name" v-model="newZap.zapName" required>
              </div>
            </div>
          </div>
          <div class="clearfix"></div>
          <div class="row">
            <div class="col-md-2">
              <button class="btn btn-default" @click.prevent="addRemoveZapParams('',2)">Add</button>
            </div>
          </div>
          <div class="clearfix"></div>
          <div class="row form-group" v-for="(param,zapIndex) in newZap.params">
            <div class="col-md-3">
              <input type="text" class="form-control" placeholder="Name" v-model="param.zapField" required>
            </div>
            <div class="col-md-3">
              <select class="form-control" v-model="param.validationId" required>
                <option value="">Select Options</option>
                <option v-for="(item, index) in validationType" :value="item.id">
                  {{item.type}}
                </option>
              </select>
            </div>
            <div class="col-md-3">
              <input type="text" class="form-control" placeholder="Value" v-model="param.zapValue" required>
            </div>
            <div class="col-md-1">
              <a @click="addRemoveZapParams(zapIndex,3)" ><span class="glyphicon glyphicon-minus"></span></a>
            </div>
            <div class="clearfix"></div>
          </div>
          <div class="row">
            <div class="col-md-6">
              <button class="btn btn-success" @click.prevent="createNewZap">Create</button>
              <!--<textarea rows="10" v-model="testScript"></textarea>-->
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
    import { mapGetters } from 'vuex'
  export default {
    data () {
      return {
        isNewZap:false,
        validationType:[
          {
            id:1,
            type:'Exists'
          },
          {
            id:2,
            type:'=',
          },
          {
            id:3,
            type:'!=',
          }
        ],
        newZap:{
          id:'',
          zapName:'',
          params:[
            {
              zapField:'',
              validationId:'',
              zapValue:''
            }
          ]
        },
        testScript:`function getMagic(){
          console.log(window);
        }`
      }
    },
    methods:{
      addRemoveZapParams(index,type){
        if (type==2){
          this.newZap.params.push({
            zapField:'',
            validationId:'',
            zapValue:''
          })
        } else {
          //console.log(index);
          (index > 0) && this.newZap.params.splice(index,1);
        }
      },
        createNewZap(){
          var obj = {};
          obj.newZap = this.newZap;
          obj.user= this.user;
          console.log(obj);
          this.$store.dispatch('createNewZap',obj);
        }
    },
      computed: {
          // mix the getters into computed with object spread operator
          ...mapGetters([
              'user'
              // ...
          ])
      }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  a {
    pointer : cursor;
  }
  .clearfix{
    clear: both;
    display: inline-block;
    width:100%;
  }
</style>
