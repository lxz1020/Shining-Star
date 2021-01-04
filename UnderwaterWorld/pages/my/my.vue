<template>
	<view class="content" :style="{ height: this.app_height * 0.5 * 2  + 'rpx' }">
		<!-- 设置按钮 -->
		<view class="setting">
			<u-icon name="setting" color="white" size="48"></u-icon>
		</view>
		<!-- 手机号及在线状态 -->
		<view class="phone">
			<view class="idphone" >
			ID/手机:{{userinfo.mobile}}
			</view>
			<view class="state">
				状态:在线
			</view>
		</view>
		<!-- 资产 -->
		<view class="text-area">
			<view class="helpcore">
				<view class="helpcoreone">
					DNQ:
				</view>
				<view class="helpcoretwo">
				0
				</view>
			</view>
			<view class="helpcore">
				<view class="helpcoreone">
					MUQ:
				</view>
				<view class="helpcoretwo">
				0
				</view>
			</view>
			<view class="helpcore">
				<view class="helpcoreone">
					积分:
				</view>
				<view class="helpcoretwo">
				{{userinfo.credit}}
				</view>
			</view>
			<view class="helpcore">
				<view class="helpcoreone">
				累计收益:
				</view>
				<view class="helpcoretwo">
				{{userinfo.allProtif}}
				</view>
			</view>
			<view class="helpcore">
				<view class="helpcoreone">
					总资产:
				</view>
				<view class="helpcoretwo">
				{{userinfo.assets}}
				</view>
			</view>
			<view class="helpcore">
				<view class="helpcoreone">
				推广收益:
				</view>
				<view class="helpcoretwo">
				0
				</view>
			</view> -->
		<!-- </view>
			<!-- 记录 -->
			<view class="record">
				<view class="helpcore">
					<view class="helpcoreone">
						<navigator url="./findOrder" open-type="navigate" class="tio">
						<u-icon name="calendar" color="white" size="58"></u-icon>
						</navigator>
					</view>
					<view class="helpcoretwo">
						<navigator url="./findOrder" open-type="navigate" class="tio">
					订单记录
					</navigator>
					</view>
				</view>
				<view class="helpcore">
					<view class="helpcoreone"  @tap='toaddresss(userinfo)'>
						<u-icon name="rewind-right" color="white" size="58"></u-icon>
					</view>
					<view class="helpcoretwo"  @tap='toaddress(userinfo)' >
						<!-- <navigator url="./Address?msemberId=${userinfo.id}" open-type="navigate" class="tio" > -->
					收货地址123
					</view>
				</view>
				<view class="helpcore">
					<view class="helpcoreone">
					<navigator url="./updatepwd" open-type="navigate" class="tio">
						<u-icon name="lock" color="white" size="58"></u-icon>
					</navigator>
					</view>
					<view class="helpcoretwo">
						<navigator url="./updatepwd" open-type="navigate" class="tio">
					修改密码
						</navigator>
					</view>
				</view>
			</view>
			<!-- 不知道叫啥，第三个模块 -->
			<view class="dontknow">
				<view class="helpcore">
					<view class="helpcoreone">
					<navigator url="./updatepwd" open-type="navigate" class="tio">
						<u-icon name="lock" color="white" size="58"></u-icon>
					</navigator>
					</view>
					<view class="helpcoretwo">
						<navigator url="./updatepwd" open-type="navigate" class="tio">
					修改密码
						</navigator>
					</view>
				</view>
				<view class="helpcore">
					<view class="helpcoreone">
						<navigator url="./Realname" open-type="navigate" class="tio">
						<u-icon name="edit-pen" color="white" size="58"></u-icon>
						</navigator>
					</view>
					<view class="helpcoretwo">
						<navigator url="./Realname" open-type="navigate" class="tio">
					实名验证
					</navigator>
					</view>
				</view>
				<view class="helpcore">
					<view class="helpcoreone">
						<navigator url="./Pay" open-type="navigate" class="tio">
						<u-icon name="coupon" color="white" size="58"></u-icon>
						</navigator>
					</view>
					<view class="helpcoretwo">
						<navigator url="./Pay" open-type="navigate" class="tio">
					支付信息
						</navigator>
					</view>
				</view>
				<view class="helpcore">
					<view class="helpcoreone">
						<navigator url="./myteam" open-type="navigate" class="tio">
					<u-icon name="account" color="white" size="58"></u-icon>
					</navigator>
					</view>
					<view class="helpcoretwo">
						<navigator url="./myteam" open-type="navigate" class="tio">
					我的团队
					</navigator>
					</view>
				</view>
				<view class="helpcore">
					<view class="helpcoreone">
						<navigator url="./invited" open-type="navigate" class="tio">
					<u-icon name="grid" color="white" size="58"></u-icon>
					</navigator>
					</view>
					<view class="helpcoretwo">
						<navigator url="./invited" open-type="navigate" class="tio">
					邀请好友
					</navigator>
					</view>
				</view>
				<view class="helpcore">
					<view class="helpcoreone">
						
						<navigator url="./personaldata" open-type="navigate" class="tio">
					<u-icon name="chat-fill" color="white" size="58"></u-icon>
						</navigator>
					</view>
					<view class="helpcoretwo">
						<navigator url="./personaldata" open-type="navigate" class="tio">
					个人信息
					</navigator>
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
				userinfo:{},
				memberId:0
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
			request({
				methods:'get',
				url:'/mall/app/member',
				
			}).then(data=>{
				console.log('data-----------',data.data.data)
				this.userinfo = data?.data?.data;
			})
					
		},
		methods: {
		 toaddress(userinfo){
			 console.log('userinfo',userinfo.id)
			 uni.redirectTo({
			 	url:`/pages/my/Address?memberId=${userinfo.id}`
			 })
		 },
		  toaddresss(userinfo){
			 console.log('userinfo',userinfo.id)
			 uni.redirectTo({
			 	url:`/pages/my/Address?memberId=${userinfo.id}`
			 })
		 },
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
		height: 1600rpx;
	}
	.setting{
		width: 100%;
		height: 50rpx;
		text-align: right;
	}
	.phone{
		display: flex;
		width: 100%;
		height: 40rpx;
	}
	.idphone{
		color: white;
		font-size: 30rpx;
	}
	.state{
		color: white;
		margin-left: 10%;
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
	.dontknow {
		margin-top: 20rpx;
		color: white;
		font-size: 20rpx;
		display: flex;
		flex-wrap: wrap;
		justify-content: center;
		align-items: center;
		width: 100%;
		height: 400rpx;
		background-color: #3c4457;
		border-radius:10px;
	}
	.record {
		margin-top: 30rpx;
		color: white;
		font-size: 20rpx;
		display: flex;
		flex-wrap: wrap;
		justify-content: center;
		align-items: center;
		width: 100%;
		height: 200rpx;
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
	.helpcore{
		width: 33.33%;
		height: 50%;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}
	.helpcoretwo{
		margin-top: 10rpx;
		font-size: 25rpx;
	}
	
</style>
