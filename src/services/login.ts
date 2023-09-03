import { http } from '@/utils/http'

type LoginParams = {
  code: string
  encryptedData: string
  iv: string
}

// 小程序登录
export const postLogininWeiXinAPI = (data: LoginParams) => {
  return http({
    method: 'POST',
    url: '/login/weixin',
    data,
  })
}

// 小程序登录 内测
export const postLogininWeiXinSimpleAPI = (phoneNumber: string) => {
  return http({
    method: 'POST',
    url: '/login/weixin/simple',
    data: {
      phoneNumber,
    },
  })
}
