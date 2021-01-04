<template>
	<view class="content"  >
		
		<view class="text-area">
				<image src="../../static/cczxtitle.jpg" mode=""
				class="underwaterimg"></image>
				
		</view>
		<view class="">
			<u-notice-bar mode="horizontal" bg-color="#2C3145" :list="list"></u-notice-bar>
		</view>
		<view  style="display: flex;width: 100%;flex-wrap: wrap;">
			<view class="record" v-for="(item,i) in dataArray">
				<view class="tortoise">
				<image :src="item.commodityImg" mode="" class="tortoiseimg"></image><br/>
				</view>
				<view class="animal">
					<view class="" v-model="orderCommodityNum">
						商品名称:{{item.commodityName}}
					</view>
				</view>
				<!-- <view class="animal">
					<view class="">
						最高价格:{{item.commodityLargePrice}}
					</view>
					
				</view> -->
				<view class="animal">
					<view class="" v-model="orderCostPrice">
						价格:{{item.commodityAdjPrice}}
					</view>
					
				</view>
				
				<!-- <view class="animal">
					<view class="" v-model="memberId">
						商品时间段:
					</view>
				</view>
				<view class="animal">
					<view class="">
						{{item.commoditySatrtTime}}
					</view>
				</view>
				
				<view class="animal">
					<view class="">
						商品收益:{{item.commodityIncome}}
					</view>
				</view> -->
				<view class="animal">
					<u-button shape="circle" :disabled="false" size="mini"
					 @tap='toshop(item)' 
					
					>{{item.commodityType===0?'可购买':"不可购买"}} </u-button>
					<!-- {{item.commodityType===0?'可购买':"不可购买"}} -->
				</view>
				
				<!-- <view class="animal" v-else={{item.commodityType===1}}>
					<u-button shape="circle" :disabled="true" size="mini">{{item.commodityType===0?'可购买':"不可购买"}}</u-button>
				</view> -->
				
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
				dataArray:[],
				seletitle:{},
				orderCommodityNum:0,
				orderCostPrice:0,
				memberId:0,
				commodityImg:'',
				list: [
									'寒雨连江夜入吴',
									'平明送客楚山孤',
									'洛阳亲友如相问',
									'一片冰心在玉壶'
								]
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
				url:'/mall/app/selectCommodity',
				
			}).then(data=>{
				console.log('data',data)
				this.dataArray = data?.data?.data;
			})
			
			request({
				methods:'get',
				url:'/mall/app/announcement/findAnnouncement',
				
			}).then(data=>{
				console.log('seletitle',data)
				this.seletitle = data?.data?.data;
			})
		
		},
		methods: {
			toshop(item){
			            uni.showLoading({
			                title:"加载中..."
			            });
						console.log('item',item)
						uni.redirectTo({
							url:`/pages/index/saveOrder?orderCommodityNum=${item.commodityAdjPrice}
							&orderCostPrice=${item.commodityName}
							&memberId=${item.id}&commodityImg=${item.commodityImg}`
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
		width: 48%;
		height: 700rpx;
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
	
</style>
