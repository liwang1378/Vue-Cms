import VueRouter from 'vue-router'

import Home from './components/tabbar/Home.vue'
import Member from './components/tabbar/Member.vue'
import Cart from './components/tabbar/Cart.vue'
import Search from './components/tabbar/Search.vue'
import NewsList from './components/news/NewsList.vue'
import NewsInfo from './components/news/NewsInfo.vue'
import PhotoList from './components/photos/PhotoList.vue'
import PhotoInfo from './components/photos/PhotoInfo.vue'

var router = new VueRouter({
	routes: [
		{path:'/' , redirect: '/home'},//默认重定向
		{path: '/home' , component: Home},
		{path: '/member' , component: Member},
		{path: '/cart' , component: Cart},
		{path: '/search' , component: Search},
		{path:'/home/newsList',component:NewsList},
		{path:'/home/newsInfo/:id',component:NewsInfo},
		{path:'/home/PhotoList',component:PhotoList},
		{path:'/home/photoInfo/:id',component:PhotoInfo}
	],
	linkActiveClass: 'mui-active'//覆盖默认的路由高亮样式，默认为router-link-active
})

export default router