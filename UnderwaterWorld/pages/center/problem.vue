<template>
	<view class="content">
		<view class="text-area">
			<view class="helpcore">
				<h3>联系信息</h3>
				<u-form :model="form" ref="uForm">
				<u-form-item label="">
					<u-input v-model="form.name" 
					placeholder="清输入用户名"/>
				</u-form-item>
				</u-form>
				<h3>提交问题</h3>
				<u-form :model="form" ref="uForm">
				<u-form-item label="">
					<u-input v-model="form.name" />
				</u-form-item>
				</u-form>
				<h3>上传截图</h3>
				<u-upload :action="action" :file-list="fileList" ></u-upload>
				<u-button type="warning" class="custom-style">提交</u-button>
				<br/><br/>
				<h3>有更多需要请及时联系在线客服</h3>
			</view>
		</view>
		
	</view>
</template>

<script>
	
	export default {
		data() {
			return {
				title: 'Hello',
				form: {
						value: '',
						type: 'text',
						border: true,
						},
				radio: '',
				switchVal: false
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
		padding: 40rpx;
		width: 100%;
		height: 1200rpx;
		font-weight: 700rpx;
	}
	
	.text-area {
		font-size: 20rpx;
		display: flex;
		width: 100%;
		height: 100%;
		border-radius:10px;
		font-weight: 700rpx;
	}
	
	.helpcore{
		width: 100%;
		font-size: 28rpx;
		font-weight: 700rpx;
	}
	.custom-style {
			width: 100%;
		}
	
	
</style>
