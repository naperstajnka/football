<template>
   <div>
        <div class="pole">
           <div class="h_header" dense>
                <div class="menu_pole">
                    <nuxt-link id="menu_ligi" class="menu" to="/ligi">Все лиги</nuxt-link>
                    <nuxt-link id="menu_komandy" class="menu" to="/komandy">Команды</nuxt-link>
                </div>
            </div>
            <nuxt />
        </div>
    </div>
</template>

<style lang="scss">

//поле
.pole {
    position: absolute;
    width: 100%;
    height: 100%;
    left: 0px;
    top: 0px;
    background: #ffffff;
}
::-webkit-scrollbar {
  width: 0;
}

//шапка
.h_header {
    position: absolute;
    width: 100%;
    height: 60px;
    top: 0px;

    background: #018e98;
}

//меню
.menu_pole {
    position: absolute;
    width: 300px;
    left: calc(50% - 300px/2);
    top: 14px;
}

.menu {
    text-decoration: none;
    color: #ffffff;

    font-size: 24px;
}

.menu:hover {
    color: #ffffff;
}

#menu_ligi {
    position: absolute;
    left: 0px;
    top: 0px;
}

#menu_komandy {
    position: absolute;
    right: 0px;
    top: 0px;
}
// Конец - меню 

</style>
