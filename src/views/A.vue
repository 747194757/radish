<template>
  <div>
    我是A
    <button @click="btn('a')">pushA</button>
    <button @click="btn('b')">pushB</button>
    <button @click="btn(C)">pushC</button>
  </div>
</template>
<script>
export default {
  data() {
    return {
      C: "d",
    };
  },
  methods: {
    btn(val) {
      console.log(val);
      if (val == "a") {
        this.$router.push({
          path: "A",
          query: { plan: "private", title: "suibian" },
        });
      } else if (val == "b") {
        this.$router.push({
          path: "B",
          query: { plan: "private", title: "我是从A过来的" },
        });
      } else if (val == "d") {
        this.$router.push({
          path: "C",
          query: { plan: "private", title: "我是从A过来的" },
        });
      }
    },
  },
};
</script>
<style lang="stylus" scoped></style>

我是傻逼