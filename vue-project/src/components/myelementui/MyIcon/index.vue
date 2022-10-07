<template>
    <div class='myicon'>
        <i class="iconfont icon-info" :class="[`icon-${props.name}`]" :style="{'color':props.color, 'font-size': props.size+'px'}"></i>
    </div>
</template>

<script>
export default {
    name: "MyIcon",
}
</script>

<script setup>
var props=defineProps(['name','color','size'])
</script>
<!-- <style lang="scss" scoped> -->
<style scoped>
@import '../assets/iconfont.css';
</style>
