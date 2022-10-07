import { createVNode, render } from 'vue'
import MyMessage from './MyMessage.vue'

const div=document.createElement('div')
document.body.appendChild(div);

let timer = null;

export default function({type,message}){
    const vnode = createVNode(MyMessage, {type,message});
    render(vnode, div)
    clearTimeout(timer)
    timer = setTimeout(() => {
        render(null, div)
    }, 3000)
}