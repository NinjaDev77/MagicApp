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
                <input type="text" class="form-control" placeholder="Zap Name">
              </div>
            </div>
          </div>
          <div class="clearfix"></div>
          <div class="row">
            <div class="col-md-2">
              <button class="btn btn-default" @click="addRemoveZapParams('',2)">Add</button>
            </div>
          </div>
          <div class="clearfix"></div>
          <div class="row form-group" v-for="(param,zapIndex) in newZap.params">
            <div class="col-md-3">
              <input type="text" class="form-control" placeholder="Name">
            </div>
            <div class="col-md-3">
              <select class="form-control">
                <option value="">Select Options</option>
                <option v-for="(item, index) in validationType" :value="item">
                  {{item.type}}
                </option>
              </select>
            </div>
            <div class="col-md-3">
              <input type="text" class="form-control" placeholder="Value">
            </div>
            <div class="col-md-1">
              <a @click="addRemoveZapParams(zapIndex,3)" ><span class="glyphicon glyphicon-minus"></span></a>
            </div>
            <div class="clearfix"></div>
          </div>
          <div class="row">
            <div class="col-md-6">
              <button class="btn btn-success">Create</button>
              <!--<textarea rows="10" v-model="testScript"></textarea>-->
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        isNewZap:false,
        validationType:[
          {
            id:1,
            type:'Not Exists'
          },
          {
            id:2,
            type:'Exists & =',
          },
          {
            id:3,
            type:'Exists & !=',
          },
          {
            id:4,
            type:'Exists & >',
          }
        ],
        newZap:{
          id:'',
          name:'',
          params:[
            {
              field:'Name',
              validationType:'Exists = ',
              value:'Ashish'
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
            name:'',
            type:'',
            value:''
          })
        } else {
          //console.log(index);
          (index > 0) && this.newZap.params.splice(index,1);
        }
      }
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
