import Vue from 'vue'
import {
    extend,
    localize,
    ValidationProvider,
    ValidationObserver,
} from 'vee-validate'
import { required, min, confirmed } from 'vee-validate/dist/rules'
import en from 'vee-validate/dist/locale/en.json'

// Register the rules
extend('required', required)
extend('min', min)
extend('confirmed', confirmed)

// Set the default locale
localize('en', {
    messages: en.messages,
    names: {
        email: 'Email',
        password: 'Password',
    },
    fields: {
        password_confirmation: {
            confirmed: 'The password confirmation does not match',
        },
    },
})

// Register VeeValidate components globally
Vue.component('ValidationProvider', ValidationProvider)
Vue.component('ValidationObserver', ValidationObserver)