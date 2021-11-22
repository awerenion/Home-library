import Vue from 'vue'
import Vuex from 'vuex'
import _ from 'lodash'
import { updStorage } from './plugins'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    booksList: [],
    selectedBook: null
  },
  mutations: {
    removeBook (state, id) {
      state.booksList = state.booksList.filter(book => book.id !== id)
    },
    bookSelect (state, book) {
      state.selectedBook = book
    },
    setBooks (state, books) {
      state.booksList = books
    },
    bookSelectClear (state) {
      state.selectedBook = null
    },
    editBook (state, book) {
      const index = state.booksList.findIndex(elem => elem.id === book.id)
      state.booksList[index] = book
    },
    addNewBook (state, book) {
      const highId = [...state.booksList].sort((a, b) => b.id - a.id)
      book.id = highId[0].id + 1
      state.booksList.push(book)
      console.log(book)
    },
    sortBooks (state, sort) {
      state.booksList.sort((a, b) => {
        if (sort === 'title') {
          return a.title.localeCompare(b.title)
        }
        if (sort === 'author') {
          return a.author.localeCompare(b.author)
        }
        return a.id - b.id
      })
    }
  },
  actions: {
    removeBook ({ commit }, book) {
      commit('removeBook', book)
    },
    bookSelect ({ commit }, book) {
      commit('bookSelect', book)
    },
    setBooks ({ commit }, books) {
      commit('setBooks', books)
    },
    bookSelectClear ({ commit }) {
      commit('bookSelectClear')
    },
    editBook ({ commit }, book) {
      commit('editBook', book)
    },
    addNewBook ({ commit }, book) {
      commit('addNewBook', book)
    },
    sortBooks ({ commit }, sort) {
      commit('sortBooks', sort)
    }
  },
  getters: {
    booksList: state => state.booksList,
    selectedBook: state => state.selectedBook,
    shelfList: state => _.chunk(state.booksList, 9)
  },
  plugins: [updStorage]
})
