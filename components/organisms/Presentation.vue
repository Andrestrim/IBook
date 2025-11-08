<template>
    <div class="presentation">
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate maiores nam voluptates accusamus placeat a est veritatis eligendi vero ratione suscipit consectetur dicta earum at, soluta blanditiis laboriosam? Odit, molestiae!</p>
        <img src="@/assets/img/presentation.svg" alt="Apresentação do iBook">
    </div>
</template>

<style lang="scss" scoped>
.presentation {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 2rem;
  align-items: center;
  p {
    line-height: 26px;
  }
  img {
    max-width: 100%;
  }
}
</style>