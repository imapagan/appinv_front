<template>
    <div class="section__wrapper">
        <div class="blot section__blot-1"></div>
        <div class="blot section__blot-2"></div>
        <div class="section">
            <v-row
                    no-gutters
                    class="d-flex align-center"
            >
                <v-col
                        cols="12"
                        class="col-sm-6 mb-4 mb-sm-0"
                >
                    <img class="section__img" src="@/assets/img/main_section.svg" alt="">
                </v-col>

                <v-col
                        cols="12"
                        class="col-sm-6"
                >
                    <div class="section__content text-center text-sm-right">
                        <h1 class="section__content-title header-text">
                            Создавай<br> <span class="sec-color">Приложения</span><br> На Армянском
                        </h1>
                        <p class="section__content-text content-text">
                            Программа MIT App Inventor создана,<br>
                            чтобы научить тебя создавать мобильные<br>
                            Android-приложения. Будучи разработанной<br>
                            в США, программа переведена на армянский<br>
                            и теперь доступна для всех   . На сайте<br>
                            ты найдешь подробные видео уроки, которые<br>
                            научат тебя работать с MIT App Inventor.

                        </p>
                    </div>
                </v-col>
            </v-row>
            <div class="mouse d-sm-flex justify-center d-none">
                <mouse></mouse>
            </div>
        </div>
    </div>
</template>

<script>
    import Mouse from "../../components/Mouse";

    export default {
        components: {
          Mouse
        },
        name: "FirstSection"
    }
</script>

<style lang="sass" scoped>

@media (max-width: 600px)
    .section
        &__blot
            &-2
                bottom: 2rem !important
        &__img
            width: 100% !important

.section
    &__wrapper
        position: relative
    &__blot
        &-1
            left: -13rem
            top: -5rem
        &-2
            right: -10rem
            bottom: 8rem
    &__img
        width: 110%
        height: 100%
        z-index: 2
        position: relative
    &__content
        width: 100%
        position: relative
        z-index: 2
        h1
            margin-bottom: 3rem

</style>