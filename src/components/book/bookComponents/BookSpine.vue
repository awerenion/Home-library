<template>
  <div class="book-spine">
    <span class="book-text author"> {{ bookTitle }} </span>
    <br>
    <span class="book-text"> {{ fixStr(bookAuthor) }}  </span>
  </div>
</template>

<script>
import bookComponentMixin from '@/mixins/bookComponentsMixin'

export default {
  name: 'BookSpine',
  mixins: [bookComponentMixin],
  methods: {
    fixStr (str) {
      const strArr = str.split(' ')
      strArr[0] = `${strArr[0].slice(0, 1).toUpperCase()}.`
      return strArr.join(' ')
    }
  }
}
</script>

<style scoped>
.book-spine {
  background: #d95448;
  margin: 15px;
  cursor: pointer;
  width: 19px;
  height: 275px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  color: white;
}

.book-text .author {
  font-weight: bold;
  margin-top: 0px;
}

.book-text {
  width: 95%;
  font-size: 14px;
  writing-mode: tb-rl;
  transform:rotate(180deg);
  margin: 5px;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  max-height: 150px;
}
</style>
