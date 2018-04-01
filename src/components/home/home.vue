<template>
  <div class="home">
    <router-view></router-view>
    <header-bar :title="title" @goBack="back"></header-bar>
    <scroll class="content">
      <div>
        <div class="swipe">
          <mt-swipe :auto="5000">
            <mt-swipe-item>1</mt-swipe-item>
            <mt-swipe-item>2</mt-swipe-item>
            <mt-swipe-item>3</mt-swipe-item>
          </mt-swipe>
        </div>
        <classify></classify>
        <div class="activity-box">
          <div class="activity">
            <div class="activity-wrapper">
              <div class="item"></div>
              <div class="item"></div>
              <div class="item"></div>
            </div>
          </div>
        </div>
        <line-title :types="chosen"></line-title>
        <div class="hot-sell">
          <div class="item">
            <div class="title">
              <h3>临安套餐</h3>
              <p>自然美味 安心之选</p>
              <span class="btn">
              点击进入
            </span>
            </div>
            <div class="pic">
              <img src="http://nongbaba.oss-cn-hangzhou.aliyuncs.com/nbb_imgs/20171012160535_78123.jpeg">
            </div>
          </div>
          <div class="item">
            <div class="title">
              <h3>临安套餐</h3>
              <p>自然美味 安心之选</p>
              <span class="btn">
              点击进入
            </span>
            </div>
            <div class="pic">
              <img src="http://nongbaba.oss-cn-hangzhou.aliyuncs.com/nbb_imgs/20171012160535_78123.jpeg">
            </div>
          </div>
          <div class="item">
            <div class="title">
              <h3>临安套餐</h3>
              <p>自然美味 安心之选</p>
              <span class="btn">
              点击进入
            </span>
            </div>
            <div class="pic">
              <img src="http://nongbaba.oss-cn-hangzhou.aliyuncs.com/nbb_imgs/20171012160535_78123.jpeg">
            </div>
          </div>
          <div class="item">
            <div class="title">
              <h3>临安套餐</h3>
              <p>自然美味 安心之选</p>
              <span class="btn">
              点击进入
            </span>
            </div>
            <div class="pic">
              <img src="http://nongbaba.oss-cn-hangzhou.aliyuncs.com/nbb_imgs/20171012160535_78123.jpeg">
            </div>
          </div>
        </div>
        <line-title :types="hot"></line-title>
        <div class="doods-list">
          <router-link to="/home/detail" tag="div" class="item" v-for="item in goodsList" :key="item.id">
            <div class="item-wrapper">
              <div class="pic">
                <img :src="item.img">
              </div>
              <div class="title">
                <p>{{item.title}}</p>
                <p class="red">￥{{item.price}}</p>
              </div>
            </div>
          </router-link>
        </div>
        <line-title :types="chosen"></line-title>
        <div class="doods-list">
          <router-link to="/home/detail" tag="div" class="item" v-for="item in goodsList" :key="item.id">
            <div class="item-wrapper">
              <div class="pic">
                <img :src="item.img">
              </div>
              <div class="title">
                <p>{{item.title}}</p>
                <p class="red">￥{{item.price}}</p>
              </div>
            </div>
          </router-link>
        </div>
      </div>
    </scroll>
    <bottom-bar></bottom-bar>
  </div>
</template>

