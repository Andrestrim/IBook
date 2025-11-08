import {useBookStore} from '@/store/BooksStore'


export default defineNuxtPlugin((nuxtApp) => {
    nuxtApp.hook('app:created', () => {
        const BookStore = useBookStore()

        BookStore.indexBooks()
    })
  })