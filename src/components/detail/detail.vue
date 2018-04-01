<template>
  <div class="detail">
    <header-bar :title="title" @goBack="back"></header-bar>
    <scroll class="wrapper" ref="scroll">
      <div>
        <div class="swipe" ref="swipe">
          <mt-swipe :auto="0">
            <mt-swipe-item v-for="(item, index) in details.show_img" :key="item.id">
              <img @load="setSwipeHeight" :src="item" ref="swipeImg">
            </mt-swipe-item>
          </mt-swipe>
        </div>
        <div class="title">
          <div class="h-title">
            <h3>{{details.name}}</h3>
            <p>每周配送{{details.now_num}}</p>
          </div>
          <div class="star-wrapper">
            <span>好评度:</span>
            <star></star>
          </div>
          <p class="price">{{details.current_price}}/{{details.good_unit}}</p>
          <div class="format">
            <p>销量:{{details.good_sale}}</p>
            <p>总配送次数:{{details.need_num}}</p>
          </div>
        </div>
        <div class="info" v-html="details.info"></div>
        <div class="comment">
          <div class="comment-count-0" v-show="showComment">暂无评价</div>
          <div class="comment-count" v-show="!showComment">
            <div class="count">
              <p>商品评价</p>
              <p>2条评价</p>
            </div>
            <div class="comment-wrapper">

            </div>
          </div>
        </div>
        <div class="goods" ref="goods">
          <!--<ifream :src="details.description"></ifream>-->
          <iframe ref="iframe" frameborder=0  width=100%  height=100%  marginheight=0 marginwidth=0  scrolling=no  :src="details.description"></iframe>
        </div>
      </div>
    </scroll>
  </div>
</template>

<script type="text/ecmascript-6">
  import headerBar from 'base/header-bar/header-bar'
  import Scroll from 'base/scroll/scroll'
  import { Swipe, SwipeItem } from 'mint-ui'
  import Star from 'base/star/star'

  export default{
    components: {
      headerBar,
      Scroll,
      mtSwipe: Swipe,
      mtSwipeItem: SwipeItem,
      Star
    },
    data() {
      return {
        title: '',
        details: {}
      }
    },
    computed: {
      showComment() {
        let conflag = false
        if (parseInt(this.details.comment_count) !== 0) {
          conflag = false
        } else {
          conflag = true
        }
        return conflag
      }
    },
    mounted() {
      this.getDetail()
    },
    methods: {
//      setGoodsHeight() {
//        if (!this.checkloaded) {
//          this.checkloaded = true
//          setTimeout(() => {
//            console.log(this.$refs.iframe.contentDocument.body.scrollHeight)
//            console.log(this.$refs.iframe.contentDocument.body)
//            this.$refs.goods.style.height = `${this.$refs.iframe.contentDocument.body.scrollHeight * 10}px`
//            this.$refs.scroll.refresh()
//          }, 200)
//        }
//      },
      setSwipeHeight() {
//        if (!this.checkloaded) {
//          this.checkloaded = true
//          setTimeout(() => {
//            this.$refs.swipe.style.height = `${this.$refs.swipeImg[0].clientHeight}px`
//            this.$refs.scroll.refresh()
//          }, 20)
//        }
      },
      back() {
        this.$router.back()
      },
      getDetail() {
        this.axios.get('/api/git/nobaba_server_PHP/api/getGoodsDetails.php', {params: {'goods_id': 410, 'token': ''}})
          .then(function (result) {
            if (result.status === 200) {
              this.title = result.data.result.name
              this.details = result.data.result
            }
          }.bind(this))
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/variable.styl"

  .detail
    position: fixed
    top: 41px
    bottom: 0
    width: 100%
    z-index: 200
    background: $color-background-b
    .wrapper
      height: 100%
      overflow: hidden
      .swipe
        height: 275px
        .mint-swipe-items-wrap
          .mint-swipe-item
            img
              width: 100%
      .title
        background: $color-background
        padding: 10px
        margin-bottom: 10px
        .h-title
          display: flex
          justify-content: space-between
          align-items: center
          padding: 4px 0
          h3
            font-size: $font-size-medium-x
            color: $color-text
          p
            font-size: $font-size-small
            color: $color-text-b
        .star-wrapper
          display: flex
          padding: 4px 0
        .price
          font-size: $font-size-medium
          color: $color-theme-r
          padding: 4px 0
        .format
          display: flex
          justify-content: space-between
          font-size: $font-size-small
          color: $color-text-b
      .info
        background: $color-background
        font-size: $font-size-medium
        color: $color-text-6
        line-height: 1.4
        padding: 10px
        text-align: justify
        margin-bottom: 10px
      .comment
        .comment-count
          .count
            display: flex
            justify-content: space-between
            font-size: $font-size-medium
            color: $color-text
            background: $color-background
            margin-bottom: 1px
            padding: 15px 10px
        .comment-count-0
          font-size: $font-size-medium
          color: $color-text-b
          padding: 15px 10px
          background: $color-background
      .goods
        height: 3150px

</style>
