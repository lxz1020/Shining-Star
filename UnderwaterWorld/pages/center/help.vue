<template>
	<view class="content">
		<view class="text-area">
			<view class="helpcore">
				<h3>海底世界&nbsp;操作流程:</h3>
				1、扫推荐人二维码成功注册系统赠送您20饲料。<br/><br/>
				2、在收款方式栏，提交同一实名的支付宝、微信收款码、
				银行卡账号及对应的真实姓名、电话！（至少提交两种收款
				方式，以免影响售出）。<br/><br/>
				3、在实名认证栏，填上与收款方式相同的真实姓名及相符的身份证
				号码，等待系统审核！<br/><br/>
				4、饲料获得方式：（1）向推荐人购买！（账号只需首次激活）
				（2）向平台直接购买（账号仅首次激活）。<br/><br/>
				5、区块动物需要提前预约，预约需消耗饲料，到抢购时间然后点击抢购
				，抢购未成功的话，饲料会退回到积分账户！<br/><br/>
				6、抢购成功后到都能在记录里查看，并按照转租方提供的收款码付款，
				上传付款凭证，等待确认即可，付款时间为2小时！（注意：超过2小时未付款的
				，系统将冻结租赁方账户，冻结的账户在次日早上10点之前联系客服解冻，
				可以正常交易之后将永久锁定，请大家规范操作）<br/><br/>
				7、当上传的凭证为虚假截图时，转租方可以发起申诉，等待客服审核，一旦核实
				将冻结租赁方账户，转租方未成功转租的动物，将在第一天的同一时间继续转租！
				<br/><br/>
				8、每天零点系统自动结算您租赁的动物收益，当动物租赁合同到期，系统会自动放在
				区块动物园转租，当天到期的动物会显示在待转租中！<br/><br/>
				9、当您领养的动物价值超过您租赁时段的最高值时，自动升级到对应价值动物
				时间转租。<br/><br/>
				<text style="align-items: center;justify-content: center;">有更多需要请联系24小时在线客服</text>
			</view>
		</view>
		
	</view>
</template>

<script>
	
	export default {
		data() {
			return {
				title: 'Hello'
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
	}
	
	.text-area {
		font-size: 20rpx;
		display: flex;
		width: 100%;
		height: 100%;
		border-radius:10px;
	}
	
	.helpcore{
		font-size: 30rpx;
	}
	
	
</style>
