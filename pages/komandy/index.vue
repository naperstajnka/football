<template>
  <div>
    <form class="search-form">
      <label>
        <input type="text" name="search" placeholder="">
      </label>
      <button>Найти</button>
    </form>
    <div class="grid-container">
    <div v-for="komanda of komandy" :key="komanda.id" href="#" @click.prevent="openKomanda(komanda)" class="grid-element">
        {{komanda.name}}
      </div>
      </div>
  </div>
</template>

<script>
export default {
  name: 'IndexPage',

  async fetch({store}) {
  if(store.getters['komandy/komandy'].length === 0) {
    await store.dispatch('komandy/fetch')
  }
},

  data: () => ({
    
  }),

  computed: {
    komandy() {
      return this.$store.getters['komandy/komandy']
    }
  },

  methods: {
    openKomanda(komanda) {
    this.$router.push('/komandy/' + komanda.id)
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
    grid-template-columns: repeat(5, 1fr);
    grid-gap: 20px;
    padding: 300px;
}

.grid-element {
    height: 200px;
    padding: 20px;
    border: solid 2px #000000;

    background: #FFFFFF;
}

.grid-element:hover {
    border: 2px solid #7CBEC1;
    color: #536591;
}

/* Конец - карточки */
</style>