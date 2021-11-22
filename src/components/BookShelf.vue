<template>
  <div>
    <div class="bookshelf">
      <div
        v-for="book in booksList"
        :key="book.id"
        class="book-wrapper"
      >
        <book
          :book-data="book"
        />
      </div>
    </div>
  </div>
</template>

<script>
import Book from '@/components/book/Book'

export default {
  name: 'BookShelf',
  components: {
    Book
  },
  props: {
    booksList: {
      type: Array,
      required: true,
      default: () => []
    }
  }
}
</script>

<style scoped>
.bookshelf {
  display: flex;
  position: relative;
  justify-content: space-around;
  width: 100%;
}

.bookshelf::after {
  content: '';
  border: 2px solid rgb(126, 47, 47);
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
}
</style>
