console.log("入口文件")
import Vue from 'vue'
//开启开发调试模式
Vue.config.devtools = true
import VueRouter from 'vue-router'
//安装路由
Vue.use(VueRouter)

//安装图片预览插件
import VuePreview from 'vue-preview'
Vue.use(VuePreview)

import VuePreview2 from 'vue2-preview'
Vue.use(VuePreview2)

//导入router.js路由模块
import router from './router.js'

//导入vue-resource
import VueResource from 'vue-resource'
//安装vue-resource
Vue.use(VueResource)
//设置请求的根路径
//Vue.http.options.root = 'http://192.168.43.139:3000/'
//设置全局POST表单数据的格式, application/x-www-form-urlencoded
Vue.http.options.emulateJSON = true

import app from './App.vue'
//按需导入mint-ui组件
import { Header,Button,Swipe,SwipeItem,Lazyload } from 'mint-ui'
import 'mint-ui/lib/style.css'

//导入mui
import './lib/mui/css/mui.min.css'
import './lib/mui/css/icons-extra.css'

Vue.component(Header.name , Header)
Vue.component(Button.name , Button)
Vue.component(Swipe.name , Swipe)
Vue.component(SwipeItem.name , SwipeItem)

//图片懒加载
Vue.use(Lazyload)

Vue.config.productionTip = false

//导入格式化时间插件
import moment from 'moment'
//定义全局过滤器
Vue.filter('dateFormat',function(data,pattern="YYYY-MM-DD HH:mm:ss"){
	return moment(data).format(pattern)
})

var vm = new Vue({
	el: '#app',
	router,//挂载路由对象到VM实例上
	render: c => c(app)

})

//babel测试 ES6
/*class Person{
	static info={name:'liw',age:18}
}
var p1 = new Person()
console.log(Person.info)*/
