import { useMemberStore } from '@/stores'
/**
 * 添加拦截器：
 *    拦截request请求
 *    拦截 uploadFile文件上传
 *
 * TODO:
 *    1.非http开头需拼接地址
 *    2.请求超时
 *    3.添加小程序端请求头标识
 *    4.添加token请求头标识
 */

const baseURL = 'https://pcapi-xiaotuxian-front-devtest.itheima.net'

const httpInterceptor = {
  invoke(options: UniApp.RequestOptions) {
    // 1.非http开头需拼接地址
    if (!options.url.startsWith('http')) {
      options.url = baseURL + options.url
    }
    //2.请求超时
    options.timeout = 10000
    //3.添加小程序端请求头标识
    options.header = {
      ...options.header,
      'source-client': 'miniapp',
    }
    //4.添加token请求头标识
    const memberStore = useMemberStore()
    const token = memberStore.profile?.token
    if (token) {
      options.header.Authorization = token
    }
  },
}
uni.addInterceptor('request', httpInterceptor)
uni.addInterceptor('uploadFile', httpInterceptor)

// 封装Promise请求函数
interface Data<T> {
  code: string
  msg: string
  result: T
}

const http = <T>(options: UniApp.RequestOptions) => {
  //返回Promise对象
  return new Promise<Data<T>>((resolve, reject) => {
    uni.request({
      ...options,
      success(res) {
        if (res.statusCode >= 200 && res.statusCode < 300) {
          resolve(res.data as Data<T>)
        } else if (res.statusCode == 401) {
          // 401 清理用户信息，跳转登录页面
          const memberStore = useMemberStore()
          memberStore.clearProfile()
          uni.navigateTo({ url: '/pages/login/login' })
          reject(res)
        } else {
          uni.showToast({
            icon: 'none',
            title: (res.data as Data<T>).msg || '请求失败',
          })
          reject(res)
        }
      },
      fail(err) {
        uni.showToast({
          icon: 'none',
          title: '网络错误，请稍后再试',
        })
        reject(err)
      },
    })
  })
}
