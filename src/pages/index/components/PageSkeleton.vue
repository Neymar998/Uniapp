<template name="skeleton">
  <view is="components/GjdSwiper">
    <view class="carousel GjdSwiper--carousel">
      <swiper
        circular="true"
        interval="3000"
        current="0"
        autoplay="false"
      ></swiper>
      <view class="indicator GjdSwiper--indicator">
        <text class="dot GjdSwiper--dot"></text>
        <text class="dot GjdSwiper--dot active GjdSwiper--active"></text>
        <text class="dot GjdSwiper--dot"></text>
        <text class="dot GjdSwiper--dot"></text>
        <text class="dot GjdSwiper--dot"></text>
      </view>
    </view>
  </view>
  <view is="pages/index/components/CategoryPanel">
    <view class="category CategoryPanel--category">
      <navigator
        class="category-item CategoryPanel--category-item"
        hover-class="none"
      >
        <image class="icon CategoryPanel--icon sk-image"></image>
        <text
          class="text CategoryPanel--text sk-transparent sk-text-14-2857-473 sk-text"
          >居家</text
        >
      </navigator>
      <navigator
        class="category-item CategoryPanel--category-item"
        hover-class="none"
      >
        <image class="icon CategoryPanel--icon sk-image"></image>
        <text
          class="text CategoryPanel--text sk-transparent sk-text-14-2857-175 sk-text"
          >锦鲤</text
        >
      </navigator>
      <navigator
        class="category-item CategoryPanel--category-item"
        hover-class="none"
      >
        <image class="icon CategoryPanel--icon sk-image"></image>
        <text
          class="text CategoryPanel--text sk-transparent sk-text-14-2857-199 sk-text"
          >服饰</text
        >
      </navigator>
      <navigator
        class="category-item CategoryPanel--category-item"
        hover-class="none"
      >
        <image class="icon CategoryPanel--icon sk-image"></image>
        <text
          class="text CategoryPanel--text sk-transparent sk-text-14-2857-622 sk-text"
          >母婴</text
        >
      </navigator>
      <navigator
        class="category-item CategoryPanel--category-item"
        hover-class="none"
      >
        <image class="icon CategoryPanel--icon sk-image"></image>
        <text
          class="text CategoryPanel--text sk-transparent sk-text-14-2857-769 sk-text"
          >个护</text
        >
      </navigator>
      <navigator
        class="category-item CategoryPanel--category-item"
        hover-class="none"
      >
        <image class="icon CategoryPanel--icon sk-image"></image>
        <text
          class="text CategoryPanel--text sk-transparent sk-text-14-2857-839 sk-text"
          >严选</text
        >
      </navigator>
      <navigator
        class="category-item CategoryPanel--category-item"
        hover-class="none"
      >
        <image class="icon CategoryPanel--icon sk-image"></image>
        <text
          class="text CategoryPanel--text sk-transparent sk-text-14-2857-256 sk-text"
          >数码</text
        >
      </navigator>
      <navigator
        class="category-item CategoryPanel--category-item"
        hover-class="none"
      >
        <image class="icon CategoryPanel--icon sk-image"></image>
        <text
          class="text CategoryPanel--text sk-transparent sk-text-14-2857-12 sk-text"
          >运动</text
        >
      </navigator>
      <navigator
        class="category-item CategoryPanel--category-item"
        hover-class="none"
      >
        <image class="icon CategoryPanel--icon sk-image"></image>
        <text
          class="text CategoryPanel--text sk-transparent sk-text-14-2857-144 sk-text"
          >杂项</text
        >
      </navigator>
      <navigator
        class="category-item CategoryPanel--category-item"
        hover-class="none"
      >
        <image class="icon CategoryPanel--icon sk-image"></image>
        <text
          class="text CategoryPanel--text sk-transparent sk-text-14-2857-836 sk-text"
          >品牌</text
        >
      </navigator>
    </view>
  </view>
  <view is="pages/index/components/HotPanel">
    <view class="panel HotPanel--panel hot HotPanel--hot">
      <view class="item HotPanel--item">
        <view class="title HotPanel--title">
          <text
            class="title-text HotPanel--title-text sk-transparent sk-text-14-2857-236 sk-text"
            >特惠推荐</text
          >
          <text
            class="title-desc HotPanel--title-desc sk-transparent sk-text-14-2857-430 sk-text"
            >精选全攻略</text
          >
        </view>
        <navigator class="cards HotPanel--cards" hover-class="none">
          <image
            class="image HotPanel--image sk-image"
            mode="aspectFit"
          ></image>
          <image
            class="image HotPanel--image sk-image"
            mode="aspectFit"
          ></image>
        </navigator>
      </view>
      <view class="item HotPanel--item">
        <view class="title HotPanel--title">
          <text
            class="title-text HotPanel--title-text sk-transparent sk-text-14-2857-807 sk-text"
            >爆款推荐</text
          >
          <text
            class="title-desc HotPanel--title-desc sk-transparent sk-text-14-2857-847 sk-text"
            >最受欢迎</text
          >
        </view>
        <navigator class="cards HotPanel--cards" hover-class="none">
          <image
            class="image HotPanel--image sk-image"
            mode="aspectFit"
          ></image>
          <image
            class="image HotPanel--image sk-image"
            mode="aspectFit"
          ></image>
        </navigator>
      </view>
      <view class="item HotPanel--item">
        <view class="title HotPanel--title">
          <text
            class="title-text HotPanel--title-text sk-transparent sk-text-14-2857-596 sk-text"
            >一站买全</text
          >
          <text
            class="title-desc HotPanel--title-desc sk-transparent sk-text-14-2857-313 sk-text"
            >精心优选</text
          >
        </view>
        <navigator class="cards HotPanel--cards" hover-class="none">
          <image
            class="image HotPanel--image sk-image"
            mode="aspectFit"
          ></image>
          <image
            class="image HotPanel--image sk-image"
            mode="aspectFit"
          ></image>
        </navigator>
      </view>
      <view class="item HotPanel--item">
        <view class="title HotPanel--title">
          <text
            class="title-text HotPanel--title-text sk-transparent sk-text-14-2857-511 sk-text"
            >新鲜好物</text
          >
          <text
            class="title-desc HotPanel--title-desc sk-transparent sk-text-14-2857-989 sk-text"
            >生活加分项</text
          >
        </view>
        <navigator class="cards HotPanel--cards" hover-class="none">
          <image
            class="image HotPanel--image sk-image"
            mode="aspectFit"
          ></image>
          <image
            class="image HotPanel--image sk-image"
            mode="aspectFit"
          ></image>
        </navigator>
      </view>
    </view>
  </view>
  <view is="components/GjdGuess" class="r">
    <view class="caption GjdGuess--caption">
      <text
        class="text GjdGuess--text sk-transparent sk-text-0-0000-504 sk-text sk-pseudo sk-pseudo-circle"
        >猜你喜欢</text
      >
    </view>
  </view>
