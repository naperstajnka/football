<template>
  <div>

    <a href="/">
      <img src="@/static/majch.png" alt="" class="imgClass">
    </a>

    <form class="search-form">
      <label>
        <input type="text" name="search" placeholder="">
      </label>
      <button>Найти</button>
    </form>

    <div class="grid-container">
      <div v-for="liga of ligi" :key="liga.id" href="#" class="grid-element" @click.prevent="openLigi(liga)">
        <h2>{{liga.name}}</h2>
        <h3>{{liga.area.name}}</h3>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: 'IndexPage',

 data: () => ({

  }),

async fetch({store}) {
  if(store.getters['ligi/ligi'].length === 0) {
    await store.dispatch('ligi/fetch')
  }
},

  computed: {
    ligi() {
      return this.$store.getters['ligi/ligi']
    }
  },
  
  methods: {
    openLigi(liga) {
      this.$router.push('/ligi/' + liga.id)
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
.grid-container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 20px;
  padding: 300px;
}

.grid-element {
  height: 180px;
  padding: 20px;
  border: solid 2px #000000;
  text-align: center;

  background: #FFFFFF;
}

.grid-element:hover {
  border: 2px solid #7CBEC1;
  color: #536591;
}
/* Конец - карточки */

//logo
.imgClass {
  position: absolute;
  width: 5%;
  height: 10%;
  left: calc(50% - 5%/2);
  top: 9%;
}

</style>
