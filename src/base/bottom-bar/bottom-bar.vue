<template>
  <div class="bottom-bar">
    <router-link to="/home" class="header-item icon-home">
      <span class="icon"></span>
      <p>首页</p>
    </router-link>
    <router-link to="/basket" class="header-item icon-cookbook">
      <span class="icon "></span>
      <p>菜谱</p>
    </router-link>
    <router-link to="cookbook" class="header-item icon-basket">
      <span class="icon "></span>
      <p>菜篮</p>
    </router-link>
    <router-link to="/my" class="header-item icon-my">
      <span class="icon "></span>
      <p>我的</p>
    </router-link>
  </div>
</template>

<script type="text/ecmascript-6">
  export default{}
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/variable.styl"

  .bottom-bar
    position: fixed
    bottom: 0
    height: 52px
    width: 100%
    display: flex
    align-items: center
    justify-content: center
    background: $color-background
    border-top: 1px solid #e2e2e2
    .header-item
      flex: 1
      color: $color-text-b
      text-align: center
      font-size: $font-size-small
      .icon
        display: inline-block
        background-repeat: no-repeat
        background-size: 18px 18px !important
        width: 18px
        height: 18px
        margin-bottom: 4px
      &.icon-home
        .icon
          background: url("./icon_new_home_default.png")
      &.icon-cookbook
        .icon
          background: url("./icon_new_basket_default.png")
      &.icon-basket
        .icon
          background: url("./icon_new_menu_default.png")
      &.icon-my
        .icon
          background: url("./icon_new_mine_default.png")
      &.router-link-active
        color: $color-theme
        &.icon-home
          .icon
            background: url("./icon_new_home_select.png")
        &.icon-cookbook
          .icon
            background: url("./icon_new_basket_select.png")
        &.icon-basket
          .icon
            background: url("./icon_new_menu_select.png")
        &.icon-my
          .icon
            background: url("./icon_new_mine_select.png")

</style>
