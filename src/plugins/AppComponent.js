import ImGlobal1 from '../globalComponent/ImGlobal1.vue'
import ImGlobal2 from '../globalComponent/ImGlobal2.vue'
export default {
    install(Vue){
        Vue.component('ImGlobal1',ImGlobal1)
        Vue.component('ImGlobal2',ImGlobal2)
    }
}