import type { BannerItem } from '@/types/home'
import { http } from '@/utils/http'

// 首页轮播图，distributionSite: 1首页，2分类商品页
export const getHomeBannerAPI = (distributionSite = 1) => {
  return http<BannerItem[]>({
    method: 'GET',
    url: '/home/banner',
    data: {
      distributionSite,
    },
  })
}
