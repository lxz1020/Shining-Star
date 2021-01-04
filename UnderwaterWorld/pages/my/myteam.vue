<template>
	<view class="content">
		<view  style="display: flex;width: 100%;flex-wrap: wrap;">
			<view class="record" v-for="(item,i) in dataArray">
				<view class="tortoise">
				<!-- <image :src="item.extensionImg" mode="" class="tortoiseimg"></image><br/> -->
				</view>
				<view class="animal">
					<view class="">
						
						手机号:{{item.mobile}}
						<!-- 商品名称:{{item.assets}} -->
					</view>
				</view>
				<view class="animal">
					<view class="">
						姓名:{{item.name}}
						<!-- 最高价格:{{item.credit}} -->
					</view>
					
				</view>
				<!-- <view class="animal">
					<view class="">
						推荐码:{{item.extensionCode}}
					</view>
					
				</view>
				
				<view class="animal">
					<view class="">
						用户id:{{item.id}}
					</view>
				</view>
				<view class="animal">
					<view class="">
						手机号:{{item.mobile}}
					</view>
				</view>
				<!-- <view class="animal">
					<view class="">
						商品停止时间:{{item.commodityStopTime}}
					</view>
		
				</view> -->
				<!-- <view class="animal">
					<view class="">
						手机号:{{item.mobile}}
						<!-- {{item.idCard}} -->
						<!-- 姓名:{{item.name}}
						真实姓名:{{item.realName}}
					</view> -->
				<!-- </view> -->
				
				<!-- <view class="animal">
					<view class="">
						奖励DNQ:
					</view>
					<view class="animalfont">
						1
					</view>
				</view> -->
				<!-- <view class="animal">
					<u-button shape="circle" :disabled="true" size="mini">{{item.commodityType===0?'可购买':"不可购买"}}</u-button>
				</view> -->
				
			</view>
			</view>
			
	</view>
</template>

<script>
	import {request} from '../../ajax.js'
	export default {
		data() {
			return {
				title: 'Hello',
				dataArray:[]
			}
		},
		onLoad() {
				
			request({
				methods:'get',
				url:'/mall/app/member/team',
				
			}).then(data=>{
				console.log('data',data)
				this.dataArray = data?.data?.data;
			})
		
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
		min-height: 100%;
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
		margin-top: 30rpx;
		color: white;
		font-size: 20rpx;
		display: flex;
		flex-wrap: wrap;
		justify-content: center;
		align-items: center;
		width: 100%;
		height: 300rpx;
		background-color: #3c4457;
		border-radius:10px;
	}
	
	.record {
		margin-left: 1%;
		margin-top: 30rpx;
		color: white;
		font-size: 20rpx;
		display: flex;
		flex-direction: column;
		flex-wrap: wrap;
		justify-content: center;
		align-items: center;
		width: 48%;
		height: 700rpx;
		background-color: #3c4457;
		border-radius:10px;
	}
	.recordb {
		margin-top: -450rpx;
		color: white;
		font-size: 20rpx;
		display: flex;
		flex-direction: column;
		flex-wrap: wrap;
		justify-content: center;
		align-items: center;
		width: 48%;
		height: 700rpx;
		background-color: #3c4457;
		border-radius:10px;
	}
	.recorda {
		margin-left: 4%;
		margin-top: 30rpx;
		color: white;
		font-size: 20rpx;
		display: flex;
		flex-direction: column;
		flex-wrap: wrap;
		justify-content: center;
		align-items: center;
		width: 48%;
		height: 700rpx;
		background-color: #3c4457;
		border-radius:10px;
	}
	.helpcoreone{
		display: flex;
		align-items: center;
		justify-content: center;
		width: 100%;
		height: 50rpx;
	}
	.underwaterimg{
		width: 100%;
		height: 100%;
	}
	.tortoiseimg{
		width: 60%;
		height: 160rpx;
	}
	.tortoise{
		width: 100%;
		height: 160rpx;
		display: flex;
		align-items: center;
		justify-content: center;
	}
	.animal{
		margin-top: 20rpx;
		display: flex;
		font-size: 28rpx;
	}
	.animalb{
		display: flex;
		font-size: 28rpx;
	}
	.state{
		margin-left: 30rpx;
		width: 100rpx;
		height: 100%;
		background-color: #F15AB0;
		color: white;
	}
	.animalfont{
		color: white;
		font-weight: 800;
		margin-left: 20rpx;
		
	}
	
</style>
