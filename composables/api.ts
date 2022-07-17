import { acceptHMRUpdate, defineStore } from 'pinia'
import type { IApiInfo } from '~~/types/data'

export const useApiStore = defineStore('api', () => {
  const apiList = ref<IApiInfo[]>([])
  const searchName = ref('')
  const list = computed(() => { return apiList.value?.filter(data => data.name.match(new RegExp(searchName.value, 'i'))) ?? [] })
  const count = computed(() => { return apiList.value.length })

  return {
    searchName,
    apiList,
    list,
    count,
  }
})

if (import.meta.hot)
  import.meta.hot.accept(acceptHMRUpdate(useApiStore, import.meta.hot))
