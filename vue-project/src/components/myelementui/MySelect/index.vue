<template>
    <div class='myselect' :style="{'width':props.width+'px'}" >
        <div class="myselect-input" :class="{'is-showlist':showlist}" @click="showlist=!showlist" ref="selectpart" :style="{'width':props.width+'px','height':props.height+'px'}">
            <div class="selectinfo" :class="{'no-select':(label=='Select')}">
                {{label}}
            </div>
        </div> 
        <div class="selectoptions" ref="dropoutpart">
            <!-- <div class="triangle"></div> -->
            <div class="option_list" :style="{'height':!showlist?'0px':'auto'}">
                <slot></slot>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: "MySelect",
}
</script>
<script setup>
import { computed, onMounted, ref ,provide} from 'vue';

// var props=defineProps(['modelValue','width','height'])
var props=defineProps({
    'modelValue':[String, Number, Boolean],
    'width':{
        type: Number,
        default: 180
    },
    'height':{
        type: Number,
        default: 180
    }
})
var emit=defineEmits(['update:modelValue'])
provide('choose',choose)
var model=computed({
    get(){
        return props.modelValue
    },
    set(value){
        emit('update:modelValue',value)
    }
})
var label=computed(()=>{
    return model.value==''?'Select':model.value
})

var showlist=ref(false)
var selectpart=ref(null)
var dropoutpart=ref(null)
function addlistener(){
    document.addEventListener('click',function(e){
        // console.log(showlist.value)
        if(selectpart.value){
            if(selectpart.value.contains(e.target)||dropoutpart.value.contains(e.target)){
                console.log(1111)
                // showlist.value=true
            }else{
                console.log(2222)
                showlist.value=false
            }
        }
        
        // console.log(e.target,selectpart)
    })
}

function choose(value){
    // console.log(value)
    emit('update:modelValue',value)
}

onMounted(()=>{
    addlistener()
})
</script>
<style scoped lang="scss">
.myselect{
    display: flex;
    flex-wrap: wrap;
    position: relative;
    cursor: pointer;
    -moz-user-select: none;
    -webkit-user-select: none;
    -ms-user-select: none;
}
.myselect-input{
    display: flex;
    // height: 100%;
    // margin: 3px;
    border: 1px solid rgb(220,223,230);
    border-radius: 5px;
    box-sizing: border-box;
    align-items: center;
    &:hover{
        border-color: rgb(192,196,204);
    }
}
.myselect-input.is-showlist{
    // background-color: red;
    border: 1px solid #709DF7;
}
.selectinfo{
    display: flex;
    align-items: center;
    margin-left: 5px;
}
.no-select{
    color: rgb(168,171,178);
}
.selectoptions{
    position: relative;
    width: 100%;
    display: flex;
    align-items: center;
    transition: all 0.5s;
}
.triangle{
    width: 0px;
    border: 8px solid;
    box-shadow: 0px 0px 6px #709DF7;
    border-color:transparent transparent black transparent;
}
.option_list{
    height: auto;
    width: 100%;
    border-radius: 5px;
    box-shadow: 0px 0px 6px #709DF7;
    overflow: hidden;
    // background-color: red;
}
</style>
