import { createApp } from 'vue'
import App from './App.vue'
import myelement from './components/myelementui'
// https://blog.csdn.net/y227766/article/details/126426546
const app=createApp(App)
app.use(myelement)
app.mount('#app')
