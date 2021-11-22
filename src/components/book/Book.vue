<template>
  <div class="book">
    <book-spine
      v-if="!isActive"
      class="book"
      :book-author="bookData.author"
      :book-title="bookData.title"
      @click.native="selectBook"
    />
    <book-cover
      v-if="isActive"
      class="book active"
      :book-author="bookData.author"
      :book-title="bookData.title"
    />
  </div>
</template>

<script>
import BookCover from './bookComponents/BookCover'
import BookSpine from './bookComponents/BookSpine'

export default {
  name: 'Book',
  components: {
    BookSpine,
    BookCover
  },
  props: {
    bookData: {
      type: Object,
      required: true
    }
  },
  computed: {
    isActive () {
      return this.$store.getters.selectedBook === this.bookData
    }
  },
  methods: {
    selectBook () {
      this.$store.dispatch('bookSelect', this.bookData)
    }
  }
}
</script>

<style scoped>

</style>
