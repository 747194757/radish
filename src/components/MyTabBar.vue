<template>
  <div>
    <tab-bar>
      <tabbar-item>
        <img slot= "item-ionc" src="@/assets/tabbar/img/首页_填充.png" alt="首页" />
      </tabbar-item>
       <tabbar-item>
        <img slot= "item-ionc" src="@/assets/tabbar/img/导航.png" alt="导航" />
      </tabbar-item>
       <tabbar-item>
        <img slot= "item-ionc" src="@/assets/tabbar/img/信息.png" alt="信息" /> 
      </tabbar-item>
       <tabbar-item>
        <img slot= "item-ionc" src="@/assets/tabbar/img/购物车满.png" alt="购物车"  />
      </tabbar-item>
       <tabbar-item>
        <img slot= "item-ionc" src="@/assets/tabbar/img/我的-我的.png" alt="我的" />
      </tabbar-item>
    </tab-bar>
  </div>
</template>
<script>
import TabBar from "./tabbar/Tabbar.vue"
import TabbarItem from "./tabbar/TabbarItem.vue"
export default {
    components: {
        TabBar,
        TabbarItem
    }
}
</script>