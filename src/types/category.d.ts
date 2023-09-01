import type { GoodsItem } from './global'

/** 一级分类项 */
export type CategoryTopItem = {
  children: CategoryChildItem[]
  id: string
  imageBanners: string[]
  name: string
  picture: string
}

/** 二级分类项 */
export type CategoryChildItem = {
  goods: GoodsItem[]
  id: string
  name: string
  picture: string
}
