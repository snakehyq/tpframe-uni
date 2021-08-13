<template>
	<view class="tpf-scroll-wrap">
		<scroll-view ref="tabbar1" id="tab-bar" class="tab-bar" :scroll="false" :scroll-x="true" :show-scrollbar="false"
		  :scroll-into-view="scrollInto">
		  <view style="flex-direction: column;">
		    <view style="flex-direction: row;">
		      <view class="uni-tab-item" v-for="(tab,index) in tabList" :key="tab.id" :id="tab.id" :ref="'tabitem'+index"
		        :data-id="index" :data-current="index" @click="ontabtap">
		        <text class="uni-tab-item-title" :class="tabIndex==index ? 'uni-tab-item-title-active' : ''">{{tab.name}}</text>
		      </view>
		    </view>
		    <view class="scroll-view-indicator">
		      <view ref="underline" class="scroll-view-underline" :class="isTap ? 'scroll-view-animation':''" :style="{left: indicatorLineLeft + 'px', width: indicatorLineWidth + 'px'}"></view>
		    </view>
		  </view>
		</scroll-view>
		<view class="tab-bar-line"></view>
	</view>
</template>

<script>
export default{
	props:{
		tabList:{
			type:Array,
			defaut(){
				return []
			}
		},
		indicatorLineLeft:{
			type:Number,
			default:0
		},
		indicatorLineWidth:{
			type:Number,
			default:0
		},
		isTap:{
			type:Boolean,
			default:false
		}
	},
	data(){
		return {
			scrollInto: ""
		}
	}
}
</script>

<style lang="scss">
.tab-bar {
    /* #ifdef APP-PLUS */
    width: 750rpx;
    /* #endif */
    height: 42px;
    flex-direction: row;
    /* #ifndef APP-PLUS */
    white-space: nowrap;
    /* #endif */
  }


  .tab-bar ::-webkit-scrollbar {
    display: none;
    width: 0 !important;
    height: 0 !important;
    -webkit-appearance: none;
    background: transparent;
  }
  .scroll-view-indicator {
    position: relative;
    height: 2px;
    background-color: transparent;
  }
  
  .scroll-view-underline {
    position: absolute;
    top: 0;
    bottom: 0;
    width: 0;
    background-color: #007AFF;
  }
  
  .scroll-view-animation {
    transition-duration: 0.2s;
    transition-property: left;
  }
  .tab-bar-line {
    height: 1px;
    background-color: #cccccc;
  }
</style>
