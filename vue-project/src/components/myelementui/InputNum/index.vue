<template>
    <div class='Myinput clearfix'>
        <input v-if="props.type!='textarea'" class="inputinner" :type="props.showPassword==''?showPassword?'password':'text':props.type" :name="props.name" :placeholder="props.placeholder" v-model="model" :disabled="props.disabled==''" :class="{
        'is-disabled':props.disabled=='',
        }" :maxlength="props.maxlength">
        <textarea v-if="props.type=='textarea'" class="inputinner inputtextarea" :name="props.name" :placeholder="props.placeholder" v-model="model" :disabled="props.disabled==''" :class="{
        'is-disabled':props.disabled=='',
        }"  :maxlength="props.maxlength">
        </textarea>
        <span class="inputclear" v-show="model.length&&props.clearable==''" @click="model=''">
            <i class="iconfont icon-chacha clearlogo"></i>
        </span>
        <span class="inputclear" v-show="props.showPassword==''" @click="changeshowPassword">
            <i class="iconfont icon-yanjing clearlogo"></i>
        </span>
        <span class="inputclear" v-show="props.showwordlimit==''">
            <span class="inputcountinner">
                {{model.length}}/{{props.maxlength}}
            </span>
        </span>
    </div>
</template>
<script>
export default {
    name: "MyInput",
}
</script>
<script setup>
import { computed,ref} from 'vue';

var props=defineProps(['modelValue','type','placeholder','disabled','clearable','showPassword','maxlength','showwordlimit','name'])
var emit=defineEmits(['update:modelValue'])
var model=computed({
    get(){
        return props.modelValue
    },
    set(value){
        if(props.disabled!=''){
            emit('update:modelValue',value)
        }
        
    }
})
var showPassword=ref(props.showPassword=='')
var changeshowPassword=function(){
    showPassword.value=!showPassword.value
}
</script>
<style lang="scss" scoped>
@import '../assets/iconfont.css';
.Myinput{
    position: relative;
    // display: inline-block;
    font-size: 14px;
    width: 100%;
    max-height: 100%;
    min-height: 40px;
    // overflow:auto;
}
.inputinner{
    -webkit-appearance: none;
    display: flex;
    align-items: center;
    width: 100%;
    height: 100%;
    min-height: 40px;
    padding: 0 15px;
    background-color: white;
    color: #606266;
    border: 1px solid rgba(166, 165, 165, 0.836);
    border-radius: 5px;
    outline: none;
    box-sizing: border-box;
    &:hover{
        border-color: gray;
    }
    &:focus{
        outline: none;
        border-color:#409eff
    }
}
.inputtextarea{
    padding: 5px;
    max-width: 100%;
    min-width: 100%;
}
.is-disabled{
    background-color: rgb(245,247,250);
    cursor: not-allowed;
}
.inputclear{
    position: absolute;
    display: flex;
    align-items: center;
    height: 100%;
    top: 0;
    right: 10px;
    color: #606266;
    cursor: pointer;
}
.clearlogo{
    color: #606266;
}
.clearfix::after{
    content: '\20';
    display: block;
    height: 0;
    clear: both;
    
}
</style>
