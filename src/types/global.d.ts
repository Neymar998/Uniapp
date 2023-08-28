//分页类型
export type PageResult<T> = {
  items: T[]
  counts: number
  page: number
  pages: number
  pageSize: number
}
// 通用分页参数类型
export type PageParams = {
  page?: number
  pageSize?: number
}