<script type="text/ecmascript-6">
  import headerBar from 'base/header-bar/header-bar'
  import bottomBar from 'base/bottom-bar/bottom-bar'
  import { Swipe, SwipeItem } from 'mint-ui'
  import Classify from './classify/classify.vue'
  import LineTitle from 'base/line-title/line-title'
  import Scroll from 'base/scroll/scroll'

  export default{
    components: {
      headerBar,
      bottomBar,
      mtSwipe: Swipe,
      mtSwipeItem: SwipeItem,
      Classify,
      LineTitle,
      Scroll
    },
    data() {
      return {
        title: '首页',
        chosen: 'chosen',
        hot: 'hot',
        goodsList: [
          {
            title: '千岛湖土鸡蛋',
            price: 30.00,
            img: 'http://nongbaba.oss-cn-hangzhou.aliyuncs.com/nbb_imgs/20171130112831_90721.jpeg',
            id: 1
          },
          {
            title: '千岛湖土鸡蛋',
            price: 30.00,
            img: 'http://nongbaba.oss-cn-hangzhou.aliyuncs.com/nbb_imgs/20171130112831_90721.jpeg',
            id: 1
          },
          {
            title: '千岛湖土鸡蛋',
            price: 30.00,
            img: 'http://nongbaba.oss-cn-hangzhou.aliyuncs.com/nbb_imgs/20171130112831_90721.jpeg',
            id: 1
          },
          {
            title: '千岛湖土鸡蛋',
            price: 30.00,
            img: 'http://nongbaba.oss-cn-hangzhou.aliyuncs.com/nbb_imgs/20171130112831_90721.jpeg',
            id: 1
          },
          {
            title: '千岛湖土鸡蛋',
            price: 30.00,
            img: 'http://nongbaba.oss-cn-hangzhou.aliyuncs.com/nbb_imgs/20171130112831_90721.jpeg',
            id: 1
          }, {
            title: '千岛湖土鸡蛋',
            price: 30.00,
            img: 'http://nongbaba.oss-cn-hangzhou.aliyuncs.com/nbb_imgs/20171130112831_90721.jpeg',
            id: 1
          },
          {
            title: '千岛湖土鸡蛋',
            price: 30.00,
            img: 'http://nongbaba.oss-cn-hangzhou.aliyuncs.com/nbb_imgs/20171130112831_90721.jpeg',
            id: 1
          },
          {
            title: '千岛湖土鸡蛋',
            price: 30.00,
            img: 'http://nongbaba.oss-cn-hangzhou.aliyuncs.com/nbb_imgs/20171130112831_90721.jpeg',
            id: 1
          }
        ]
      }
    },
    methods: {
      back() {
        this.$router.back()
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/variable.styl"

  .home
    position: fixed
    top: 41px
    bottom: 52px
    width: 100%
    background: $color-background-b
    .content
      height: 100%
      overflow: hidden
      .swipe
        height: 130px
        background: #e2e2e2
      .activity-box
        height: 122px
        overflow: hidden
        .activity
          height: 130px
          overflow-x: auto
          .activity-wrapper
            width: 150%
            display: flex
            .item
              flex: 1
              width: 40%
              height: 130px
              background: red
              margin-right: 10px
      .hot-sell
        display: flex
        flex-wrap: wrap
        margin-bottom: 1px
        .item
          display: flex
          width: 50%
          padding: 10px
          box-sizing: border-box
          background: $color-background
          margin-top: 1px
          &:nth-child(even)
            margin-left: 1px
            width: calc(50% - 1px)
          .pic
            flex: 0 0 50%
            padding-left: 10px
            box-sizing: border-box
            img
              width: 100%
          .title
            width: 50%
            h3
              font-size: $font-size-medium
              color: $color-text
            p
              font-size: $font-size-small
              color: $color-text-b
              margin: 4px 0
              overflow: hidden
              white-space: nowrap
              text-overflow: ellipsis
            .btn
              display: block
              text-align: center
              width: 60px
              height: 20px
              line-height: 20px
              border-radius: 10px
              background: $color-theme-r
              font-size: $font-size-small
              color: $color-background
      .doods-list
        display: flex
        flex-wrap: wrap
        background: $color-background
        .item
          width: 25%
          border-radius: 2px
          overflow: hidden
          .item-wrapper
            margin: 5px
            background: $color-background
            .pic
              width: 100%
              img
                width: 100%
            .title
              color: $color-text
              font-size: $font-size-small
              padding: 0 5px
              p
                line-height: 1.6
                text-overflow: ellipsis
                overflow: hidden
                white-space: nowrap
                &.red
                  color: $color-theme-r
                  font-size: $font-size-small
</style>
