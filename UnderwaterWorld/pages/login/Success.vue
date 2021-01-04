<template>
	<view class="">
		注册成功！
		<u-button type="default" class="custom-style"
		shape="circle"  @tap='submit' :ripple="true" ripple-bg-color="#FAFAD2">登录</u-button>
	</view>
</template>

<script>
		export default{
			data(){
				return {
				   }
			},
			 methods: {
			            //点击登录
			            submit(){
							uni.switchTab({
								 url: '/pages/login/login'
							})
			            },
				}
		}
</script>

<style>
</style>
