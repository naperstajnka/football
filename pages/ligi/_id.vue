<template>
  <div>

    <div class="breadcrumb">
    <nuxt-link id="cvet" to="/" class="kroshki">Главная</nuxt-link>
    <nuxt-link to="" class="kroshki">></nuxt-link>
    <nuxt-link id="cvet" to="/ligi" class="kroshki">Лиги</nuxt-link>
    <nuxt-link to="" class="kroshki">></nuxt-link>
    <nuxt-link to="" class="kroshki">{{competition.name}}</nuxt-link>
    </div>

    <h1>{{competition.name}}</h1>

    <div class="tableLiga">
      <v-data-table
      :headers="headers"
      :items="matches"
      :items-per-page="7"
      class="elevation-1"
      ></v-data-table>
    </div>

  </div>
</template>

<script>
  export default {
  
    name: 'IndexPage',

    validate({params}) {
      return /^\d+$/.test(params.id)
    },

    async asyncData({$axios, params}) {
      const res = await $axios.$get('api/competitions/' + params.id + '/matches/')
      const matches = res.matches;
      const competition = res.competition;
      return{matches, competition}
    },

    data: () => ({
      matches: [],
      competition: [],

      headers: [
        {
          text: 'Дата и время проведения',
          align: 'start',
          sortable: true,
          value: 'utcDate',
        },
        { text: 'Статус матча', value: 'status' },
        { text: 'Команда А', value: 'homeTeam.name' },
        { text: 'Счет', value: 'score.fullTime.home' },
        { text: 'halfTime', value: 'score.halfTime.home' },
        { text: 'Команда Б', value: 'awayTeam.name' },
        { text: 'Счет', value: 'score.fullTime.away' },
        { text: 'halfTime', value: 'score.halfTime.away' },
      ],
    })
  }
</script>

<style lang="scss">
//заголовки
h1 {
    position: absolute;
    width: 500px;
    left: calc(50% - 500px/2);
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
.breadcrumb {
  position: absolute;
  left: calc(50% - 100%/2 + 14%);
  top: 10%;
}

.kroshki {
  font-size: 14px;
  text-decoration: none;
  color: #000000;
}

/* Добавить цвет на наведении курсора мыши */
#cvet:hover {
  color: #018e98;
}

/* Конец - Хлебные крошки*/

/*таблица*/
.tableLiga {
  position: absolute;
  width: 70%;
  left: calc(50% - 100%/2 + 14%);
  top: 35%;
  text-align: center;
}
/*конец таблица*/

</style>
