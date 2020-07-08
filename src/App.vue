<template>
  <div id="app">
    <OrderFormInfo/>
  </div>
</template>

<script>
import OrderFormInfo from './components/OrderFormMgmt/OrderFormInfo'

export default {
  name: 'app',
  components: {
    OrderFormInfo
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
