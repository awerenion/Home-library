<template>
  <div>
    <div
      v-if="isBookInfo"
      class="book-info"
    >
      <div class="book-info__about">
        <span class="book-info__author">{{ book.author }} </span>
        <span class="book-info__title">{{ book.title }} </span>
        <div class="book-info__dates">
          <span>{{ book.pages }} стр. </span>
          <span>{{ book.year }}г. </span>
        </div>
      </div>
      <div class="book-info__activities">
        <div>
          <button
            class="book-info__change"
            @click="isShow = !isShow"
          >
            Редактировать информацию о книге
          </button>
          <book-form
            v-if="isShow"
            :book-data="book"
            @save="editBook"
          />
        </div>
        <div>
          <button
            v-if="!isShow"
            class="delete-book"
            @click="deleteBook"
          >
            Убрать книгу с полки
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import BookForm from './BookForm.vue'

export default {
  name: 'BookInfo',
  components: {
    BookForm
  },
  data () {
    return {
      isShow: false
    }
  },
  computed: {
    ...mapGetters({
      book: 'selectedBook'
    }),
    isBookInfo () {
      return !!this.book
    }
  },
  methods: {
    deleteBook () {
      if (confirm('Do you really want to delete?')) {
        this.$store.dispatch('removeBook', this.book.id)
        this.$store.dispatch('bookSelectClear')
      }
    },
    editBook (book) {
      this.isShow = false
      this.$store.dispatch('editBook', book)
    }
  }
}
</script>

<style scoped>
  .book-info {
    width: 350px;
  }

  .book-info__about {
    background: #d95448;
    color: white;
    height: 450px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    margin-bottom: 15px;
  }

  .book-info__activities {
    display: flex;
    justify-content: space-around;
  }

  .book-info__dates {
    display: flex;
    justify-content: space-around;
    font-size: 14px;
  }

  .book-info__change {
    border: none;
    padding: 15px;
    border: 1px solid #d95448;
    background: #F0ECE0;
    margin-right: 10px;
    margin-bottom: 10px;
  }

  .delete-book {
    border: none;
    padding: 15px;
    border: 1px solid #d95448;
    background: #F0ECE0;
  }

  .book-info__author {
    letter-spacing: 1.4px;
    font-size: 20px;
    text-transform: uppercase;
  }

  .book-info__title {
    text-transform: uppercase;
    font-size: 18px;
  }
</style>
