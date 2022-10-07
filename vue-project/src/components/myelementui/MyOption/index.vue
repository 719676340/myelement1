<template>
    <div class='option' @click="choose(props.value)">
        <span class="content">{{props.label}}</span>
    </div>
</template>
<script>
export default {
    name: "MyOption",
}
</script>
<script setup>
import { inject} from 'vue';

var props=defineProps(['label','value'])
var choose=inject('choose')
</script>
<style lang="scss" scoped>
.option{
    display: flex;
    align-items: center;
    width: 100%;
    min-height: 40px;
    &:hover{
        background-color: rgb(245,247,250);
    }
}
.content{
    height: 100%;
    overflow: hidden;
    margin-left: 10px;
    text-overflow: ellipsis;
    white-space: nowrap;
}
</style>
