<template>
  <div id="app">
    <router-view></router-view>
    <maintabbar></maintabbar>
  </div>
</template>

<script>
import maintabbar from './components/context/Maintabbar/maintabbar'

export default {
  name: 'app',
  components: {
    maintabbar
  }
}
</script>

<style>

</style>
