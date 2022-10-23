<template>
  <div>
    <div class="breadcrumb">
      <a href="/">Главная</a><h> > </h><a href="/kalendar_ligi">Календарь лиги</a>
      </div>
    <label class="g_zagolovki">Матчи</label>
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
