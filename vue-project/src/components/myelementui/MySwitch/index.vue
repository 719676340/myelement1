<template>
    <div class='myswitch' :class="{
        'is-disabled':props.disabled==''
    }" @click="change()">
        <div class="activetext">{{props.activetext}}</div>
        <div class="switchinput" :class="[props.modelValue?'activecolor':'inactivecolor']" :style="{'background-color':props.modelValue?props.activecolor:props.inactivecolor}">
            <div class="switchkey" :class="[props.modelValue?'keyleft':'keyright']" :style="{'border-color':props.modelValue?props.activecolor:props.inactivecolor}"></div>
        </div>
        <div class="inactivetext">{{props.inactivetext}}</div>
    </div>
</template>
<script>
export default {
    name: "MySwitch",
}
</script>
<script setup>
var props=defineProps(['modelValue','disabled','activecolor','inactivecolor','activetext','inactivetext'])
var emit=defineEmits(['update:modelValue'])
function change(){
    // console.log(!props.modelValue)
    if(props.disabled!=''){
        emit('update:modelValue',!props.modelValue)
    }
}
</script>
<style lang="scss" scoped>
.myswitch{
    display: flex;
    align-items: center;
    font-size: 14px;
    height: 20px;
    -moz-user-select: none;
    -webkit-user-select: none;
    -ms-user-select: none;    
}
.is-disabled{
    opacity: 0.3;
}
.switchinput{
    position: relative;
    display: inline-block;
    width: 40px;
    height: 100%;
    border-radius: 10px;
    margin: 0 5px;
    transition: all 0.5s;
    cursor: pointer;
}
.activecolor{
    background-color: rgb(220,223,230);
}
.inactivecolor{
    background-color: rgb(64,158,255);
}
.switchkey{
    position: absolute;
    // left: 0;
    height: 20px;
    width: 20px;
    border-radius: 10px;
    background-color: white;
    transition: all 0.5s;
    box-sizing: border-box;
}
.switchkey.keyleft{
    left: 0;
    border:2px solid rgb(220,223,230);

}
.switchkey.keyright{
    left: 20px;
    border:2px solid rgb(64,158,255);
}
</style>
