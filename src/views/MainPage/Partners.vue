<template>
    <div class="partners py-12">
        <div class="partners__header">
            <h1 class="header-text">Партнеры</h1>
            <p class="content-text pt-5 px-5">Узнайте больше о наших <a href="#">партнерах</a> и наших совместных проектах.</p>
            <p class="content-text pt-5 px-5"><a href="mailto:hayappinventor@gmail.com?subject=Партнерство с AppInventor Armenia">Ваш логотип может оказаться здесь!</a></p>
        </div>
        <VueSlickCarousel
                class="partners__carousel"
                v-bind="settings"
        >
            <div class="partners__carousel-item px-10 mb-5"
                 v-for="(partner, index) in partners" :key="index"
            >
                <div class="partners__carousel-item-img d-flex align-center justify-center">
                    <v-img
                        width="130px"
                        height="130px"
                        contain
                        :src="partner.logo"
                        draggable="false"
                    />
                </div>
            </div>
        </VueSlickCarousel>
    </div>
</template>

<script>
    import VueSlickCarousel from 'vue-slick-carousel'
    import 'vue-slick-carousel/dist/vue-slick-carousel.css'
    import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'

    export default {
        name: "Partners",
        components: {
          VueSlickCarousel,
        },
        computed: {
            partnersFilter() {
                let newArray = [];
                for (let i = 0; i < this.partners.length; i += 3) {
                    newArray.push(this.partners.slice(i, i + 3))
                }
                return newArray;
            }
        },
        data: () => ({
            partners: [
              {
                  name: 'Mara',
                  logo: require('@/assets/img/mara_partner.svg')
              },
            ],
            settings: {
                arrows: true,
                autoplay: true,
                speed: 300,
                dots: true,
                infinite: true,
                slidesToShow: 3,
                centerMode: true,
                slidesToScroll: 3,
                responsive: [
                    {
                        breakpoint: 600,
                        settings: {
                            slidesToShow: 1,
                            slidesToScroll: 1
                        }
                    }
                ]
            }
        })
    }
</script>

<style lang="sass" scoped>
.partners
    background-color: #F3F3F3
    margin: 0 !important
    &__header
        width: 100%
        text-align: center
        color: #313768
        h1
            //font-size: 3.4rem
        p
            //font-size: 1.8rem
            a
                color: #155195 !important
    &__carousel
        width: 100% !important
        min-height: 9.7rem
        &-item
          height: 9.7rem
          text-align: center
          outline: none !important
          overflow: hidden !important
          &-img
            filter: grayscale(100%)
            opacity: .6
            cursor: pointer
            transition: all .2s
            &:hover
              filter: grayscale(0)
              opacity: 1

</style>