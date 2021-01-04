<template>
	<view class="registertitle">
		<form class='loginView' @submit="login">
				<view class="cen">
					<image src="../../static/logo2.png" mode=""></image>
				</view>
			<view class="tologin">
				
				<view class="input-view">
					<view class="label-view">
						<u-icon name="lock-fill" size="40rpx"></u-icon>
					</view>
					<input class="input" type="text" placeholder="账号" name="passwordValue" v-model="collectionAccount"/>
				</view>
				<view style="display: flex;align-items: center;justify-content: center;">
						<u-line color="#CFB53B" length="80%" />
						<!-- <u-line color="red"></u-line> -->
				</view>
				<view class="input-view">
					<view class="label-view">
						<u-icon name="lock-fill" size="40rpx"></u-icon>
					</view>
					<input class="input" type="text" placeholder="收款二维码" name="passwordValue" v-model="collectionImg"/>
				</view>
				<view style="display: flex;align-items: center;justify-content: center;">
						<u-line color="#CFB53B" length="80%" />
						<!-- <u-line color="red"></u-line> -->
				</view>
				<view class="input-view">
					<view class="label-view">
						<u-icon name="lock-fill" size="40rpx"></u-icon>
					</view>
					<input class="input" type="text" placeholder="收款手机号" name="passwordValue" v-model="collectionMobile"/>
				</view>
				<view style="display: flex;align-items: center;justify-content: center;">
						<u-line color="#CFB53B" length="80%" />
						<!-- <u-line color="red"></u-line> -->
				</view>
				<view class="input-view">
					<view class="label-view">
						<u-icon name="account" size="40rpx"></u-icon>
					</view>
					<input class="input" type="text" placeholder="收款人姓名" name="nameValue" v-model="collectionName" >
					</input>
				</view>
				<view style="display: flex;align-items: center;justify-content: center;">
						<u-line color="#CFB53B" length="80%" />
				</view>
				<view class="button-view">
					
				</view>
				<view class="Signinbtn">
				<u-button type="default" class="custom-style" 
				shape="circle"  @tap='submit' :ripple="true" ripple-bg-color="#FAFAD2">添加</u-button>
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
			   collectionAccount:"",
			   collectionImg:"",
			   collectionMobile:"",
			   collectionName:"",
			   type:""
			}	
		},
		 methods: {
		            submit(){
						// console.log(this.validate(username));
		    //             if(!this.validate('username')) return;
		    //             if(!this.validate("userpassword"))  return;
		                uni.showLoading({
		                    title:"上传中..."
		                });
						request({
							methods:'POST',
							url:'/mall/app/member-collection-info',
							data:{
								collectionAccount:this.collectionAccount,
								collectionImg:this.collectionImg,
								collectionMobile:this.collectionMobile,
								collectionName:this.collectionName,
								type: 2
							}
						}).then(data=>{
							console.log(data)
							uni.setStorageSync('token',data?.data?.data );
							if(data?.data?.data){
								uni.switchTab({
								    url: '/pages/my/my'
								});
							}
							uni.showToast({
							    title: data?.data?.message,
								// title: "不能为空",
								icon:'none',
							    duration: 2000
							});
						})
		                // setTimeout(()=>{
		                //     //隐藏登录状态
		                //     uni.hideLoading();
		                //     uni.navigateBack({
		                //         delta:1
		                //     })
		                // },2000)
	                    
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