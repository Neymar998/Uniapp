// 获取预付订单
import type { OrderPreResult } from '@/types/order'
import { http } from '@/utils/http'

export const getMemberOrderPreAPI = () => {
  return http<OrderPreResult>({
    url: '/member/order/pre',
    method: 'GET',
  })
}
