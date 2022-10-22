<template>
          <v-btn color="primary" @click="getData()"> Показать </v-btn>
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
