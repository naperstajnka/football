<template>
  <section>
  <div>
    <div class="breadcrumb">
      <a href="/ligi">Лиги</a><h> > </h><a href="/_id">{{$route.params.id}}</a>
    </div>
    <h1">{{}}</h1>
</div>
 </section>
</template>

<script>
export default {
  
name: 'IndexPage',

  data: () => ({
    matches: [],
  }),

validate({params}) {
  return /^\d+$/.test(params.id)
},

  async asyncData({$axios, params}) {
    const res = await $axios.$get('api/competitions/' + params.id + '/matches/')
    const matches = res.matches;
    return{matches}
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
