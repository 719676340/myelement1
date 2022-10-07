<template>
  <div class='myradio-grounp'>
      <slot></slot>
  </div>
</template>
<script>
export default {
    name: "MyCheckBoxGroup",
}
</script>
<script setup>
import {computed,provide,reactive,watch,ref,toRefs, isReactive, toRef, onMounted} from 'vue'
var props=defineProps(['modelValue'])
var emit=defineEmits(['update:modelValue'])

function change(value){
    emit('update:modelValue',value)
}
// var group=ref(props.modelValue)

// var group=computed(()=>) 
// provide('RadioGroup',reactive({
//   change,
//   group:props.modelValue
// }))
// console.log(props.modelValue,111)
var itemlist=computed(()=>{
    return props.modelValue
})
provide('change',change)
provide('group',itemlist)
</script>
<style lang="scss" scoped>
</style>
