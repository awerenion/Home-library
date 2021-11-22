export const updStorage = store => {
  store.subscribe((mutation, state) => {
    const { type } = mutation
    if (type === 'removeBook' || type === 'editBook' || type === 'addNewBook') {
      const books = state.booksList.map(JSON.stringify)
      localStorage.setItem('books', books)
    }
  })
}
