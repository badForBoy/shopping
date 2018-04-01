<template>
  <div class="classify">
    <div class="classify-swipe">
      <mt-swipe :auto="5000">
        <mt-swipe-item>
          <div class="item">
            <span class="icon ">
              <img src="./home_health-package.png">
            </span>
            <p>健康套餐</p>
          </div>
          <div class="item">
            <span class="icon ">
              <img src="./home_single-product.png">
            </span>
            <p>精选单品</p>
          </div>
          <div class="item">
            <span class="icon ">
              <img src="./home_yearly-reservation.png">
            </span>
            <p>年味预定</p>
          </div>
          <div class="item">
            <span class="icon ">
              <img src="./home_rent.png">
            </span>
            <p>认租认养</p>
          </div>
        </mt-swipe-item>
      </mt-swipe>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import { Swipe, SwipeItem } from 'mint-ui'

  export default{
    components: {
      mtSwipe: Swipe,
      mtSwipeItem: SwipeItem
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "../../../common/stylus/variable.styl"

  .classify
    height: 100px
    background: $color-background
    .classify-swipe
      height: 100%
      .mint-swipe-item
        display: flex
        align-items: center
        .item
          flex: 0 0 25%
          text-align: center
          font-size: $font-size-medium
          color: $color-text
          .icon
            display: block
            img
              width: 60%
</style>
