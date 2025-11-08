<template>
    <div class="book-details">
        <MoleculesBookCover />
        <MoleculesBookInfo />
    </div>
</template>

<style lang="scss" scoped>
.book-details {
  display: grid;
  grid-template-columns: 250px 1fr;
  grid-gap: 1.4rem;
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
}

</style>