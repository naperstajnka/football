<template>
  <div>
    <div class="breadcrumb">
      <a href="/">Главная</a><h> > </h><a href="/kalendar_ligi">Календарь лиги</a>
    </div>
    <h1>Матчи лиги</h1>
 </div>
</template>

<script>
export default {
  name: 'IndexPage',
  layoults: 'kalendar_komandy',
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

