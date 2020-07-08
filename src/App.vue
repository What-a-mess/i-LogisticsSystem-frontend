<template>
  <div id="app">
    <OrderFormInfo/>
    <login />
  </div>
</template>

<script>
import OrderFormInfo from './components/OrderFormMgmt/OrderFormInfo'
import login from "./components/login";

export default {
  name: 'app',
  components: {
    OrderFormInfo,
    login
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
