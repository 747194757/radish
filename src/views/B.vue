<template>
  <div>
    我是B{{shuxing}}{{this.$route.query.title}}
    <button @click="fanHui('aaa')">返回上一层</button>
    <button @click="fanHui('pushC')">pushC</button>
  </div>
</template>
<script>
export default {
  //新增加分支
  data() {
    return {
      shuxing:'属性'
    }
  },
  methods: {
    fanHui(val) {
      console.log(val);
      if(val == 'aaa') {
        this.$router.go(-1)
        console.log('我是你爹');
      } else{
        this.$router.push({
          path:'C',query:{from:'我是从B来的',title:'我是从B来的'}
        })
        console.log('你不是');
      }
    }
  }
}
</script>
<style lang='stylus' scoped>

</style>