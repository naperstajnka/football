<template>
  <div>
    <form class="search-form">
      <label>
        <input type="text" name="search" placeholder="">
      </label>
      <button>Найти</button>
    </form>
        <div id="kartochki_pole">
        <div class="grid-container">
            <div class="grid-element">
                <p class="text" value=""></p>
                <p class="text2"></p>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'IndexPage',

  methods: {
    getData() {
      console.log('Я тут');
      this.$axios.$get('api/competitions/')
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

/* Карточки */
#kartochki_pole {

    position: absolute;
    width: 73%;
    height: 100%;
    left: calc(50% - 73%/2);
    top: 30%;
}

.grid-container {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 20px;
    padding: 0px;
}

.grid-element {
    height: 100px;
    padding: 20px;
    border: solid 2px #000;

    background: #FFFFFF;
}

.grid-element:hover {
    border: 2px solid #7CBEC1;
    color: #536591;
}

.grid-element a {
    /*убрать подчеркивание у ссылки*/
    text-decoration: none;
}

/* Конец - карточки */
</style>
