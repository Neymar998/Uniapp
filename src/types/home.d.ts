import type { GoodsItem } from './global'

export type BannerItem = {
  hrefUrl: string
  id: string
  imgUrl: string
  type: number
}
export type CategoryItem = {
  icon: string
  id: string
  name: string
}
export type HotItem = {
  alt: string
  id: string
  pictures: string[]
  target: string
  title: string
  type: string
}
export type GuessItem = GoodsItem
