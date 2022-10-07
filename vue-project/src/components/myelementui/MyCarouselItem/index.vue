<template>
  <div class='MyCarouselitem' @click="num=1">
    <slot></slot>
  </div>
</template>
<script>
export default {
    name: "MyCarouselItem",
}
</script>

<script setup>
//  :class="{
//     'item_next':num==0,
//     'item_prev':num==1
//   }"
import { onMounted, ref } from 'vue';
var num=ref(0)
var props=defineProps(['num'])
onMounted(()=>{
  console.log(props.num)
})
</script>
<style lang="scss" scoped>

.MyCarouselitem{
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  // background-color: red;
  top: 0;
  right: -100%;
  width: 100%;
  height: 100%;
  transition: all 0.2s linear;
}
.item_next{
  right: -100%;
  // background-color: red;
}
.item_prev{
  right: 100%;
  // background-color: red;
}
.item_curr{
  z-index: 1000;
  right: 0;
  background-color: gray;
}
</style>
