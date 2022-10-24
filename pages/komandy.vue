<template>
  <div>
    <form class="search-form">
      <label>
        <input type="text" name="search" placeholder="">
      </label>
      <button>Найти</button>
    </form>
  </div>
</template>

<script>
export default {
 name: 'IndexPage',

  methods: {
    getData() {
      console.log('Я тут');
      this.$axios.$get('api/')
      .then(res => {

      })
    }
  }
}
</script>

<style lang="scss">
/* Поиск */
.search-form {
    box-sizing: border-box;

    position: absolute;
    width: 50%;
    height: 40px;
    left: calc(50% - 50%/2);
    top: 20%;

    background: #FFFFFF;
    border: 0px solid #000000;
}

.search-form input {
    box-sizing: border-box;

    position: absolute;
    width: 85%;
    height: 40px;
    left: 0px;
    top: 0px;

    background: #FFFFFF;
    border: 2px solid #000000;
}

.search-form button {
    box-sizing: border-box;

    position: absolute;
    width: 15%;
    height: 40px;
    left: calc(85%);
    top: 0px;

    background: #ffffff;
    border: 2px solid #000000;
}

.search-form button:hover {
    border: 2px solid #7CBEC1;
    color: #536591;
}

.search-form input:hover {
    border: 2px solid #7CBEC1;
}
/* Конец - поиск */
</style>