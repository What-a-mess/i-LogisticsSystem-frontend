import Vue from 'vue'
import Vuex from 'vuex'

//挂载Vuex
Vue.use(Vuex)

//创建VueX对象
const store = new Vuex.Store({
  state:{
    //是否刷新过
    refresh: true
  },
  mutations:{
    //取反
    setRefresh(state, payload){
      state.refresh = payload
    },
  },
  actions:{
    setAsyncRefresh(context, payload){
      setTimeout(()=>{
        context.commit('setRefresh', payload)
      }, 500)
    }
  }
})

export default store