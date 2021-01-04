<template>
	<view class="content" :style="{ height: this.app_height * 0.5 * 2  + 'rpx' }">
				<view class="payys">
					
					<view class="pay">
						<navigator url="./zhifubao" open-type="navigate" class="tio">
						<view style="color: white; font-size: 40rpx;">
							支付宝支付&nbsp;
							&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
							&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
							&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;>>>
						</view>
						</navigator>
					</view>
					<view class="paya">
						<navigator url="./wechat" open-type="navigate" class="tio">
						<!-- <image src="../../static/wechat.jpg" mode="" style="height: 200rpx;"></image> -->
						<view style="color: white; font-size: 40rpx;">
							微信支付&nbsp;
							&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
							&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
							&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;>>>
						</view>
						</navigator>
					</view>
				</view>
				
			
	</view>
</template>

<script>
	import {request} from '../../ajax.js'
	export default {
		data() {
			return {
				
			}
		},
		onLoad() {
				const _this = this;
				uni.getSystemInfo({
				    success: res => {
				        console.log('手机可用高度:' + res.windowHeight * 2 + 'rpx');
				        _this.app_height = res.windowHeight * 2;
				    }
				});
					
			
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
	}
	.payys{
		display: flex;
		flex-direction: column;
		// align-items: center;
		// justify-content: center;
		width: 100%;
		height: 100%;
	}
	.pay{
		// margin-top: 200rpx;
		width: 100%;
		height: 10%;
		display: flex;
		align-items: center;
		justify-content: center;
	}
	.paya{
		
	}
	.tio{
		width: 100%;
		}
	
	
</style>
