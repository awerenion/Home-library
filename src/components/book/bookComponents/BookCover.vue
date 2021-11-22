<template>
  <div class="book-cover">
    <div class="book-items">
      <span class="book-author"> {{ bookAuthor }} </span>
      <span class="book-title"> {{ bookTitle }} </span>
    </div>
  </div>
</template>

<script>
import bookComponentMixin from '@/mixins/bookComponentsMixin'

export default {
  name: 'BookCover',
  mixins: [bookComponentMixin]
}
</script>

<style scoped>
.book-cover {
  margin: 15px;
  width: 160px;
  height: 275px;
  background: #d95448;
  color: white;
}

.book-items {
  width: 100%;
  height: 200px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
}
</style>
