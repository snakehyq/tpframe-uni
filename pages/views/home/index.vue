<template>
	<view class="home">
		<!-- 轮播图区域 -->
		 <swiper
		   class="swiper"
		   :indicator-dots="indicatorDots"
		   :autoplay="autoplay"
		   :interval="interval"
		   :duration="duration"
		   indicator-color="#fff"
		   indicator-active-color="#f00"
		   >
			<swiper-item>
				<view class="swiper-item uni-bg-red">
					<image class="img" src="@/static/index/banner.jpg" mode="widthFix"/>
				</view>
			</swiper-item>
			<swiper-item>
				<image class="img" src="@/static/index/news-demo.jpg" mode="widthFix"/>
			</swiper-item>
		</swiper>
		<!-- 宫格区域 -->
		<view class="grid">
			<view class="grid-item">
				<image class="img" src="@/static/index/about.png"></image>
				<text class="text">公司简历</text>
			</view>
			<view class="grid-item">
				<image class="img" src="@/static/index/case.png"></image>
				<text class="text">公司案例</text>
			</view>
			<view class="grid-item">
				<image class="img" src="@/static/index/news.png"></image>
				<text class="text">新闻中心</text>
			</view>
			<view class="grid-item">
				<image class="img" src="@/static/index/service.png"></image>
				<text class="text">服务范围</text>
			</view>
			<view class="grid-item">
				<image class="img" src="@/static/index/photo.png"></image>
				<text class="text">相册展示</text>
			</view>
			<view class="grid-item">
				<image class="img" src="@/static/index/video.png"></image>
				<text class="text">视频展示</text>
			</view>
			<view class="grid-item">
				<image class="img" src="@/static/index/message.png"></image>
				<text class="text">在线留言</text>
			</view>
			<view class="grid-item">
				<image class="img" src="@/static/index/photo.png"></image>
				<text class="text">电话咨询</text>
			</view>
		</view>
		<!-- 案例区域 -->
		<view class="case">
			<view class="case-top">
				<view class="title">案例展示</view>
				<view class="roter">></view>
			</view>
			<view class="case-center">
				<view class="case-item">
					<image  class="img"src="@/static/index/photo-demo.jpg" mode="widthFix"/>
					<text>案例1</text>
				</view>
				<view class="case-item">
					<image  class="img"src="@/static/index/case-demo.jpg" mode="widthFix"/>
					<text>案例2</text>
				</view>
				<view class="case-item">
					<image  class="img"src="@/static/index/case-demo.jpg" mode="widthFix"/>
					<text>案例3</text>
				</view>
				<view class="case-item">
					<image  class="img"src="@/static/index/case-demo.jpg" mode="widthFix"/>
					<text>案例4</text>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				indicatorDots: true,
				autoplay: true,
				interval: 3000,
				duration: 500
			}
		},
		onLoad() {

		},
		methods: {

		}
	}
</script>

<style lang="scss" scoped>
.home {
	.img {
		width: 100%;
	}
	.grid {
		display: flex;
		flex-wrap: wrap;
		margin: 15rpx 0rpx;
		background-color: $tpf-bg-color-white;
		.grid-item {
			width: 25%;
			display: flex;
			justify-content: center;
			align-items: center;
			flex-direction: column;
			margin-top: 10rpx;
			margin-bottom: 20rpx;
			.img {
				width: 100rpx;
				height: 100rpx;
				padding-bottom: 8rpx;
			}
			.text {
				font-size: $tpf-font-size-lg;
			}
		}
	}
	.case {
		background-color: $tpf-bg-color-white;
		margin-bottom: 15rpx;
		.case-top {
			display: flex;
			justify-content: space-between;
			align-items: center;
			padding: 0rpx 15rpx;
			height: 80rpx;
			.title {
				padding-left: 20rpx;
				border-left: 2px solid $tpf-bg-color-orange;
			}
			.roter {
				font-size: $tpf-font-size-hg;
				color: #808080;
			}
		}
		.case-center {
			display: flex;
			flex-wrap: wrap;
			justify-content: space-around;
			.case-item {
				width: 49%;
				text-align: center;
				.img {
					margin: 10rpx 0;
					width: 100%;
				}
			}
		}
	}
}
</style>
