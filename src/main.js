import { createApp } from 'vue'

//following imports are compulsory to use form kit

import { plugin, defaultConfig } from '@formkit/vue'

import App from './App.vue'

//following importis important for form kit default form looks.

import '@formkit/themes/genesis'

//syntax is import identifier-name from file path
//nornally identifier name is kept the same as file name.

import FormKitComponent from './components/FormKitComponent.vue'



//always try to keep createApp(App); in an constant variable; its much easier to read and understand.

const app = createApp(App);

app.component('Form-Kit-Component', FormKitComponent);

app.use(plugin, defaultConfig);//this is also for form kit.

app.mount('#app')
