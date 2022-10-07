<script setup>
import MyButton from './components/myelementui/MyButton/index.vue';
import {getCurrentInstance} from "vue";
const {proxy} = getCurrentInstance();
function success(){
    proxy.$MyMessage({ type: "success", message: "success" });
}
</script>

<template>
<MyButton class="item" type="primary" @click="success()">message</MyButton>
<MyButton>default</MyButton>
<MyButton type="primary">primary</MyButton>
<MyButton type="success">success</MyButton>
<MyButton type="warning">warning</MyButton>
<MyButton type="danger">danger</MyButton>
</template>

<style scoped>

</style>
