<template>
    <div class='mybotton' :class="[`mybotton--${props.type}`,`mybotton--${props.size}`,{
        'is-disabled':(props.disabled==''),
        'is-round':(props.round==''),
        'is-plain':(props.plain==''),
        }]" tabindex="111">
        <MyIcon class="icon" v-if="props.icon" name="props.icon"></MyIcon>
        <span><slot></slot></span>
    </div>
</template>
<script>
export default {
    name: "MyButton",
}
</script>
<script setup>
import MyIcon from '../MyIcon/index.vue';
var props=defineProps(['type','size','disabled','round','plain','icon'])
</script>
<style lang="scss" scoped>
.mybotton{
    display: inline-block;
    font-size: 16px;
    padding: 12px 20px;
    line-height: 1;
    white-space: nowrap;
    color: #737478;
    background-color: white;
    border: 1px solid #dcdfe6;
    border-radius: 5px;
    text-align: center;
    cursor: pointer;
    /* 文字选中 */
    -moz-user-select: none;
    -webkit-user-select: none;
    -ms-user-select: none;
    // div 需要添加tabindex来增加focus的事件
    &:hover,&:focus{
        background-color: rgb(236,245,255);
        color: rgb(70,161,255);
        
    }
}
.mybotton--primary{
    color: rgb(255,255,255);
    background-color: rgb(64,158,255);
    &:hover,&:focus{
        background-color: rgb(121,187,255);
        color: rgb(249,252,255);
    }
}
.mybotton--primary.is-plain{
    color: rgb(64,158,255);
    background-color: rgb(236,245,255);
    &:hover,&:focus{
        background-color: rgb(64,158,255);
        color: rgb(236,245,255);
    }
}
.mybotton--success{
    color: rgb(230,245,222);
    background-color: rgb(103,194,58);
    &:hover,&:focus{
        background-color: rgb(149,212,117);
        color: rgb(254,255,254);
    }
}
.mybotton--success.is-plain{
    color: rgb(103,194,58);
    background-color: rgb(240,249,235);
    &:hover,&:focus{
        background-color: rgb(103,194,58);
        color: rgb(240,249,235);
    }
}
.mybotton--info{
    color: rgb(253,253,253);
    background-color: rgb(144,147,153);
    &:hover,&:focus{
        background-color: rgb(177,179,184);
        color: rgb(254,254,254);
    }
}
.mybotton--info.is-plain{
    color: rgb(144,147,153);
    background-color: rgb(244,244,245);
    &:hover,&:focus{
        background-color: rgb(144,147,153);
        color: rgb(244,244,245);
    }
}
.mybotton--warning{
    color: rgb(253,253,253);
    background-color: rgb(230,162,60);
    &:hover,&:focus{
        background-color: rgb(238,190,119);
        color: rgb(254,254,254);
    }
}
.mybotton--warning.is-plain{
    color: rgb(230,162,60);
    background-color: rgb(253,246,236);
    &:hover,&:focus{
        background-color: rgb(230,162,60);
        color: rgb(253,246,236);
    }
}
.mybotton--danger.is-plain{
    color: rgb(245,108,108);
    background-color: rgb(254,240,240);
    &:hover,&:focus{
        background-color: rgb(245,108,108);
        color: rgb(254,240,240);
    }   
}
.mybotton--danger{
    color: rgb(253,253,253);
    background-color: rgb(245,108,108);
    &:hover,&:focus{
        background-color: rgb(248,152,152);
        color: rgb(254,254,254);
    }   
}
.mybotton--large{
    padding: 18px 30px;
    font-size: 24px;
}
.mybotton--small{
    padding: 6px 10px;
    font-size: 8px;
}
.mybotton.is-disabled{
    opacity: 0.7;
    &:hover{
        cursor: not-allowed;
        background-image: none;
    }
}
.mybotton--lagre.is-round{
    border-radius: 31px;
}
.mybotton--small.is-round{
    border-radius: 13px;
}
.mybotton.is-round{
    border-radius: 21px;
}
.icon{
    display: inline-block;
}
</style>
