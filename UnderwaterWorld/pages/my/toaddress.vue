<template>
	<view class="registertitle">
		<form class='loginView'>
				<view class="cen">
					<image src="../../static/centitle.png" mode=""
					class="centitle"></image>
				</view>
			<view class="tologin">
				<view class="input-view">
					<view class="label-view">
						<!-- <u-icon name="account" size="40rpx"></u-icon> -->
					</view>
					<input class="input" type="text" placeholder="收货人姓名" name="nameValue" v-model="addressName" >
					<!-- <u-button shape="circle" size="mini">发送验证码</u-button> -->
					</input>
				</view>
				<view style="display: flex;align-items: center;justify-content: center;">
						<u-line color="#CFB53B" length="80%" />
						<!-- <u-line color="red"></u-line> -->
				</view>
				<view class="input-view">
						<!-- <text class="label">请输入登录密码</text> -->
					<input class="input" type="text" placeholder="收货人地址" name="passwordValue" v-model="addressHarvest"/>
				</view>
				<view style="display: flex;align-items: center;justify-content: center;">
						<u-line color="#CFB53B" length="80%" />
						<!-- <u-line color="red"></u-line> -->
				</view>
				<view class="input-view">
						<!-- <text class="label">请输入登录密码</text> -->
					<input class="input" type="text" placeholder="收货人电话" name="passwordValue" v-model="addressPhone"/>
				</view>
				<view style="display: flex;align-items: center;justify-content: center;">
						<u-line color="#CFB53B" length="80%" />
						<!-- <u-line color="red"></u-line> -->
				</view>
				
				<view class="Signinbtn">
				<u-button type="default" class="custom-style" 
				shape="circle"  @tap='submit' :ripple="true" ripple-bg-color="#FAFAD2">提交</u-button>
				</view>
				<!-- <view class="Signinbtn">
				<u-button type="default" class="custom-style" 
				shape="circle"  @tap='submit' :ripple="true" ripple-bg-color="#FAFAD2">已经注册，点击下载</u-button>
				</view> -->
				
				
			</view>
			</form>
	</view>
</template>

<script>
	import {request} from '../../ajax.js'
		export default{
			data(){
				return {
				   //用户输入的内容
				   addressName:"",
				   addressHarvest:"",
				   addressPhone:""
				}	
			},
			 methods: {
						// 注册
						submit(){
						    uni.showLoading({
						        title:"注册中..."
						    });
							request({
								methods:'POST',
								url:'/mall/app/address/saveAddress',
								data:{
									addressName:this.addressName,
									addressHarvest:this.addressHarvest,
									addressPhone:this.addressPhone
								}
							}).then(data=>{
								console.log(data)
								uni.setStorageSync('token',data?.data?.data );
								if(data?.data?.data){
									uni.redirectTo({
									    url: '/pages/my/Address'
									});
								}
								uni.showToast({
								    title: data?.data?.message,
									// title: "不能为空",
									icon:'none',
								    duration: 2000
								});
							})
						},
				}
		}
</script>

<style scoped>
	.registertitle{
		width: 100%;
		height: 1800rpx;
		background-color: #D3CDF1;
		display: flex;
		background-image: url(../../static/backimg.jpg);
		/* align-items: center;
		justify-content: center; */
	}
	.Signinbtn{
		display: flex;
		align-items: center;
		justify-content: center;
	}
	.loginView{
		height: 100%;
		width: 100%;
		align-items: center;
		justify-content: center;
	}
	.cen{
		width: 100%;
		height: 20%;
		display: flex;
		align-items: center;
		justify-content: center;
	}
	.input-view{
		display: flex;
		align-items: center;
		justify-content: center;
		width: 100%;
		height: 13%;
	}
	.input{
		margin:6px;
		width:180px;  
		border-top-width: 0px;
		border-left-width: 0px;
		border-right-width: 0px;
		border-bottom-width: 1px;
	}
	.tologin{
		width: 90%;
		margin-left: 5%;
		height: 80%;
		/* background-color: #9177e9; */
		color: #CFB53B;
		display: flex;
		flex-direction: column;
		justify-content: center;
		border-radius:25px;
	}
	.reguser{
		margin-top: 10%;
		width: 100%;
		height: 40%;
	}
	.button-view{
		display: flex;
		
		width: 100%;
		height: 30%;
	}
	.toregisert{
		width: 50%;
		display: flex;
		align-items: center;
		justify-content: center;
		text-align: center;
	}
	.forgetpassword{
		width: 50%;
		display: flex;
		align-items: center;
		justify-content: center;
		text-align: center;
	}
	.custom-style {
		margin-top: 10%;
		background-color: #CFB53B;
		color:white;
		width: 500rpx;
	}
	.centitle{
		height: 85%;
		width: 40%;
	}
	
</style>