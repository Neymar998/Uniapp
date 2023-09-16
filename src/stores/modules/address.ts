import type { AddressItem } from '@/types/address'
import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useAddressStore = defineStore('address', () => {
  const selectAddress = ref<AddressItem>()
  const changeselectAddress = (address: AddressItem) => {
    selectAddress.value = address
  }
  return {
    selectAddress,
    changeselectAddress,
  }
})
