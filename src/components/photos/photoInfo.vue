<template>
	<div class="container">
		<h3>{{photoInfo.title}}</h3>
		<p class="subTitle">
			<span>发表时间：{{photoInfo.add_time|dateFormat}}</span>
			<span>点击：{{photoInfo.click}}次</span>
		</p>
		<hr>
		<!--缩略图区域-->
		<div class="thumbs">
			<img class="preview-img" v-for="(item,index) in list" :src="item.src"
			height="100" @click="$preview.open(index,list)" :key="item.src">
			<hr>
			<vue-preview :slides="list" @close="handleClose"></vue-preview>
		</div>
		<!--图片内容区域-->
		<div class="content" v-html="photoInfo.content">
			
		</div>
		<!--评论子组件-->
		<cmt-box :id="id"></cmt-box>
	</div>
</template>

<script>
//1.导入评论组件
import comment from '../subComponents/comment.vue'
	export default{
		data(){
			return {
				id: this.$route.params.id,
				photoInfo:{},
				list:[]
			}

		},
		created(){
			this.getPhotoInfo()
			this.getThumbs()
		},
		methods:{
			getPhotoInfo(){
				//获取图片的详情
				this.$http.get("api/getImageInfo/"+this.id+".json").then(res =>{
					console.log(res)
					if(res.data.status ===0){
						this.photoInfo = res.data.message[0]
					}
				})
			},
			getThumbs(){
				this.$http.get('api/getThumImages/'+this.id+".json").then(res =>{
					console.log(res)
					if(res.data.status===0){
						res.data.message.forEach(item=>{
							item.w=600
							item.h=400
						})//补全图片宽高设置
						this.list = res.data.message
						console.log(this.list)
					}
				})
			},
			handleClose(){
				console.log('关闭缩略图')
				//$preview.close()
			}
		},
		components:{//注册评论子组件
			'cmt-box':comment
		}
	}
	
</script>

<style lang="scss" scoped>
	.container{
		padding:3px;
		h3{
			color:#26a2ff;
			font-size:15px;
			text-align:center;
			margin:15px 0;
		}
		.subTitle{
			display:flex;
			justify-content:space-between;
			font-size:13px;
		}
		.content{
			font-size:13px;
			line-height:30px;
		}
		.thumbs{
			img{
				margin:5px;
				box-shadow:0 0 8px #999;			
			}
		}
	}
</style>