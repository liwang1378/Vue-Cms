<template>
	<div class="cmt-container">
		<h3>发表评论</h3>
		<textarea placeholder="请输入要评论的内容(最多120字)" maxlength="120" v-model="msg"></textarea>

		<mt-button type="primary" size="large" @click="postComment">发表评论</mt-button>	
		<div class="cmt-list">
			<div class="cmt-item" v-for="(item,i) in comments" :key="item.add_time">
				<div class="cmt-title">
					第{{i+1}}楼&nbsp;&nbsp;用户：{{item.user_name}}&nbsp;&nbsp;发表时间：{{item.add_time|dateFormat}}
				</div>
				<div class="cmt-body">
					{{item.content=='undefined'||item.content.trim()==''?'此用户没有发表任何评论':item.content}}
				</div>
			</div>
		</div>
		<mt-button type="danger" size="large" plain @click="getMore">加载更多</mt-button>		
	</div>
</template>

<script>
import {Toast} from "mint-ui";
	export default{
		data(){
			return{
				page:1,
				comments:[],
				msg:''
			}
		},
		created(){
			this.getComments();
			console.log(this.comments)
		},
		methods:{
			getComments(){
				this.$http.get('api/getComments/'+this.id + '-' + this.page + ".json?page="+this.page).then(res =>{
					console.log(res)
					if(res.data.status===0){
						 // this.comments=res.data.message ;
						 this.comments = this.comments.concat(res.data.message);//点击加载更多,不清空原有数据，而是拼接上新的评论
					}else{
						Toast('获取评论列表失败！')
					}
				})
			},
			getMore(){
				this.page++;
				this.getComments();
			},
			postComment(){
				//校验评论内容
				if(this.msg.trim().length===0){
					return Toast('评论内容不能为空！')
				}
				//1. 参数：请求的URL地址
				//2. 参数2：提交的数据{content:this.msg}
				//3. 参数3：表单数据格式{ emulateJSON:true }
				/*this.$http.post('api/postComments/'+this.id +'.json',{
					content:this.msg.trim()
				})*/
				this.$http.get('api/postComments/'+this.id +'.json').then(res => {
					if(res.data.status===0){
						//拼接一个评论对象
						var cmt = {user_name:'佚名',add_time:Date.now(),content:this.msg.trim()}
						this.comments.unshift(cmt)
						this.msg = ''
					}else{
						Toast('发表评论失败！')
					}
				})
			}
		},
		props:["id"]//父组件向子组件传值
	}
</script>

<style lang="scss" scoped>
	.cmt-container{
		h3{
			padding: 30px 0;
			font-size:18px;
		}
		textarea{
			font-size:14px;
			height:85px;
			margin:0;
		}

		.cmt-list{
			margin: 10px 0;
			.cmt-item{
				font-size:14px;
				.cmt-title{
					padding: 5px;
					line-height:30px;
					background-color: #ccc;
				}
				.cmt-body{
					font-size:12px;
					line-height:35px;
					text-indent:2em;
				}
			}
		}
	}
</style>