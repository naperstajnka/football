<template>
  <div>
    <div class="breadcrumb">
      <a href="/">Главная</a><h> > </h><a href="/kalendar_ligi">Матчи команды</a>
    </div>
    <h1>Матчи команды</h1>
      <v-data-table
    :headers="headers"
    :items="desserts"
    :items-per-page="5"
    class="elevation-1"
  ></v-data-table>
 </div>
</template>

<script>
export default {
  name: 'IndexPage',

  data() {
    return {
      areas: [],
                   headers: [
          {
            text: 'Dessert (100g serving)',
            align: 'start',
            sortable: false,
            value: 'name',
          },
          { text: 'Calories', value: 'calories' },
          { text: 'Fat (g)', value: 'fat' },
          { text: 'Carbs (g)', value: 'carbs' },
          { text: 'Protein (g)', value: 'protein' },
          { text: 'Iron (%)', value: 'iron' },
        ],
    }
  },

  methods: {
    getData() {
      console.log('Я тут');
      this.$axios.$get('api/areas/')
      .then(res => {
        this.areas = res.areas;
        })
    }
  }
}
</script>

<style lang="scss">
//заголовки
h1 {
    position: absolute;
    width: 250px;
    left: calc(50% - 250px/2);
    top: 15%;

    color: #000000;

    font-family: 'Alike', serif;
    font-style: normal;
    font-weight: 400;
    font-size: 24px;
    line-height: 30px;
    text-align: center;
}

/* Хлебные крошки*/
/* Стиль списка */
.breadcrumb {
    position: absolute;
    left: calc(50% - 100%/2 + 14%);
    top: 10%;

    /*убрать подчеркивание у ссылки*/
    text-decoration: none;
}

/* Добавить цвет для всех ссылок */
.breadcrumb a {
    color: #oooooo;
    text-decoration: none;
    font-size: 16px;
}

.breadcrumb h {
    color: #000000;
    font-size: 12px;
}

/* Добавить цвет на наведении курсора мыши */
.breadcrumb a:hover {
    color: #018e98;

    /*убрать подчеркивание у ссылки*/
    text-decoration: none;
}
/* Конец - Хлебные крошки*/


</style>
