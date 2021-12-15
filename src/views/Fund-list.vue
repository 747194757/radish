<template>
  <div>
    <form action="/">
      <van-search
        v-model="value"
        show-action
        placeholder="请输入搜索关键词"
        @search="onSearch"
        @cancel="onCancel"
      />
    </form>
    <div :style="{backgroundImage:'url('+imgSrc+')'}" class="aa">
      让你好好学习你不好好学习 你xx
    </div>
     <div :style="{backgroundImage:'url('+imgSrc2+')'}" class="bb">
      好好学习天天up
    </div>
    <img :src="imgSrc2" alt="">
    <img :src="imgSrc" alt="">
  </div>
</template>
<script>
import imgSrc1 from '@/assets/css/datail-img/猫咪.png';
export default {
  data() {
    return {
      value: "",
      array:[{text:' 易方达中小盘混合'}],
      imgSrc:require("@/assets/css/datail-img/猫咪.png"),
      imgSrc2:imgSrc1
    };
  },
  methods: {
    onSearch(val) {
      Toast(val);
    },
    onCancel() {
      Toast("取消");
    },
  },
  created() {
    let myUrl = process.env.VUE_APP_BASE_URL == 'development'? process.env.VUE_APP_BASE_URL : process.env.VUE_APP_BASE_URL//(或者自己定义一个 '/sd' 之类的)
     process.env.VUE_APP_BASE_URL == 'development'? 'localhost': 'baidu'
    console.log(1234);
    console.log(myUrl);
    
  }
};
</script>
<style lang="stylus" scoped>
.aa {
  width 400px
  height 400px
  background-color #ccf
}
.bb {
  width 400px
  height 400px
  background-color #caa
}

</style>
