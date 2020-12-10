<template>
    <div class="section">
        <v-layout>
            <v-row
                no-gutters
            >
                <v-col class="py-8 " v-for="(card, index) in cards" :key="index" cols="12" sm="4">
                    <v-card
                            class="mx-auto section__card pa-3 d-flex flex-column justify-center
                            align-center text-center elevation-5"
                            outlined
                            data-aos="fade-up"
                            data-aos-duration="1200"
                            elevation="0"
                            width="18.7rem"
                    >
                        <div class="section__card-img">
                            <img
                                :src="card.img"
                                class="section__card-img-item"
                            >
                        </div>
                        <v-card-title class="section__card-title">{{ card.title }}</v-card-title>
                        <v-card-text class="section__card-text">{{ card.text }}</v-card-text>
                    </v-card>
                </v-col>
            </v-row>
        </v-layout>
    </div>
</template>

<script>
    export default {
        name: "SecondSection",
        data() {
          return {
              cards: [
                  {
                      img: require("@/assets/img/card_1.png"),
                      title: "Образовательная",
                      text: "Используется в ИТ-классах по всему миру."
                  },
                  {
                      img: require("@/assets/img/card_2.png"),
                      title: "Доступная",
                      text: "Создавать приложения на уровне пазлов."
                  },
                  {
                      img: require("@/assets/img/card_3.svg"),
                      title: "На армянском",
                      text: "Мы перевели всю программу для вас."
                  },
              ]
          }
        },
    }
</script>

<style lang="sass" scoped>


.section
    &__card
        border-radius: 50px !important
        color: #505050 !important
        &-img
            width: 100% !important
            height: 14rem
            &-item
                max-width: 100% !important
                height: 100%
        &-title
            font-size: 1.6rem
            line-height: 2.4rem
            font-weight: 700
        &-text
            font-size: 1rem
            line-height: 1.5rem

</style>