<template>
	<div>
		<!--顶部滑动条-->
		<div id="slider" class="mui-slider">
			<div id="sliderSegmentedControl" class="mui-scroll-wrapper mui-slider-indicator mui-segmented-control mui-segmented-control-inverted">
				<div class="mui-scroll">
					<a :class="['mui-control-item',item.id==-1? 'mui-active':'']" v-for="item in categories" :key="item.id" @click="getPhotoListById(item.id)">
						{{item.title}}
					</a>
				</div>
			</div>
		<!--图片列表区域-->
		<ul class="photo-list">
			<router-link v-for="item in list" :key="item.id" :to="'/home/photoInfo/'+item.id" tag="li">
				<img v-lazy="item.img_url" alt="">
				<div class="info">
					<div class="info-title">{{item.title}}</div>
					<div class="info-body">{{item.brief}}</div>
				</div>
			</router-link>
		</ul>
		</div>
	</div>
</template>

<script>
import mui from '../../lib/mui/js/mui.min.js'
import { Toast } from 'mint-ui'
export default{
	data(){
		return {
			categories:[],
			list:[]

		}
	},
	mounted(){//当组件中的DOM结构已渲染至页面后，执行此生命周期
		//初始化滑动控件
		mui('.mui-scroll-wrapper').scroll({
			deceleration: 0.0005
		})
	},
	created(){
		this.getPhotoCategory()
		this.getPhotoListById(-1)//默认加载所有图片
	},
	methods:{
		getPhotoCategory(){
			this.$http.get('api/getImageCategory.json').then(res => {
				if(res.data.status===0){
					//拼接全部分类
					res.data.message.unshift({"title":"全部","id":-1})
					this.categories = res.data.message
				}else{
					Toast('图片分类信息获取失败')
				}
			})
		},
		getPhotoListById(cateId){
			this.$http.get('api/getImages/'+cateId+'.json').then(res => {
				if(res.data.status==0){
					this.list = res.data.message
				}
			})
		}

	}
}
</script>

<style lang="scss" scoped>
	*{
		touch-action:pan-y;
	}

	.photo-list{
		list-style:none;
		margin:0;
		padding:10px;
		padding-bottom:0;
		li{
			background-color: #ccc;
			text-align:center;
			margin-bottom:10px;
			box-shadow: 0 0 12px #999;
			position:relative;

			img{
				width:100%;
				vertical-align:middle;
			}
			img[lazy="loading"]{
				width: 40px;
				height: 300px;
				margin: auto;
			}

			.info{
				width:100%;
				color:#fff;
				text-align:left;
				position:absolute;
				bottom:0;
				background-color:rgba(0,0,0,0.4);
				max-height:84px;
				.info-title{
					font-size:14px;
				}
				.info-body{
					font-size:12px;
				}
			}
		}
	}
</style>