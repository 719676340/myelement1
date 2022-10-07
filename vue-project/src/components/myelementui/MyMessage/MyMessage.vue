<template>
    <div class='mymessage' :class="{
        'is-success':props.type=='success',
        'is-warning':props.type=='warning',
        'is-message':props.type=='message',
        'is-error':props.type=='error',

    }">
        <span class="type">{{props.type}}:</span>
        <span class="message">{{props.message}}</span>
    </div>
</template>
<script>
export default {
    name: "MyMessage",
}
</script>
<script setup>
var props=defineProps(['type','message'])
// https://blog.csdn.net/weixin_46835329/article/details/122836628
</script>
<style lang="scss" scoped>
.mymessage{
    width: 300px;
    min-height: 50px;
    padding: 10px;
    position: fixed;
    top: 50px;
    left: 50%;
    z-index: 999;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 5px;
    overflow: hidden;
    transform: translateX(-50%);
}
.is-success{
    background-color: rgb(240,249,235);
    color: rgb(108,196,64);
}
.is-warning{
    background-color: rgb(253,246,236);
    color: rgb(231,165,66);
}
.is-message{
    background-color: rgb(244,244,245);
    color: rgb(162,165,170);
}
.is-error{
    background-color: rgb(254,240,240);
    color: rgb(247,140,140);
}
</style>
