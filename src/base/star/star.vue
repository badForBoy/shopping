<template>
  <div class="star">
    <span class="icon" :class="cls" v-for="cls in itemClass"></span>
    <span>{{score}}</span>
  </div>
</template>

<script type="text/ecmascript-6">
  const LEN = 5
  const SCL_GRAY = 'star-gray'
  const SCL_YELLOW = 'star-yellow'

  export default{
    props: {
      score: {
        type: Number,
        default: 4.2
      }
    },
    computed: {
      itemClass() {
        let ret = []
        let sc = Math.floor(this.score)
        for (let i = 0; i < sc; i++) {
          ret.push(SCL_YELLOW)
        }
        if (ret.length < LEN) {
          ret.push(SCL_GRAY)
        }
        return ret
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/variable.styl"

  .star
    display: flex
    color: $color-theme-r
    .icon
      display: block
      background: url("./star_gray.png") no-repeat
      background-size: 16px 16px !important
      width: 16px !important
      height: 16px !important
      margin-right: 5px
      &.star-gray
        background: url("./star_gray.png") no-repeat
      &.star-yellow
        background: url("./star_yellow.png") no-repeat
</style>
