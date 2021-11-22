<template>
  <form
    @submit.prevent="changeBookInfo"
  >
    <input
      v-model="book.author"
      type="text"
      placeholder="Автор"
    >
    <input
      v-model="book.title"
      type="text"
      placeholder="Название"
    >
    <input
      v-model="book.pages"
      type="text"
      placeholder="Количество страниц"
    >
    <input
      v-model="book.year"
      type="text"
      placeholder="Год выпуска"
    >
    <button>
      Применить
    </button>
  </form>
</template>

<script>

export default {
  name: 'BookForm',
  props: {
    bookData: {
      type: Object,
      required: false,
      default: null
    }
  },
  data () {
    return {
      book: {
        title: '',
        author: '',
        pages: '',
        year: ''
      }
    }
  },
  watch: {
    bookData (value, previousValue) {
      if (value && JSON.stringify(value) !== JSON.stringify(previousValue)) {
        this.book = this.bookData
      }
    }
  },
  beforeMount () {
    if (this.bookData) {
      this.book = this.bookData
    }
  },
  methods: {
    changeBookInfo () {
      this.$emit('save', this.book)
    }
  }
}
</script>
