<template>
  <div class='myradio-grounp'>
      <slot></slot>
  </div>
</template>
<script>
export default {
    name: "MyRadioGroup",
}
</script>
<script setup>
import { computed, provide, ref, watch } from 'vue'
var props=defineProps(['modelValue'])
var emit=defineEmits(['update:modelValue'])
function change(value){
  emit('update:modelValue', value)
}
// watch(()=>props.modelValue,()=>{
//   console.log(props.modelValue,1111)
// })
// provide('change',change)
var groupnum=computed(()=>props.modelValue)
provide('RadioGroup',{
  change,
  groupnum
})
</script>
<style lang="scss" scoped>
</style>
