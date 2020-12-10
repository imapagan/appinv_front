<template>
    <div class="section">
        <div class="blot section__blot"></div>
        <v-row
                no-gutters
                class="d-flex align-center"
        >
            <v-col
                    cols="12"
                    class="col-sm-5"
            >
                <div class="section__content text-center text-sm-justify">
                    <h1 class="section__content-title header-text">
                      Нажми на кнопку<br> и становись<br> <span class="sec-color">Программистом!</span>
                    </h1>
                    <p class="section__content-text content-text">
                      Здесь ты найдёшь ролики, из которых узнаешь,<br/>
                      как создавать приложения в MIT App Inventor,<br/>
                      даже если никогда этого не делал раньше: просто
                      наведи курсор на видео справа, <br/>
                      посмотри интро, а дальше все пойдет само<br /> собой. Отправляйся в
                      мир кодов и шифров, создавай новое!<br/>
                    </p>
                </div>
            </v-col>

            <v-col
                    cols="12"
                    class="col-sm-7 align-self-start"
            >
                <div class="section__img" >
                    <img src="@/assets/img/Video_ill.svg" alt="">
                    <div class="section__img__btn_wrapper">
                        <button class="section__img__btn">
                            <font-awesome-icon icon="play" class="section__img__btn-icon"></font-awesome-icon>
                        </button>
                    </div>
                </div>
            </v-col>
        </v-row>
    </div>
</template>

<script>
    export default {
        name: "ThirdSection"
    }
</script>

<style lang="sass" scoped>
@media only screen and (max-width: 600px)
    .section
        &__blot
           top: 8.5rem !important
        &__img
            &__btn
                &_wrapper
                    bottom: 25% !important
                    left: 12% !important
            & img
                width: 120% !important
                transform: translate(-10%, 0%) !important


.section
    position: relative
    &__blot
        bottom: 2rem
        left: -10rem
    &__img
        width: 100%
        height: 100%
        position: relative
        img
            width: 100%
            height: 100%
        &__btn
            display: flex
            justify-content: center
            align-items: center
            width: 3rem
            height: 3rem
            border-radius: 50%
            border: 2px solid white
            color: white
            outline: none
            text-align: center
            &_wrapper
                width: 4.2rem
                height: 4.2rem
                background-color: #155195
                border-radius: 50%
                box-shadow: 0 0 0 0 rgba(#155195, .5)
                display: flex
                justify-content: center
                align-items: center
                animation: pulse 1.5s infinite
                position: absolute
                left: 20%
                bottom: 30%
    &__content
        z-index: 2
        position: relative
        h1
            margin-bottom: 3rem

@keyframes pulse
    0%
        transform: scale(.9)
    70%
        transform: scale(1)
        box-shadow: 0 0 0 2.5rem rgba(#155195, 0)
    100%
        transform: scale(.9)
        box-shadow: 0 0 0 0 rgba(#155195, 0)
</style>