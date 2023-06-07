import { createApp } from 'vue'
import App from './App.vue'


import mitt from 'mitt'
let emitter = mitt();
let app = createApp(App);
app.config.globalProperties.emitter = emitter; // 글로벌하게 자주 쓰는 라이브러리같은것을 담아주면 좋다.

app.mount('#app')
