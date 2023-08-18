import { createPinia } from 'pinia'
import persist from 'pinia-plugin-persistedstate'

// 创建pinia实例
const pinia = createPinia()
pinia.use(persist)

// 导出pinia实例，给main使用
export default pinia

//模块统一导出
export * from './modules/member'
