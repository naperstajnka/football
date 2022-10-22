<template>
<div>
<p>Привет</p>
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
