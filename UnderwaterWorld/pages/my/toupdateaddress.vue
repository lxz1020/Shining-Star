<template>
	<view class="registertitle">
		<form class='loginView' @submit="login">
				
			<view class="tologin">
				
				<view class="input-view">
					<view class="label-view">
					</view>
					<input class="input" type="text" placeholder="收货地址" name="passwordValue" v-model="addressHarvest"/>
				</view>
				<view style="display: flex;align-items: center;justify-content: center;">
						<u-line color="#CFB53B" length="80%" />
						<!-- <u-line color="red"></u-line> -->
				</view>
				<view class="input-view">
					<view class="label-view">
					</view>
					<input class="input" type="text" placeholder="收货人" name="nameValue" v-model="addressName" >
					</input>
				</view>
				<view style="display: flex;align-items: center;justify-content: center;">
						<u-line color="#CFB53B" length="80%" />
				</view>
				<view class="input-view">
					<view class="label-view">
					</view>
					<input class="input" type="text" placeholder="收货人电话" name="nameValue" v-model="addressPhone" >
					</input>
				</view>
				<view style="color: #D3CDF1;" v-model="addressId">
					{{option.addressId}}
				</view>
				<view style="display: flex;align-items: center;justify-content: center;">
						<u-line color="#CFB53B" length="80%" />
				</view>
				<view class="button-view">
					<!-- <navigator url="./register" class="toregisert">
						<view class="reguser">
						注册账号
						</view>
					</navigator> -->
					<!-- <navigator url="./forgetpassword" class="forgetpassword">
						<view class="reguser">
						忘记密码？
						</view>
					</navigator> -->
					
					<!-- <button type="default" class="register" hover-class="hover" @click="register">免费注册</button> -->
				</view>
				<view class="Signinbtn">
				<u-button type="default" class="custom-style" 
				shape="circle"  @tap='submit(option)' :ripple="true" ripple-bg-color="#FAFAD2">修改</u-button>
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
			   addressHarvest:"",
			   addressName:"",
			   addressPhone:"",
			   addressId:0
			}	
		},
		 methods: {
		            //点击登录
		            submit(option){
		                uni.showLoading({
		                    title:"修改中..."
		                });
						request({
							methods:'POST',
							url:'/mall/app/address/updateAddress',
							data:{
								addressHarvest:this.addressHarvest,
								addressName:this.addressName,
								addressPhone:this.addressPhone,
								addressId:option.addressId,
							}
						}).then(data=>{
							console.log(data)
							// uni.setStorageSync('token',data?.data?.data );
							if(data.data){
								uni.switchTab(
									{
									    url: '/pages/my/my'
									}
								);
							}
							uni.showToast({
							    title: data?.data?.message,
								// title: "不能为空",
								icon:'none',
							    duration: 2000
							});
						})
		             
		            },
			onLoad: function (option) { //option为object类型，会序列化上个页面传递的参数
					// console.log(option);
					// console.log(option.addressId); //打印出上个页面传递的参数。
					this.option = option;
					console.log(option)
			    },
			}
	}
</script>

<style scoped>
	.registertitle{
		width: 100%;
		height: 100%;
		background-color: #D3CDF1;
		display: flex;
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