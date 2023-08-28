//分页类型
export type PageResult<T> = {
  items: T[]
  counts: number
  page: number
  pages: number
  pageSize: number
}
