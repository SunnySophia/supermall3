<template>
    <tab-bar>
        <tab-bar-items path="/home" activecolor='blue'> 
          <img src="" slot="item-icon" alt="deactive">
          <img src="" slot="item-icon-active" alt="active">
          <div slot="item-text">首页</div>
        </tab-bar-items>
        <tab-bar-items path="/categery">
          <img src="" slot="item-icon">
           <img src="" slot="item-icon-active" alt="active">
          <div slot="item-text">分类</div>
        </tab-bar-items>
        <tab-bar-items path="/cart">
          <img src="" slot="item-icon">
           <img src="" slot="item-icon-active" alt="active">
          <div slot="item-text">购物车</div>
        </tab-bar-items>
        <tab-bar-items path="/profile">
          <img src="" slot="item-icon">
           <img src="" slot="item-icon-active" alt="active">
          <div slot="item-text">我的</div>
        </tab-bar-items>
    </tab-bar>
</template>
<script>
import TabBar from '../../common/tabbar/TabBar'
import TabBarItems from '../../common/tabbar/TabBarItems'
export default {
    components: {
      TabBar,
   TabBarItems
    }
}
</script>
<style scoped>

</style>

