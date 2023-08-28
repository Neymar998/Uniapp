import GjdSwiper from '@/components/GjdSwiper.vue'
import GjdGuess from '@/components/GjdGuess.vue'

declare module 'vue' {
  export interface GlobalComponents {
    GjdSwiper: typeof GjdSwiper
    GjdGuess: typeof GjdGuess
  }
}

// 组件实例类型
export type GjdGuessInstance = InstanceType<typeof GjdGuess>
export type GjdSwiperInstance = InstanceType<typeof GjdSwiper>
