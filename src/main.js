console.log("入口文件")
import Vue from 'vue'
import app from './App.vue'
var vm = new Vue({
	el: '#app',
	render: c=> c(app)
})
