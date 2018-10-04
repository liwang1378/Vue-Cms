<template>
	<div class="app-container">
		<!-- Header -->
		<mt-header fixed title="我的九江">
			<!-- <router-link to="/" slot="left">
				<mt-button icon="back">返回</mt-button>
			</router-link> -->
			<a href="#" slot="left">
				<mt-button icon="back" @click="back">返回</mt-button>
			</a>
			<mt-button icon="more" slot="right"></mt-button>
		</mt-header>

		<!--添加动画 router-view -->
		<transition>
			<router-view></router-view>
		</transition>
		<!-- Tabbar -->
		<nav class="mui-bar mui-bar-tab">
			<router-link class="mui-tab-item2" to="/home">
				<span class="mui-icon mui-icon-home"></span>
				<span class="mui-tab-label">首页</span>
			</router-link>
			<router-link class="mui-tab-item2" to="/member">
				<span class="mui-icon mui-icon-contact"></span>
				<span class="mui-tab-label">会员</span>
			</router-link>
			<router-link class="mui-tab-item2" to="/cart">
				<span class="mui-icon mui-icon-extra mui-icon-extra-cart">
					<span class="mui-badge">0</span>
				</span>
				<span class="mui-tab-label">购物车</span>
			</router-link>
			<router-link class="mui-tab-item2" to="/search">
				<span class="mui-icon mui-icon-search"></span>
				<span class="mui-tab-label">搜索</span>
			</router-link>
		</nav>
	</div>	
</template>

<script>
export default{
	methods:{
		back(){
			console.log(this)
			this.$router.go(-1)
		}
	}
}	
</script>

<style lang="scss" scoped>
	
	.app-container{
		padding-top:40px;
		padding-bottom:50px;
		overflow-x:hidden;
		background-color: #fff;
		.mint-header{
		z-index:99
	}
		
	}
	.v-enter{
		opacity:0;
		transform:translatex(100%)
	}
	.v-leave-to{
		opacity:0;
		transform:translatex(-100%);
		position:absolute
	}

	.v-enter-active,.v-leave-active{
		transition:all 0.5s ease;
	}

//解决与MUI顶部滑动条冲突，底部tabbar不能切换
.mui-bar-tab .mui-tab-item2 {
	display: table-cell;
	overflow: hidden;
	width: 1%;
	height: 50px;
	text-align: center;
	vertical-align: middle;
	white-space: nowrap;
	text-overflow: ellipsis;
	color: #929292;
}
.mui-bar-tab .mui-tab-item2 .mui-icon {
    top: 3px;
    width: 24px;
    height: 24px;
    padding-top: 0;
    padding-bottom: 0;
}
.mui-bar-tab .mui-tab-item2 .mui-icon~.mui-tab-label {
    font-size: 11px;
    display: block;
    overflow: hidden;
    text-overflow: ellipsis;
}
</style>