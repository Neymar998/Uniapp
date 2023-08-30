import type { PageResult, GoodsItem } from './global'

export type SubTypeItem = {
  id: string
  title: string
  goodsItem: PageResult<GoodsItem>
}

export type HotResult = {
  id: string
  bannerPicture: string
  title: string
  subTypes: SubTypeItem[]
}
