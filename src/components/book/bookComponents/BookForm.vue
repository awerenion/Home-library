<template>
  <form
    class="form"
    @submit.prevent="changeBookInfo"
  >
    <input
      v-model.trim="$v.book.author.$model"
      class="input"
      type="text"
      placeholder="Автор"
    >
    <div
      v-if="!$v.book.author.required"
      class="error"
    >
      Укажите автора
    </div>
    <input
      v-model.trim="$v.book.title.$model"
      class="input"
      type="text"
      placeholder="Название"
    >
    <div
      v-if="!$v.book.title.required"
      class="error"
    >
      Укажите название
    </div>
    <input
      v-model="book.pages"
      class="input"
      type="text"
      placeholder="Количество страниц"
    >
    <input
      v-model="book.year"
      class="input"
      type="text"
      placeholder="Год выпуска"
    >
    <button class="btn">
      Применить
    </button>
  </form>
</template>

<script>
import { required } from 'vuelidate/lib/validators'

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
  validations: {
    book: {
      title: {
        required
      },
      author: {
        required
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
      this.$v.$touch()
      if (!this.$v.$invalid) {
        this.$emit('save', this.book)
      }
    }
  }
}
</script>

<style scoped>
  .error {
    color: red;
    font-size: 12px;
  }

  .form {
    display: flex;
    flex-direction: column;
  }

  .input {
    margin-top: 8px;
  }

  .btn {
    margin-top: 10px;
    border: none;
    padding: 5px;
    border: 1px solid #d95448;
    background: #F0ECE0;
  }
</style>
