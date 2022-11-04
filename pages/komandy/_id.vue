<template>
  <div>

    <div class="breadcrumb">
    <nuxt-link id="cvet" to="/" class="kroshki">Главная</nuxt-link>
    <nuxt-link to="" class="kroshki">></nuxt-link>
    <nuxt-link id="cvet" to="/komandy" class="kroshki">Команды</nuxt-link>
    <nuxt-link to="" class="kroshki">></nuxt-link>
    <nuxt-link to="" class="kroshki">{{nameKomandy.name}}</nuxt-link>
    </div>

    <h1>{{nameKomandy.name}}</h1>

    
    <div class="tableKomanda">
      <v-card>
        <v-card-title>
          <v-text-field
            v-model="search"
            append-icon="mdi-magnify"
            label="Введите запрос"
            single-line
            hide-details
          ></v-text-field>
        </v-card-title>
        <v-data-table
          :headers="headers"
          :items="matchesKomandy"
          :items-per-page="7"
          :search="search"
          class="elevation-1">

          <template #[`item.area.flag`]="{ item }">
            <img :src="item.area.flag" :height="30">
          </template>

        </v-data-table>
      </v-card>
    </div>

  </div>
</template>

<script>
  export default {
    name: 'IndexPage',

    validate({params}) {
      return true
    },

    async asyncData({$axios, params}) {
      const res = await $axios.$get('api/teams/' + params.id + '/matches/')
      const nameKomandy = await $axios.$get('api/teams/' + params.id)
      const matchesKomandy = res.matches;
      return{matchesKomandy, nameKomandy}
    },

    data: () => ({
      matchesKomandy: [],
      nameKomandy: [],

      search: '',
      headers: [
        {
          text: 'Дата проведения',
          align: 'start',
          sortable: false,
          value: 'utcDate',
        },
        { text: 'Статус', value: 'status'},
        { text: 'Команда А', value: 'homeTeam.name' },
        { text: 'Счет', value: 'score.fullTime.home' },
        { text: 'halfTime', value: 'score.halfTime.home' },
        { text: 'Команда Б', value: 'awayTeam.name' },
        { text: 'Счет', value: 'score.fullTime.away' },
        { text: 'halfTime', value: 'score.halfTime.away' },
        { text: 'Флаг', value: 'area.flag' },
      ],
    }), 
  }
</script>

<style lang="scss">
//заголовки
h1 {
    position: absolute;
    width: 500px;
    left: calc(50% - 500px/2);
    top: 20%;

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
  left: calc(50% - 100%/2 + 15%);
  top: 15%;
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
.tableKomanda {
  position: absolute;
  width: 70%;
  left: calc(50% - 70%/2);
  top: 30%;
  text-align: center;
}
/*конец таблица*/

</style>


