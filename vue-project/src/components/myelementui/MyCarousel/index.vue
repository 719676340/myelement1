<template>
    <div class='myCarousel'>
        <div class="container">
            <div class="leftarrow" @click="next">
                <i class="iconfont icon-left"></i>
            </div>
            <div class="rightarrow" @click="prev">
                <i class="iconfont icon-right"></i>
            </div>
            <div id="slotnum" class="maincontain">
                <slot></slot>
            </div>
        </div>
        <div class="indicator">
            <div class="indicatoritem" :class="{'indicatoritem_active':index==curr}" v-for="(item, index) in nodes" :key="item" @click.stop="handleclick(index)" @mouseenter="handlehover(index)"></div>
        </div>
    </div>
</template>

<script>
export default {
    name: "MyCarousel",
}
</script>

<script setup>
import { computed, onBeforeUnmount, onMounted, reactive, ref, watch } from 'vue';
var props=defineProps({
    'initindex':{
        type: Number,
        default: 0
    },
    'trigger':{
        type: String,
        default:'hover'
    },
    'autoplay':{
        type:Boolean,
        default:true
    },
    'interval':{
        type: Number,
        default: 3000
    }
})
var curr=ref(props.initindex)
var nodes=reactive([])
var previndex=computed(()=>{
    return curr.value==0?nodes.length-1:curr.value-1
})
var nextindex=computed(()=>{
    return curr.value==nodes.length-1?0:curr.value+1
})
function prev(){
    // nodes[previndex.value].classList.remove('item_prev')
    // nodes[curr.value].classList.remove('item_curr')
    // nodes[nextindex.value].classList.remove('item_next')
    if(curr.value==0){
        curr.value=nodes.length-1
    }else{
        --curr.value
    }
    // nodes[previndex.value].classList.add('item_prev')
    // nodes[curr.value].classList.add('item_curr')
    // nodes[nextindex.value].classList.add('item_next')   
}
function next(){
    // nodes[previndex.value].classList.remove('item_prev')
    // nodes[curr.value].classList.remove('item_curr')
    // nodes[nextindex.value].classList.remove('item_next')
    if(curr.value==nodes.length-1){
        curr.value=0
    }else{
        ++curr.value
    }
    // nodes[previndex.value].classList.add('item_prev')
    // nodes[curr.value].classList.add('item_curr')
    // nodes[nextindex.value].classList.add('item_next')   
}

function getnum(){
    var arr=document.getElementById('slotnum').childNodes
    for(let i=0;i<arr.length;i++){
        if(arr[i].nodeType==1){
            nodes.push(arr[i])
        }
    }
    nodes[curr.value].classList.add("item_curr")
}
watch(()=>curr.value,()=>{
    for(let i=0;i<nodes.length;i++){
        if(i<curr.value){
            nodes[i].classList.remove("item_curr")
            nodes[i].classList.remove("item_next")
            nodes[i].classList.add("item_prev")
        }else if(i==curr.value){
            nodes[i].classList.remove("item_prev")
            nodes[i].classList.remove("item_next")
            nodes[i].classList.add("item_curr")
        }else{
            nodes[i].classList.remove("item_prev")
            nodes[i].classList.remove("item_curr")
            nodes[i].classList.add("item_next")
        }
        
    }
})

function handleclick(index){
    if(props.trigger=='click'){
        curr.value=index
    }
}
function handlehover(index){
    if(props.trigger=='hover'){
        curr.value=index
    }
}
var time

function addtime(){
    if(props.autoplay==true){
        time=setInterval(()=>{
            next()
        },props.interval)
    }
}
function deltime(){
    clearInterval(time)
    
}

onMounted(()=>{
    getnum()
    addtime()
})
onBeforeUnmount(()=>{
    deltime()
})
</script>
<style lang="scss" scoped>
@import '../assets/iconfont.css';
.myCarousel{
    // width: 100%;
    // height: 100%;
    position: relative;
    // background-color: blue;
}
.container{
    width: 100%;
    height: 100%;
    position: relative;
}
.leftarrow{
    position: absolute;
    z-index: 1001;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    top: 50%;
    transform: translateY(-50%);
    left: 10px;
    background-color: rgba(191, 201, 212, 0.516);
    color: white;
    cursor: pointer;
    &:hover{
        background-color: rgb(191,201,212);
    }
}
.rightarrow{
    position: absolute;
    display: flex;
    z-index: 1001;
    justify-content: center;
    align-items: center;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    top: 50%;
    transform: translateY(-50%);
    right: 10px;
    background-color: rgba(191, 201, 212, 0.516);
    color: white;
    cursor: pointer;
    &:hover{
        background-color: rgb(191,201,212);
    }
}
.maincontain{
    position: relative;
    overflow: hidden;
    height: 100%;
}
.indicator{
    position: absolute;
    margin: 10px 0;
    z-index: 9999;
    display: flex;
    justify-content: center;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
}
.indicatoritem{
    width: 30px;
    height: 2px;
    margin: 0 3px;
    cursor: pointer;
    background-color: rgb(237,238,241);
}
.indicatoritem_active{
    background-color: black;
}

</style>
