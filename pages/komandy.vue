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
      this.$axios.$get('api/matches/')
      .then(res => {
        console.log(res);
      })
    }
  }
}
</script>
