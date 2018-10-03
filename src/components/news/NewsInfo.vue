<template>
	<div class="newsInfo-container">
		<h1>{{newsInfo.title}}</h1>
		<p>
			<span>发表时间：{{newsInfo.add_time| dateFormat}}</span>
			<span>点击：{{newsInfo.click}}次</span>
		</p>
		<hr>
		<div class="content" v-html="newsInfo.content"></div>
		<!--评价子组件区域-->
		<comment-tag :id="id"></comment-tag>
	</div>
</template>

<script>
//导入评论子组件
import comment from '../subComponents/comment.vue'
export default{
	data(){
		return {
			id: this.$route.params.id,
			newsInfo:{}
		}
	},
	created(){
		this.getNewsInfo()
	},
	methods:{
		getNewsInfo(){
			this.$http.get('api/getNewsInfo/' + this.id + '.json').then(res => {
				if(res.data.status ===0){
					this.newsInfo = res.data.message[0]
				}
			})
		}
	},
	components:{//注册子组件节点
		"comment-tag":comment
	}

}
	
</script>

<style lang="scss">
	.newsInfo-container{
		padding: 0 4px;
		h1 {
			font-size:16px;
			text-align:center;
			margin:15px 0;
			color:#f00;
		}
		p {
			font-size:13px;
			color:#226aff;
			display:flex;
			justify-content:space-between;
		}
		.content{

			margin:0 auto;
			ul{
				padding:4px;
				margin:2px;
				list-style:none
			}
			img{
				width:100%
			}
		}
	}
</style>