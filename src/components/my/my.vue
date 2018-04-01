<template>
  <div class="my">
    <bottom-bar></bottom-bar>
  </div>
</template>

<script type="text/ecmascript-6">
  import bottomBar from 'base/bottom-bar/bottom-bar'

  export default{
    components: {
      bottomBar
    },
    data() {
      return {
        title: '我的'
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
</style>
