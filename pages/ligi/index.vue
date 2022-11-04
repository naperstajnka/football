<template>
  <div>

    <a href="/">
      <img src="@/assets/majch.png" alt="" class="logo2">
    </a>
    <a class="na_glavnyy" to="/">На главную</a>

    <div class="matchKartochki">
      <v-container fluid>
        <v-data-iterator
          :items="ligi"
          :items-per-page.sync="itemsPerPage"
          :page.sync="page"
          :search="search"
          :sort-desc="sortDesc"
          hide-default-footer
        >
          <template v-slot:header>
            <v-toolbar
              dark
              color="#018e98"
              class="mb-1"
            >
              <v-text-field
                v-model="search"
                clearable
                flat
                solo-inverted
                hide-details
                prepend-inner-icon="mdi-magnify"
                label="Search"
              ></v-text-field>
            </v-toolbar>
          </template>

          <template v-slot:default="props">
            <v-row>
              <v-col
                v-for="item in props.items"
                :key="item.name"
                cols="12"
                sm="6"
                md="4"
                lg="3"
              >
                <a  @click.prevent="openLigi(item)">
                  <v-card>
                    <v-card-title class="subheading font-weight-bold">
                      {{ item.name }}
                    </v-card-title>
                    <v-card>
                      {{ item.area.name}}
                    </v-card>

                    <v-divider></v-divider>
                  </v-card>
                </a>
              </v-col>
            </v-row>
          </template>

          <template v-slot:footer>
            <v-row
              class="mt-2"
              align="center"
              justify="center"
            >
              <span class="grey--text">Items per page</span>
              <v-menu offset-y>
                <template v-slot:activator="{ on, attrs }">
                  <v-btn
                    dark
                    text
                    color="primary"
                    class="ml-2"
                    v-bind="attrs"
                    v-on="on"
                  >
                    {{ itemsPerPage }}
                    <v-icon>mdi-chevron-down</v-icon>
                  </v-btn>
                </template>

                <v-list>
                  <v-list-item
                    v-for="(number, index) in itemsPerPageArray"
                    :key="index"
                    @click="updateItemsPerPage(number)"
                  >
                    <v-list-item-title>{{ number }}</v-list-item-title>
                  </v-list-item>
                </v-list>
              </v-menu>

              <v-spacer></v-spacer>

              <span
                class="mr-4
                grey--text"
              >
                Page {{ page }} of {{ numberOfPages }}
              </span>
              <v-btn
                fab
                dark
                color="#018e98"
                class="mr-1"
                @click="formerPage"
              >
                <v-icon>mdi-chevron-left</v-icon>
              </v-btn>
              <v-btn
                fab
                dark
                color="#018e98"
                class="ml-1"
                @click="nextPage"
              >
                <v-icon>mdi-chevron-right</v-icon>
              </v-btn>
            </v-row>
          </template>
        </v-data-iterator>
      </v-container>
    </div>

  </div>
</template>

<script>
  export default {
    name: 'IndexPage',

    data: () => ({
      itemsPerPageArray: [5, 9, 0],
      search: '',
      sortDesc: true,
      page: 2,
      itemsPerPage: 6,
      keys: [
      ],
      items: [
        {
        },
      ]
    }),

    async fetch({store}) {
      if(store.getters['ligi/ligi'].length === 0) {
      await store.dispatch('ligi/fetch')
      }
    },

    computed: {
      ligi() {
        return this.$store.getters['ligi/ligi']
      },
      numberOfPages () {
        return Math.ceil(this.items.length / this.itemsPerPage)
      },
      filteredKeys () {
        return this.keys.filter(key => key !== 'Name')
      },
    },
  
    methods: {
      openLigi(liga) {
        this.$router.push('/ligi/' + liga.id)
      },
      nextPage () {
        if (this.page + 1 <= this.numberOfPages) this.page += 1
      },
      formerPage () {
        if (this.page - 1 >= 1) this.page -= 1
      },
      updateItemsPerPage (number) {
        this.itemsPerPage = number
      },
    }
  }
</script>

<style lang="scss">
//logo
.logo2 {
  position: absolute;
  width: 5%;
  height: 10%;
  left: calc(50% - 5%/2);
  top: 12%;
}
.na_glavnyy {
  position: absolute;
  width: 80px;
  left: calc(50% - 80px/2);
  top: 23%;

  text-decoration: none;
  color: #000000;
}
.na_glavnyy:hover {
    color: #018e98;
}

/* Карточки */
.matchKartochki {
  position: absolute;
  width: 70%;
  left: calc(50% - 70%/2);
  top: 30%;
}
/* Конец - карточки */
</style>
