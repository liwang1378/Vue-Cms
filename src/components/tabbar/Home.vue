<template>
	<div>
		<!--轮播图 -->
		<mt-swipe :auto="3000">
			<!-- <mt-swipe-item>1</mt-swipe-item>
			<mt-swipe-item>2</mt-swipe-item>
			<mt-swipe-item>3</mt-swipe-item>
			<mt-swipe-item>4</mt-swipe-item>
			<mt-swipe-item>5</mt-swipe-item> -->
			<!-- 在组件中，使用v-for循环，一定要使用key -->
			<mt-swipe-item v-for="item in swipeList" :key="item.img">
				<img :src="item.img" alt="">
			</mt-swipe-item>
		</mt-swipe>
		<!--九宫格 -->
		 <ul class="mui-table-view mui-grid-view mui-grid-9">
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><router-link to="/home/newsList">
                    <span class="mui-icon mui-icon-home"></span>
                    <div class="mui-media-body">新闻资讯</div></router-link></li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><router-link to="/home/photoList">
                    <span class="mui-icon mui-icon-email"><span class="mui-badge">5</span></span>
                    <div class="mui-media-body">图片分享</div></router-link></li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><router-link to="#">
                    <span class="mui-icon mui-icon-chatbubble"></span>
                    <div class="mui-media-body">商品购买</div></router-link></li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                    <span class="mui-icon mui-icon-location"></span>
                    <div class="mui-media-body">留言反馈</div></a></li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                    <span class="mui-icon mui-icon-search"></span>
                    <div class="mui-media-body">视频专区</div></a></li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                    <span class="mui-icon mui-icon-phone"></span>
                    <div class="mui-media-body">联系我们</div></a></li>
        </ul> 
	</div>
</template>

<script>
import {Toast} from 'mint-ui'
export default{
	data(){
		return {
			swipeList:[]
		}
	},
	created(){
		this.getSwipe()
	},
	methods:{
		getSwipe(){//获取轮播图数据的接口
			this.$http.get('api/getSwipe.json').then(res => {
				console.log(res)
				if(res.data.status ===0){
					this.swipeList = res.data.message
				}else{
					Toast('加载轮播图数据失败...')
				}
			})
		}
	}
}
	
</script>

<style lang="scss" scoped>
	.mint-swipe{
		height:200px;
		.mint-swipe-item{
			&:nth-child(1){
				background-color: #f00
			}
			&:nth-child(2){
				background-color: #0f0
			}
			&:nth-child(3){
				background-color: #00f
			}
			&:nth-child(4){
				background-color: #ff0
			}
			&:nth-child(5){
				background-color: #f0f
			}
			img{
				width:100%;
				height:100%;
			}
		}
	}
	.mui-grid-view.mui-grid-9{
		background-color:#fff;
		border:none;
		.mui-media-body{
			font-size:13px
		}
	}
	.mui-grid-view.mui-grid-9 .mui-table-view-cell{
		border:0
	}
</style>