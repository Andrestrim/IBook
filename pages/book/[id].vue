<template>
  <div v-if="bookStore.book">
    <BookDetailsTemplate />
  </div>
</template>

<script setup lang="ts">
import BookDetailsTemplate from "~/components/templates/BookDetailsTemplate.vue"

definePageMeta({
  layout:"book-layout",
})

const route = useRoute()
const bookStore = useBookStore()
await bookStore.showBook(Number(route.params.id))

useHead({
  title: bookStore.book?.title,
  meta: [
    {
      name:'description',
      content: bookStore.book?.description
    }
  ]
})

</script>