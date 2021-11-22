export default {
  props: {
    bookTitle: {
      type: String,
      required: false,
      default: ''
    },
    bookAuthor: {
      type: String,
      required: false,
      default: ''
    },
    bookPages: {
      type: Number,
      required: false,
      default: null
    },
    bookYear: {
      type: Number,
      required: false,
      default: null
    }
  }
}
