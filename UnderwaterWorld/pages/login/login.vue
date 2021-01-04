<template>
	<view :style="{ height: this.app_height * 0.5 * 2  + 'rpx' }" class="registertitle">
		<form class='loginView' >
				<view class="cen">
					<image src="../../static/logo2.png" mode=""></image>
				</view>
			<view class="tologin">
				<view class="input-view">
					<view class="label-view">
						<u-icon name="account" size="40rpx"></u-icon>
					</view>
					<input class="input" type="text" placeholder="请输入手机号码" name="nameValue" v-model="username" >
					<!-- <u-button shape="circle" size="mini">发送验证码</u-button> -->
					</input>
				</view>
				<view style="display: flex;align-items: center;justify-content: center;">
						<u-line color="#CFB53B" length="80%" />
						<!-- <u-line color="red"></u-line> -->
				</view>
				<view class="input-view">
					<view class="label-view">
						<u-icon name="lock-fill" size="40rpx"></u-icon>
						<!-- <text class="label">请输入登录密码</text> -->
					</view>
					<input class="input" type="password" placeholder="请输入登录密码" name="passwordValue" v-model="userpassword"/>
				</view>
				<view style="display: flex;align-items: center;justify-content: center;">
						<u-line color="#CFB53B" length="80%" />
						<!-- <u-line color="red"></u-line> -->
				</view>
				<view class="button-view">
					<navigator url="./register" class="toregisert">
						<view class="reguser">
						注册账号
						</view>
					</navigator>
					<!-- <navigator url="./forgetpassword" class="forgetpassword">
						<view class="reguser">
						忘记密码？
						</view>
					</navigator> -->
					
					<!-- <button type="default" class="register" hover-class="hover" @click="register">免费注册</button> -->
				</view>
				<view class="Signinbtn">
				<u-button type="default" class="custom-style" 
				shape="circle"  @tap='submit' :ripple="true" ripple-bg-color="#FAFAD2">登录</u-button>
				</view>
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
			   username:"",
			   userpassword:"",
			   //验证的规则
			   rules:{
			       username:{
			           rule:/\S/,
			           msg:"账号不能为空"
			       },
			       userpassword:{
			           rule:/^[0-9a-zA-Z]{6,16}$/,
			           msg:"密码应该为6-16位"
			       }
			   }
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
		            //点击登录
		            submit(){
						// console.log(this.validate(username));
		    //             if(!this.validate('username')) return;
		    //             if(!this.validate("userpassword"))  return;
		                uni.showLoading({
		                    title:"登录中..."
		                });
						request({
							methods:'POST',
							url:'/mall/app/login',
							data:{
								mobile:this.username,
								password:this.userpassword
							}
						}).then(data=>{
							console.log(data)
							uni.setStorageSync('token',data?.data?.data );
							if(data?.data?.data){
								uni.switchTab({
								    url: '/pages/index/index'
								});
							}
							uni.showToast({
							    title: data?.data?.message,
								// title: "手机号或密码不能为空",
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
		height: 45%;
		display: flex;
		align-items: center;
		justify-content: center;
	}
	.input-view{
		display: flex;
		align-items: center;
		justify-content: center;
		width: 100%;
		height: 20%;
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
		height: 50%;
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
		background-color: #CFB53B;
		color:white;
		width: 500rpx;
	}
	
</style>