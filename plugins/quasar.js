import Vue from 'vue'
import Quasar from 'quasar'
import 'quasar/dist/quasar.sass'
import '@quasar/extras/material-icons/material-icons.css'
Vue.use(Quasar)
Vue.use(Quasar, {
	config: {},
	components: {}, // Here you can register specific Quasar components
	directives: {},
	plugins: {}
})