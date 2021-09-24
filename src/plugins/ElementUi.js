import {
    Carousel,
    CarouselItem,
    Button,
    Tabs,
    TabPane,
    Icon,
    Calendar ,
    Input
} from 'element-ui'
export default {
    install(Vue){
        Vue.use(Carousel)
        Vue.use(CarouselItem)
        Vue.use(Button)
        Vue.use(Tabs)
        Vue.use(TabPane)
        Vue.use(Icon)
        Vue.use(Calendar)
        Vue.use(Input)
    }
}