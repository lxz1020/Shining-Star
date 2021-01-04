<template>
	<view class="content">
		<!-- 资产 -->
		<view class="text-area">
			<text style="font-size: 40rpx;">0.00</text>
			<view class="">
				≈0.00积分
			</view><br/>
			<u-button shape="circle" plain :custom-style="customStyle"
			size="medium"
			>提取</u-button>
		</view>
		<view class="DNQ">
			DNQ是什么币？DNQ是全球发行的基于以太坊ERC20的去中心化数字资产，
			DNQ币致力于成为全球游戏行业的通用数字货币标准。NDQ币，使用游戏来发展
			区块链技术！全球玩家可以体验支持DNQ币购买的独特游戏内容。我们正在
			与成功的游戏开发商合作开发游戏中的物品和内容，只能通过DNQ币购买。
			现暂开通兑换成积分（后期会直接转到数字钱包），可以发起提币审核通过
			会自动兑换成积分。
			注DNQ:200个起提。<br/>
			温馨提示：现暂DNQ给自己兑换成积分，请输入本账号（自己电话）为提币地址。
			兑换比率:1积分=1DNQ。（如超过48小时还未到账，请联系官方客服核实处理）
		</view>
	</view>
</template>

<script>
	
	export default {
		data() {
			return {
				title: 'Hello'
			}
		},
		onLoad() {

		},
		methods: {

		}
	}
</script>

<style lang="scss" scoped>
	.content {
		display: flex;
		flex-direction: column;
		// justify-content: center;
		padding: 40rpx;
		background-color: #2C3145;
		width: 100%;
		height: 1200rpx;
	}
	.setting{
		width: 100%;
		height: 50rpx;
		text-align: right;
	}
	.state{
		color: white;
		margin-left: 250rpx;
		background-color: #3D4358;
		width: 25%;
		height: 100%;
		border-radius:4px;
		font-size: 25rpx;
		text-align: center;
	}
	.text-area {
		color: white;
		font-size: 20rpx;
		display: flex;
		flex-direction:column ;
		flex-wrap: wrap;
		justify-content: center;
		align-items: center;
		width: 100%;
		height: 300rpx;
		background-color: #3c4457;
		border-radius:10px;
	}
	.dontknow {
		margin-top: 20rpx;
		color: white;
		font-size: 20rpx;
		display: flex;
		flex-wrap: wrap;
		justify-content: center;
		align-items: center;
		width: 100%;
		height: 400rpx;
		background-color: #3c4457;
		border-radius:10px;
	}
	.DNQ{
		color: white;
		}
	
	
</style>
