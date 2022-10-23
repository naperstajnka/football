<template>
   <div>
        <div id="pole">
            <div id="h_header1">
                <ul class="menu">
                    <li id="li1"><a href="/">Лиги</a></li>
                    <li id="li2"><a href="/komandy">Команды</a></li>
                </ul>
            </div>
            <nuxt />
        </div>
    </div>
</template>

<script>

export default {

  components:{

  }
}
</script>

<style lang="scss">

//поле
#pole {
  position: absolute;
    width: 100%;
    height: 100%;
    left: 0px;
    top: 0px;
    background: #fff;
}
::-webkit-scrollbar {
  width: 0;
}

//шапка
#h_header1 {
    position: absolute;
    width: 100%;
    height: 60px;
    left: 0px;
    top: 0px;

    background: #f2f3f5;
}

//меню
.menu {
    margin: 0;
    padding: 0;
    list-style-type: none;
}

.menu li {
    box-sizing: border-box;

    position: absolute;
    width: 8%;
    height: 58px;
    top: 1px;

    background: #f2f3f5;
    border: 2px solid #f2f3f5;
}

#li1 {
    left: calc(50% - 8%/2 - 4%);
}

#li2 {
    left: calc(50% - 8%/2 + 4%);
}

.menu a {
    position: absolute;
    width: 120px;
    height: 28px;
    left: calc(50% - 120px/2);
    top: 16px;

    color: #000;

    /*убрать подчеркивание у ссылки*/
    text-decoration: none;

    font-family: 'Alike', serif;
    font-style: normal;
    font-weight: 400;
    font-size: 24px;
    line-height: 30px;
    text-align: center;
}

.menu li:hover {
    border: 2px solid #7CBEC1;
}


/* Конец - меню */

</style>