</template>
<style>
.sk-transparent {
  color: transparent !important;
}

.sk-text-6-2500-806 {
  background-image: linear-gradient(
    transparent 6.25%,
    #eeeeee 0%,
    #eeeeee 93.75%,
    transparent 0%
  ) !important;
  background-size: 100% 27.907rpx;
  position: relative !important;
}

.sk-text {
  background-origin: content-box !important;
  background-clip: content-box !important;
  background-color: transparent !important;
  color: transparent !important;
  background-repeat: repeat-y !important;
}

.sk-text-14-2857-10 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 39.0698rpx;
  position: relative !important;
}

.sk-text-14-2857-473 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 34.186rpx;
  position: relative !important;
}

.sk-text-14-2857-175 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 34.186rpx;
  position: relative !important;
}

.sk-text-14-2857-199 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 34.186rpx;
  position: relative !important;
}

.sk-text-14-2857-622 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 34.186rpx;
  position: relative !important;
}

.sk-text-14-2857-769 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 34.186rpx;
  position: relative !important;
}

.sk-text-14-2857-839 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 34.186rpx;
  position: relative !important;
}

.sk-text-14-2857-256 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 34.186rpx;
  position: relative !important;
}

.sk-text-14-2857-12 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 34.186rpx;
  position: relative !important;
}

.sk-text-14-2857-144 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 34.186rpx;
  position: relative !important;
}

.sk-text-14-2857-836 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 34.186rpx;
  position: relative !important;
}

.sk-text-14-2857-236 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 43.9535rpx;
  position: relative !important;
}

.sk-text-14-2857-430 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 31.7442rpx;
  position: relative !important;
}

.sk-text-14-2857-807 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 43.9535rpx;
  position: relative !important;
}

.sk-text-14-2857-847 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 31.7442rpx;
  position: relative !important;
}

.sk-text-14-2857-596 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 43.9535rpx;
  position: relative !important;
}

.sk-text-14-2857-313 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 31.7442rpx;
  position: relative !important;
}

.sk-text-14-2857-511 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 43.9535rpx;
  position: relative !important;
}

.sk-text-14-2857-989 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 31.7442rpx;
  position: relative !important;
}

.sk-text-0-0000-504 {
  background-image: linear-gradient(
    transparent 0%,
    #eeeeee 0%,
    #eeeeee 100%,
    transparent 0%
  ) !important;
  background-size: 100% 31.3953rpx;
  position: relative !important;
}

.sk-image {
  background: #efefef !important;
}

.sk-pseudo::before,
.sk-pseudo::after {
  background: #efefef !important;
  background-image: none !important;
  color: transparent !important;
  border-color: transparent !important;
}

.sk-pseudo-rect::before,
.sk-pseudo-rect::after {
  border-radius: 0 !important;
}

.sk-pseudo-circle::before,
.sk-pseudo-circle::after {
  border-radius: 50% !important;
}

.sk-container {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  background-color: transparent;
}
</style>
