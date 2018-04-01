<template>
  <div class="line-title">
    <span class="icon icon-left">
      <img src="./home_line_left.png">
    </span>
    <span class="title">
      <span class="icon icon-hot" :class="{'hot': types==='hot','chosen': types==='chosen'}">
      </span>
      <span>热销套餐</span>
    </span>
    <span class="icon icon-right">
      <img src="./home_line_right.png">
    </span>

  </div>
</template>

<script type="text/ecmascript-6">
  export default{
    props: {
      types: {
        type: String
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/variable.styl"

  .line-title
    display: flex
    width: 100%
    font-size: $font-size-medium
    color: $color-text
    justify-content: space-between
    align-content: center
    text-align: center
    padding: 12px 0
    height: 24px
    background: $color-background
    .title
      flex: 0 0 78px
      display: flex
      align-items: center
      padding: 0 10px
      .icon
        padding: 0
      .hot
        background: url("./home_new_hot.png") no-repeat
        background-size: 12px 18px
        width: 12px
        height: 18px
      .chosen
        background: url("./home_new_chosen.png") no-repeat
        background-size: 18px 18px
        width: 18px
        height: 18px
    .icon
      flex: 1
      display: flex
      align-items: center
      img
        width: 80px
      &.icon-left
        justify-content: flex-end
      &.icon-right
        justify-content: flex-start

</style>
