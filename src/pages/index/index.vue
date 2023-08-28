<script setup lang="ts">
import { getHomeBannerAPI, getHomeCategoryAPI } from '@/services/home'
import CustomNavbar from './components/CustomNavbar.vue'
import GjdSwiper from '@/components/GjdSwiper.vue'
import { onLoad } from '@dcloudio/uni-app'
import { ref } from 'vue'
import type { BannerItem } from '@/types/home'
import CategoryPanel from './components/CategoryPanel.vue'

const bannerList = ref<BannerItem[]>([])

const getHomeBannerData = async () => {
  const res = await getHomeBannerAPI()
  bannerList.value = res.result
}
const getHomeCategoryData = async () => {
  const res = await getHomeCategoryAPI()
}
onLoad(() => {
  getHomeBannerData()
  getHomeCategoryData()
})
</script>

<template>
  <CustomNavbar />
  <GjdSwiper :list="bannerList" />
  <CategoryPanel />
  <view class="index">index</view>
</template>

<style lang="scss">
//
page {
  background-color: #f7f7f7;
}
</style>
