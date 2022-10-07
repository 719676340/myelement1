<template>
    <div class='mypagination'>
        <div class="leftarrow" 
            :class="{
                'is-disable':model==1,
                'is-background':props.background==''
            }" @click="handleprev">
            <i class="iconfont icon-left"></i>
        </div>
        <div class="numcontent">
            <div class="left" v-show="leftshow">
                <div class="numitem" @click="changemodel(1)" :class="{'is-background':props.background==''}">1</div>
                <div class="numitem" @mouseenter="leftsign=true" @mouseleave="leftsign=false" :class="{'is-background':props.background==''}">
                    <div v-show="!leftsign">...</div>
                    <div v-show="leftsign" @click="changemodel(model-props.pagercount-2)">&lt;&lt;</div>
                </div>
            </div>
            <div class="mid">
                <div class="numitem" :class="{'item-active':item==model&&props.background!='','is-background-active':item==model&&props.background=='','is-background':props.background==''}" v-for="(item, index) in midnum" @click="changemodel(item)" :key="index">
                    {{item}}
                </div>
            </div>
            <div class="right" v-show="rightshow">
                <div class="numitem" @mouseenter="rightsign=true" @mouseleave="rightsign=false" :class="{'is-background':props.background==''}"> 
                    <div v-show="!rightsign">...</div>
                    <div v-show="rightsign" @click="changemodel(model+Number(props.pagercount)-2)">>></div>
                </div>
                <div class="numitem" @click="changemodel(endpage)" :class="{'is-background':props.background==''}">{{endpage}}</div>
            </div>
        </div>
        <div class="rightarrow" 
            :class="{
                'is-disable':model==endpage,
                'is-background':props.background==''
            }"   @click="handlenext" >
            <i class="iconfont icon-right"></i>
        </div>
    </div>
</template>
<script>
export default {
    name: "MyPagination",
}
</script>
<script setup>
import { computed, ref } from 'vue';

// var props=defineProps(['background','total','modelValue','page-sizes','pager-count'])
var props=defineProps({
    'background':{
        type:null,
    },
    'total':{
        type:[Number,String],
    },
    'modelValue':{
        type:Number,
    },
    'pagesizes':{
        type:[Number,String],
        default:10
    },
    'pagercount':{
        type:[Number,String],
        default:7
    }
})
var emit=defineEmits(['update:modelValue'])
var model=computed({
    get(){
        return props.modelValue
    },
    set(value){
        emit('update:modelValue',value)
    }
})
var endpage=computed(()=>{
    return Math.ceil(Number(props.total)/props.pagesizes)
})
var midnum=computed(()=>{
    var arr=[]
    if(!leftshow.value){
        for(let i=1;i<=props.pagercount-1;i++){
            arr.push(i)
        }
        return arr
    }
    if(!rightshow.value){
        for(let i=endpage.value-props.pagercount+2;i<=endpage.value;i++){
            arr.push(i)
        }
        return arr
    }
    for(let i=model.value-(props.pagercount-3)/2;i<=model.value+(props.pagercount-3)/2;i++){
        arr.push(i)
    }
    return arr
})
function handlenext(){
    if(model.value<endpage.value){
        model.value++
    }
}
function handleprev(){
    if(model.value>1){
        model.value--
    }
}
var leftshow=computed(()=>{
    return model.value<Math.ceil(props.pagercount/2)?false:true
})
var rightshow=computed(()=>{
    return model.value>endpage.value-Math.ceil(props.pagercount/2)?false:true
})
function changemodel(value){
    if(value<=1){
        value=1
    }
    if(value>=endpage.value){
        value=endpage.value
    }
    model.value=value
}

var leftsign=ref(false)
var rightsign=ref(false)


</script>
<style lang="scss" scoped>
@import '../assets/iconfont.css';
.mypagination{
    display: flex;
    flex-wrap: nowrap;
    -moz-user-select: none;
    -webkit-user-select: none;
    -ms-user-select: none;   
}
.leftarrow,.rightarrow,.numitem{
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 5px;
    width: 30px;
    height: 30px;
    cursor: pointer;
}
.item-active{
    color: blue;
}
.is-background{
    background-color: rgb(240,242,245);
    color: gray;
    border-radius: 5px;
    font-weight: bold;
    &:hover{
        color: rgb(64,158,255);
    }
}
.is-background-active{
    background-color: rgb(64,158,255);
    color: rgb(240,242,245);
    &:hover{
        color: rgb(240,242,245);
    }
}
.numcontent{
    display: flex;
    flex-wrap: nowrap;
}
.left,.right,.mid{
    display: flex;
    flex-wrap: nowrap;
}
.is-disable{
    cursor: not-allowed;
}
</style>
