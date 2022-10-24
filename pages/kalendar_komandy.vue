<template>
  <div>
      <div class="breadcrumb">
        <a href="/komandy">Команды</a><h> > </h><a href="/komandy/kalendar_komandy">Матчи команды</a>
      </div>
    <h1>Матчи команды</h1>
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

