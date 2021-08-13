<template>
	<view class="swiper-wrap">
		<swiper class="swiper" :indicator-dots="indicatorDots" :indicator-color="indicatorColor" :indicator-active-color="indicatorActiveColor"
		:autoplay="autoplay" :interval="interval" :duration="duration" :circular="circular">
			<swiper-item v-for="(item,index) of banner" :key="item.id">
				<view class="swiper-item uni-bg-red"><image class="banner-item" mode="widthFix" :src="item.pic"></image></view>
			</swiper-item>
		</swiper>
	</view>
</template>

<script>
export default{
	props:{
		banner:{
			type:Array,
			default(){
				return []
			}
		},
		circular:{
			type:Boolean,
			default:true
		},
		indicatorDots:{
			type:Boolean,
			default:true
		},
		indicatorColor:{
			type:String,
			default:"#FFF"
		},
		indicatorActiveColor:{
			type:String,
			default:"#FFF"
		},
		autoplay:{
			type:Boolean,
			default:true
		},
		interval:{
			type:Number,
			default:5000,
		},
		duration:{
			type:Number,
			default:500
		}
	}
}
</script>

<style lang="scss">
.swiper{
	height: 320rpx;
}
.banner-item{
	width: 100%;
}
</style>
