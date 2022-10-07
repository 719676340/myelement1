<template>
    <div class='mydialog' v-show="props.modelValue" @click.self="handleclose">
        <div class="dialogwrap" :style="{'width':props.width,'margin-top':props.top}">
            <div class="dialoghead" >
                <div class="headslot">
                    <span class="headtitle" :class="{'is-center':props.center==''}">{{props.title}}</span>
                </div>
                <div class="iconremove" @click="handleclose">
                    <i class="iconfont icon-chacha logosize"></i>
                </div>
            </div>
            <div class="dialogcontent">
                <slot></slot>
                <!-- <div>12312312312</div> -->
            </div>
            <div class="dialogfoot" :class="{'is-center':props.center==''}">
                <slot name="footer"></slot>
                <!-- <div>123123123</div>
                <div>2222222</div> -->
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: "MyDialog",
}
</script>
<script setup>
var props=defineProps(['modelValue','title','width','top','center'])
var emit=defineEmits(['update:modelValue'])
function handleclose(){
    emit('update:modelValue',false)
}
</script>
<style lang="scss" scoped>
@import '../assets/iconfont.css';

.mydialog{
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    overflow: auto;
    margin: 0;
    z-index: 2001;
    background-color: rgba(0,0,0, .5);;
}
.dialogwrap{
    position: relative;
    margin: 15vh auto 50px;
    background: #fff;
    box-sizing: border-box;
    width: 30%;
}
.dialoghead{
    position: relative;
    padding: 20px 20px 10px;
}
.headtitle{
    display: flex;
    align-items: center;
    font-size: 18px;
}
.iconremove{
    position: absolute;
    top: 20px;
    right: 20px;
    font-size: 20px;
    cursor: pointer;
}
.logosize{
    // z-index: 3002;
}
.dialogcontent{
    padding: 20px 20px;
    word-break: break-all;
    color: #606266;
}
.dialogfoot{
    display: flex;
    justify-content: flex-end;
    padding: 20px 20px;
}
.is-center{
    justify-content: center;
}
</style>
