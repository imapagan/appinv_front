<template>
    <div class="mouse">
        <div class="mouse__circle mouse__circle-1"></div>
        <div class="mouse__circle mouse__circle-2"></div>
        <div class="mouse__circle mouse__circle-3"></div>
        <img class="mt-1 pa-0" :src="require('@/assets/img/Scroll.svg')" alt="">
        <div class="mouse__circle mouse__circle-4"></div>
        <div class="mouse__circle mouse__circle-5"></div>
    </div>
</template>

<script>
    export default {
        name: "Mouse"
    }
</script>

<style lang="sass" scoped>

    .mouse
        &__circle
            width: 10px
            height: 10px
            background-color: #7ABFF5
            border-radius: 50%
            margin-left: 50%
            transform: translateX(-50%)
            margin-bottom: .2rem
            &-1
                opacity: .2
                animation: animation_circle-1 2s infinite
            &-2
                opacity: .4
                animation: animation_circle-2 2s infinite
                animation-delay: .2s
            &-3
                opacity: .7
                animation: animation_circle-3 2s infinite
                animation-delay: .5s
            &-4
                opacity: .7
                animation: animation_circle-3 2s infinite
                animation-delay: .5s
            &-5
                opacity: .4
                animation: animation_circle-2 2s infinite
                animation-delay: .2s

    @keyframes animation_circle-1
        0%
            opacity: .2
        50%
            opacity: 0
        100%
            opacity: .2

    @keyframes animation_circle-2
        0%
            opacity: .4
        50%
            opacity: 0
        100%
            opacity: .4

    @keyframes animation_circle-3
        0%
            opacity: .7
        50%
            opacity: 0
        100%
            opacity: .7

</style>