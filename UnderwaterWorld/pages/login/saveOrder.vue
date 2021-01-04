<template>
	<view class="ztbj" :style="{ height: this.app_height * 0.5 * 2  + 'rpx' }">
		<u-mask :show="show" @click="show = true">
				<view class="warp">
					<view class="rect" @tap.stop>
						<view style="font-size: 50rpx;margin-top: 10%;display: flex;align-items: center;justify-content: center;">
							¥{{option.orderCommodityNum}}
						</view>
						<view style="display: flex;width: 100%;margin-top: 5%;">
							
						<view style="margin-left: 10%;width: 40%;">
							微信支付
						</view>
						<view style="">
							11054XXXXX@qq.com
						</view>
						</view>
						<u-line color="#CFB53B" length="90%" style="margin-top: 3%;" />
						<view style="display: flex;width: 100%;margin-top: 5%;">
						<view style="margin-left: 10%;width: 60%;">
							付款方式
						</view>
						<view style="">
							微信支付
						</view>
						</view>
						<u-line color="#CFB53B" length="90%" style="margin-top: 3%;" />
						<u-button type="primary" style="margin-top: 40%;">立即付款</u-button>
					</view>
				</view>
			</u-mask>
		<!-- v-for="(item,i) in dataArray"   {{item.addressHarvest}}{{addressName}}{{addressPhone}} -->
		<view class="shouhuoyangshi" >
		收货人:{{userinfo.addressName}}
		</view>
		<view class="shouhuoyangshi" >
		收货地址:{{userinfo.addressHarvest}}
		</view>
		<view class="shouhuoyangshi" >
		收货电话:{{userinfo.addressPhone}}
		</view>
		<view class="">
			<view style="display: flex;align-items: center;justify-content: center;">
			<image :src="option.commodityImg" mode="" class="tortoiseimg"></image><br/>
			</view>
			<view style="font-size: 40rpx;display: flex;align-items: center;justify-content: center;">
			商品:{{option.orderCostPrice}}
			</view>
			<view style="font-size: 40rpx;display: flex;align-items: center;justify-content: center;">
			价格:{{option.orderCommodityNum}}
			</view>
			<view style="font-size: 40rpx;display: flex;align-items: center;justify-content: center;">
			<!-- ID:{{option.memberId}} -->
			</view>
			
		</view>
		<view class="">
			<u-button class="custom-style" @tap='placeorder' :show="show">
				提交订单
				
			</u-button>
			<u-mask :show="show" @click="show = false">
					<view class="warp">
						<view class="rect" @tap.stop>
							<view style="font-size: 50rpx;margin-top: 10%;display: flex;align-items: center;justify-content: center;">
								¥{{option.orderCommodityNum}}
							</view>
							<view style="display: flex;width: 100%;margin-top: 5%;">
								
							<view style="margin-left: 10%;width: 40%;">
								微信支付
							</view>
							<view style="">
								11054XXXXX@qq.com
							</view>
							</view>
							<u-line color="#CFB53B" length="90%" style="margin-top: 3%;" />
							<view style="display: flex;width: 100%;margin-top: 5%;">
							<view style="margin-left: 10%;width: 60%;">
								付款方式
							</view>
							<view style="">
								微信支付
							</view>
							</view>
							<u-line color="#CFB53B" length="90%" style="margin-top: 3%;" />
							<u-button type="primary" style="margin-top: 40%;" @tap='ljfk(data)'>立即付款</u-button>
						</view>
					</view>
				</u-mask>
		</view>
	</view>
</template>

<script>
	import {request} from '../../ajax.js'
	export default {
		data() {
			return {
				title: 'Hello',
				selectdata:{},
				userinfo:{},
				memberId:0,
				orderCommodityImg:'',
				orderCostPrice:'',
				orderName:'',
				show: false,
				ddh:'',
				data:{}
			}
		},
		onLoad: function (option) { //option为object类型，会序列化上个页面传递的参数
				console.log('optionid',option)
				this.option = option;
				const _this = this;
				        uni.getSystemInfo({
				            success: res => {
				                // console.log('手机可用高度:' + res.windowHeight * 2 + 'rpx');
				                _this.app_height = res.windowHeight * 2;
				            }
				        });
				request({
					methods:'get',
					url:'/mall/app/address/findAddress',
					data:{
						memberId:3
					}
					
				}).then(data=>{
					console.log('data',data)
					this.userinfo = data.data;
					console.log("this.userinfo" ,this.userinfo);
				})
		    },
			methods:{
				ljfk(data){
					console.log('test',data.data.data);
					uni.redirectTo({
							url:`/pages/index/dingdan?ddh=${data.data.data}`
					})
				},
				placeorder(){
							this.show = true;
				            uni.showLoading({
				                title:"加载中..."
				            });
							request({
								methods:'POST',
								url:'/mall/app/order/saveOrder',
								data:{
									orderCommodityImg:this.option.commodityImg,
									orderCostPrice:this.option.orderCommodityNum,
									orderName:this.option.orderCostPrice
								}
							}).then(data=>{
								console.log(data)
								this.data = data;
									// uni.switchTab({
									//     url: '/pages/index/index'
									// });
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
	.custom-style {
			color: #606266;
			width: 400rpx;
			text-align: center;
			/* float:right; */
				position: fixed;
			    left: 0;
			    right: 0;
			    bottom: 10px;
		}
		.ztbj{
			width: 100%;
			height: 100%;
			background-color: #3D4358;
			color: white;
		}
		.shouhuoyangshi{
			width: 100%;
			height: 5%;
			font-size: 30rpx;
			margin-left: 15%;
		}
			.warp {
				display: flex;
				align-items: center;
				justify-content: center;
				height: 100%;
			}
		
			.rect {
				width: 100%;
				height: 60%;
				background-color: #fff;
				color: #000000;
				/* text-align: center; */
				/* float:right; */
					position: fixed;
				    left: 0;
				    right: 0;
				    bottom: 10px;
			}
</style>
