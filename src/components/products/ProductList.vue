<template>
	<div class="product-list">
		
		<div class="product-item">
			<img src="https://img.alicdn.com/imgextra/i4/1063206862/O1CN0120YqGVu4lG3MvIW_!!1063206862.jpg" alt="">
			<h1 class="title">小米(Mi)小米Note 16G双网通版</h1>
			<div class="info">
				<p class="price">
					<span class="now">￥2199</span>
					<span class="cost">￥2399</span>
				</p>
				<p class="sell">
					<span>热卖中</span>
					<span>剩60件</span>
				</p>
			</div>
		</div>
		<div class="product-item">
			<img src="https://img.alicdn.com/imgextra/i1/653243179/TB2AWC.rA9WBuNjSspeXXaz5VXa_!!653243179.jpg" alt="">
			<h1 class="title">【加送精华】墨菊巨补水套装，深层补水 韩束巨补水，肌肤巨水润，层层渗透
			</h1>
			<div class="info">
				<p class="price">
					<span class="now">￥2199</span>
					<span class="cost">￥2399</span>
				</p>
				<p class="sell">
					<span>热卖中</span>
					<span>剩610件</span>
				</p>
			</div>
		</div>
		<div class="product-item">
			<img src="https://img.alicdn.com/imgextra/i3/2911805119/O1CN011ngXuwDpG5uR0RN_!!2911805119.jpg" alt="">
			<h1 class="title">全友家私简约皮布沙发</h1>
			<div class="info">
				<p class="price">
					<span class="now">￥5199</span>
					<span class="cost">￥6399</span>
				</p>
				<p class="sell">
					<span>热卖中</span>
					<span>剩160件</span>
				</p>
			</div>
		</div>
	</div>
</template>

<script>
	
</script>

<style lang="scss" scoped>
	.product-list{
		display:flex;
		flex-wrap:wrap;
		padding:5px;
		justify-content: space-between;
		.product-item{
			width:49%;
			border:1px solid #ccc;
			box-shadow: 0 0 8px #ccc;
			margin:5px 0;
			padding:2px;
			display:flex;
			flex-direction:column;
			justify-content:space-between;
			min-height:295px;
			img{
				width:100%;
			}
			.title{
				padding:2px;
				font-size:14px;
			}

			.info{
				background-color: #eee;
				p{
					margin:0;
					padding:5px;
				}
				.price{
					.now{
						color:red;
						font-size:16px;
						font-weigth:bold;
					}
					.cost{
						text-decoration: line-through;
						font-size:12px;
						margin-left:20px;
					}
				}
				.sell{
					display:flex;
					justify-content:space-between;
					font-size:13px;
				}
			}
		}
	}
</style>