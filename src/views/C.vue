<template>
  <div>
    我是C{{this.$route.query.title}}
    <button @click="fan(true)">返回上一级</button>
    <button @click="fan(false)">返回到A</button>
  </div>
</template>
<script>
export default {
  data() {
    return {

    }
  },
  methods: {
    fan(val) {
      if(val == true) {
        this.$router.go(-1)
      }else {
        this.$router.go(-2)
      }
    }
  }
}
</script>
<style lang='stylus' scoped>

</style>