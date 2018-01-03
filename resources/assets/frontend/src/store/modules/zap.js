import Vue from 'vue';

const state ={

}

const getters = {

};

const mutations = {

}


const actions = {
  createNewZap:({commit}, payload)=>{
    Vue.http.post('create-user-zap', payload)
      .then(
        (res) => {
          if(res.body.status) {
            // console.log(res.body.response);
            console.log(res.body);
          } else {

          }
        },
        (err) => {
          console.log(err);
        }
      )
  }
}


export default { state, getters, mutations, actions }
