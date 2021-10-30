<template>
    <div class="tabbar-item">
        <slot name ="item-ionc"></slot>
        <slot name ="item-text"></slot>
    </div>
</template>
<script>
export default {
}
</script>
<style scoped>
.tabbar-item {
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 49px;
  width: 100vw;
  font-size: 14px;
  text-align: center;
 
}
.tabbar-item img {
  width: 19.5px;
  height: 21.5px;
}
</style>