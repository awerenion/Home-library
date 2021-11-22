<template>
  <div class="main-page">
    <div class="main-page__header">
      <div class="main-page__dropdown">
        <dropdown
          class="dropdown__item"
          :options="sorting"
          :disabled="false"
          :max-item="3"
          placeholder="Выберите способ сортировки"
          @selected="selectSort"
        />
      </div>
      <div>
        <button
          class="main-page__button"
          @click="isShow = !isShow"
        >
          Положить новую книгу
        </button>
        <div v-if="isShow">
          <book-form
            class="main-page__bookForm"
            @save="addNewBook"
          />
        </div>
      </div>
    </div>
    <div class="books-direction">
      <div>
        <div
          v-for="(booksList, index) in shelfList"
          :key="index"
          class="bookshelf-wrapper"
        >
          <book-shelf
            :books-list="booksList"
          />
        </div>
      </div>
      <div>
        <book-info
          class="book-info"
        />
      </div>
    </div>
  </div>
</template>

<script>
import Dropdown from 'vue-simple-search-dropdown'
import { mapGetters } from 'vuex'
import BooksList from '../../booklist.json'
import BookShelf from '@/components/BookShelf'
import BookInfo from '@/components/book/bookComponents/BookInfo'
import BookForm from '@/components/book/bookComponents/BookForm'

export default {
  name: 'MainPage',
  components: {
    BookShelf,
    BookInfo,
    BookForm,
    Dropdown
  },
  data () {
    return {
      isShow: false,
      sorting: [
        {
          id: 1,
          name: 'По умолчанию',
          value: 'default'
        },
        {
          id: 2,
          name: 'По автору',
          value: 'author'
        },
        {
          id: 3,
          name: 'По названию',
          value: 'title'
        }
      ]
    }
  },
  computed: {
    ...mapGetters({
      shelfList: 'shelfList'
    })
  },
  beforeCreate () {
    if (!localStorage.getItem('books')) {
      const books = BooksList.booksList.map(JSON.stringify)
      localStorage.setItem('books', books)
    }
    this.$store.dispatch('setBooks', localStorage.getItem('books').split(/({.*?}),/g).filter(Boolean).map(JSON.parse))
  },
  methods: {
    addNewBook (book) {
      this.isShow = false
      this.$store.dispatch('addNewBook', book)
    },
    selectSort (sort) {
      if (sort && sort.value) {
        this.$store.dispatch('sortBooks', sort.value)
      }
    }
  }
}
</script>

<style scoped>
  .main-page {
    width: 100%;
  }

  .main-page__header {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100px;
  }
  .main-page__dropdown {
    position: absolute;
    left: 5%;
    top: 35%;
  }

  .main-page__bookForm {
    margin-top: 10px;
  }

  .books-direction {
    display: flex;
    width: 100%;
    justify-content: space-between;
    position: relative;
  }

  .bookshelf-wrapper {
    margin-left: 50px;
    width: 700px;
  }

  .book-info {
    position: absolute;
    right: 25%;
    top: 10%;
  }

  .main-page__button {
    border: none;
    padding: 15px;
    border: 1px solid #d95448;
    background: #F0ECE0;
  }

</style>
