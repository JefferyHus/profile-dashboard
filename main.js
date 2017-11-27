import Vue from 'vue'
import Vuetify from 'vuetify'
import App from  './App.vue'

// store
import { store } from './store'

// styles
import './node_modules/vuetify/dist/vuetify.min.css'
import './components/assets/style.css'

Vue.use(Vuetify)

new Vue({
	el: "#app",
	store,
	...App
})