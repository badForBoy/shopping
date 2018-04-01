<template>
  <div class="header-bar">
    <span class="icon icon-back" @click="back">
      <img src="./icon_back.png" >
    </span>
    <p>{{title}}</p>
    <span></span>
  </div>
</template>

<script type="text/ecmascript-6">
  export default{
    props: {
      title: {
        type: String
      }
    },
    methods: {
      back() {
        this.$emit('back')
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/variable.styl"

  .header-bar
    position: fixed
    justify-content: space-between
    top: 0
    height: 41px
    width: 100%
    display: flex
    align-items: center
    background: $color-background-b
    box-sizing: border-box
    padding: 0 10px
    font-size: $font-size-large
    color: $color-text
    font-weight: 700
    .icon
      display: inline-block
      flex: 0 0 10px
      img
        width: 100%

</style>
