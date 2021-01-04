<template>
	<view class="content" :style="{ height: this.app_height * 0.5 * 2  + 'rpx' }">
		<view  style="display: flex;width: 100%;flex-wrap: wrap;height: 100%;">
			<view class="record" >
				<view class="tortoise">
				<image :src="userimg" mode="" class="tortoiseimg"  @longpress="saveimg()"></image><br/>
				</view>
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
				userimg:{}
			}
		},
		onLoad() {
				uni.getSystemInfo({
				    success: res => {
				        // console.log('手机可用高度:' + res.windowHeight * 2 + 'rpx');
				        _this.app_height = res.windowHeight * 2;
				    }
				}),
			request({
				methods:'POST',
				url:'/mall/app/member/invited',
				
			}).then(data=>{
				console.log('data',data)
				this.userimg = data?.data?.data;
			})
		
		},
		methods: {
			saveImg() {
						const that = this;
						uni.downloadFile({
							url,
							success: res => {
								if (res.statusCode === 200) {
									uni.saveImageToPhotosAlbum({
										filePath: res.tempFilePath,
										success: function() {
											this.tools.toast('保存成功');
										},
										fail: function() {
											this.tools.toast('保存失败，请稍后重试');
										}
									});
								} else {
									this.tools.toast('下载失败');
								}
							}
						});
					}
			 
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
		color: white;
		display: flex;
		flex-direction: column;
		flex-wrap: wrap;
		justify-content: center;
		align-items: center;
		width: 100%;
		height: 1200rpx;
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
		width: 100%;
		height: 1200rpx;
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
