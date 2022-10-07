<template>
    <div class='myratio' :class="[`myratio-${props.size}`,
        {'is-disabled':props.disabled=='',
        'is-border':props.border==''}
    ]">
        <span class="myratioinput">
            <input type="checkbox" :name="props.name" :value="props.label" :disabled='props.disabled' v-model='model'/>
        </span>
        <span class="myratiolabel">
            <slot></slot>
            <span v-if="!$slots.default">{{props.label}}</span>
        </span>
    </div>
</template>


<script>
export default {
    name: "MyCheckBox",
}
</script>
<script setup>
import { computed,inject,reactive,isReactive} from 'vue';
var props=defineProps(['label','disabled','border','size','name','modelValue'])
var emit=defineEmits(['update:modelValue'])
// var {change,group}=inject('RadioGroup',{
//     change:'',
//     group:''
// })

var change=inject('change')
var group=inject('group')
var model=computed({
    get(){
        // console.log(group?1:2)
        return group?group.value.indexOf(props.label)==-1?false:true:props.modelValue
    },
    set(value){
        if(!props.disabled){
            if(group){
                console.log(2222)
                if(value){
                    change([...group.value,props.label])
                }else{
                    var temp=group.value.slice()
                    temp.splice(group.value.indexOf(props.label),1)
                    change(temp)
                }
            }else{
                console.log(1111)
                emit('update:modelValue',value)
            }
            
        }
    }
})
</script>
<style lang="scss" scoped>
.myratio{
    display: inline-block;
    line-height: 1;
    white-space: nowrap;
    cursor: pointer;
    font-size: 14px;
    outline: none;
    margin-right: 30px;
    -moz-user-select: none;
    -webkit-user-select: none;
    -ms-user-select: none;
}
.is-disabled{
    opacity: 0.3;
    &:hover{
        cursor: not-allowed;
    }
}
.is-border{
  border: 1px solid #ccc;
  padding: 12px 16px;
  border-radius: 4px;    
}
.myratio.myratio-large{
    padding: 18px 24px;
    font-size: 21px;
}
.myratio.myratio-small{
    padding: 6px 8px;
    font-size: 7px;
}
.myratioinput{
    display: inline-block;
    vertical-align: middle;
}
.myratiolabel{
    display: inline-block;
    padding-left: 10px;
    vertical-align: middle;
}
</style>
