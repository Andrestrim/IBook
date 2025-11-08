<template >
    <div class="book-categories">
        <AtomsChip v-for="category in book?.categories" :key="category.id" :text="category.name" />
    </div>
</template>

<script setup lang="ts">
    const bookStore = useBookStore()
    const book = computed(()=>bookStore.book)
</script>

<style lang="scss" scoped>
.book-categories {
  display: grid;
  grid-auto-flow: column;
  grid-auto-columns: max-content;
  grid-gap: 0.5rem;
}

</style>