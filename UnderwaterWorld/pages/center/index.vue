<template>
	<view class="content">
		<view class="text-area">
			<view class="helpcore">
				<navigator url="./help" open-type="navigate" class="tio">
				<view class="helpcoreone">
					<u-icon name="man-add" color="#E5DDAE" size="58"></u-icon>
				</view>
				<view class="helpcoretwo">
				帮助中心
				</view>
				</navigator>
			</view>
			<view class="helpcore">
				<navigator url="./help" open-type="navigate" class="tio">
				<view class="helpcoreone">
					<u-icon name="order" color="#E5DDAE" size="58"></u-icon>
				</view>
				<view class="helpcoretwo">
				平台规则
				</view>
				</navigator>
			</view>
			<view class="helpcore">
				<navigator url="./feedback" open-type="navigate" class="tio">
				<view class="helpcoreone">
					<u-icon name="man-add" color="#E5DDAE" size="58"></u-icon>
				</view>
				<view class="helpcoretwo">
				我的反馈
				</view>
				</navigator>
			</view>
			<view class="helpcore">
				<view class="helpcoreone">
					<u-icon name="chat-fill" color="#E5DDAE" size="58"></u-icon>
				</view>
				<view class="helpcoretwo">
				在线客服
				</view>
			</view>
		</view>
		<view class="link-demo">
			<!-- <u-link :color="$u.color['primary']" :under-line="true" href="http://www.uviewui.com">Link超链接组件演示</u-link> -->
			问题反馈
		</view>
		<view class="Problemfeedback">
			<view class="Rushpurchaseproblem">
			<navigator url="./problem" open-type="navigate" class="tio">
				抢购问题
			</navigator>
			</view>
			<view class="Recharge">
			<navigator url="./problem" open-type="navigate" class="tio">
				充值问题
			</navigator>
			</view>
			<view class="account">
			<navigator url="./problem" open-type="navigate" class="tio">
				账户问题
			</navigator>
			</view>
			<view class="Realname">
			<navigator url="./problem" open-type="navigate" class="tio">
				实名问题
			</navigator>
			</view>
		</view>
		<view class="Moreneed">
			有更多需要请及时联系在线客服
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
		align-items: center;
		// justify-content: center;
		padding: 40rpx;
		background-color: #2C3145;
		width: 100%;
		height: 1200rpx;
	}
	
	.logo {
		height: 200rpx;
		width: 200rpx;
		margin-top: 100rpx;
		margin-left: auto;
		margin-right: auto;
		margin-bottom: 50rpx;
	}

	.text-area {
		margin-top: 30rpx;
		color: white;
		font-size: 20rpx;
		display: flex;
		flex-wrap: wrap;
		justify-content: center;
		align-items: center;
		width: 96%;
		height: 350rpx;
		background-color: #3c4457;
		border-radius:10px;
	}
	
	.title {
		font-size: 28rpx;
		color: $u-content-color;
	}
	
	.link-demo {
		margin-top: 30rpx;
		font-size: 35rpx;
		color: white;
	}
	.personal{
		width: 40rpx;
		height: 40rpx;
	}
	.wrap {
			padding: 24rpx;
		}
	
		.u-row {
			margin: 40rpx 0;
		}
	
		.demo-layout {
			height: 80rpx;
			border-radius: 8rpx;
		}
	
		.bg-purple {
			background: #d3dce6;
		}
	
		.bg-purple-light {
			background: #e5e9f2;
		}
	
		.bg-purple-dark {
			background: #99a9bf;
		}
	
	.helpcoreone{
		display: flex;
		align-items: center;
		justify-content: center;
		width: 100%;
		height: 50rpx;
	}
	.helpcore{
		width: 50%;
		height: 50%;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}
	.helpcoretwo{
		margin-top: 10rpx;
		font-size: 25rpx;
	}
	.Problemfeedback{
		margin-top: 30rpx;
		color: white;
		font-size: 25rpx;
		display: flex;
		flex-wrap: wrap;
		width: 86%;
		height: 250rpx;
	}
	.Rushpurchaseproblem{
		width: 49%;
		height: 60rpx;
		background-color: #3c4457;
		display: flex;
		border-radius:4px;
		align-items: center;
		justify-content: center;
		font-size: 25rpx;
	}
	.account{
		width: 49%;
		height: 60rpx;
		background-color: #3c4457;
		display: flex;
		border-radius:4px;
		align-items: center;
		justify-content: center;
		font-size: 25rpx;
	}
	.Recharge{
		width: 49%;
		height: 60rpx;
		background-color: #3c4457;
		display: flex;
		border-radius:4px;
		align-items: center;
		justify-content: center;
		font-size: 25rpx;
		margin-left: 2%;
		}
	.Realname{
		width: 49%;
		height: 60rpx;
		background-color: #3c4457;
		display: flex;
		border-radius:4px;
		align-items: center;
		justify-content: center;
		font-size: 25rpx;
		margin-left: 2%;
	}
	.Moreneed{
	color:#E5DDAE ;
	font-size: 30rpx;
	}
</style>
