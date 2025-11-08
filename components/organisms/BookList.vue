<template>
  <div class="book-list">
    <MoleculesBookCard v-for="book in books" :key="book.id" :book="book" />
  </div>
</template>

<script setup lang="ts">
import { storeToRefs } from "pinia";
import { useBookStore } from "~/store/BooksStore";

const BookStore = useBookStore();
const { books } = storeToRefs(BookStore);

</script>

<style lang="scss" scoped>
.book-list {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  grid-template-rows: auto;
  grid-gap: 2rem;
}
</style>
