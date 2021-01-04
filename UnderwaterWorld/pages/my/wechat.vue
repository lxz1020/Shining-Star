<template>
	<view class="content">
		
		<!-- <view class="text-area">
				<image src="../../static/underwater.png" mode=""
				class="underwaterimg"></image>
		</view> -->
		<view  style="display: flex;width: 100%;flex-wrap: wrap;">
			
			<view class="record" v-for="(item,i) in dataArray">
				<view class="tortoise">
				<image :src="item.collectionImg" mode="" class="tortoiseimg"></image><br/>
				</view>
				<view class="animal">
					<view class="">
						账号:{{item.collectionAccount}}
					</view>
				</view>
				<view class="animal">
					<view class="">
						收款手机号:{{item.collectionMobile}}
					</view>
					
				</view>
				<view class="animal">
					<view class="">
						收款人:{{item.collectionName}}
					</view>
				</view>
			</view>
			
				<u-button class="custom-style">
					<navigator url="./toinstall" open-type="navigate" class="tio">
					去添加
					</navigator>
				</u-button>
				<u-button class="custom-style-update">
					<navigator url="./toinstall" open-type="navigate" class="tio">
					去修改
					</navigator>
				</u-button>
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
				url:'/mall/app/member-collection-info',
				
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
		width: 96%;
		height: 50%;
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
	.custom-style {
		margin-top: 30%;
		color: white;
		background-color: green;
		width: 400rpx;
		position:relative;
	}
	.custom-style-update {
		margin-top: 10%;
		color: white;
		background-color: green;
		width: 400rpx;
		position:relative;
	}
	
</style>
