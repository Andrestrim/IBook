<template >
    <div class="book-cover">
        <img :src="book?.cover" :alt="`Capa do livro ${book?.title}`" />

        <nuxt-link class="read-book" :to="`/book/${book?.id}/read`">Ler livro</nuxt-link>
    </div>
</template>

<script setup lang="ts">
    const bookStore = useBookStore()
    const book = computed(()=>bookStore.book)
</script>

<style lang="scss" scoped>
.book-cover {
  img {
    width: 100%;
  }
  .read-book {
    background: #292929;
    color: #f7f7f7;
    text-transform: uppercase;
    font-weight: 700;
    width: 100%;
    height: 42px;
    font-size: 1.1rem;
    display: grid;
    justify-content: center;
    align-items: center;
    transition: all 300ms ease;
    &:hover {
      opacity: 0.89;
    }
  }
}

</style>