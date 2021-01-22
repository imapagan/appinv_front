<template>
  <section class="inDevelop">
    <div class="wrapper">
      <img :src="require('@/assets/img/inDevelop.svg')" alt="space" />
      <div class="content">
        <h2>В разработке</h2>
        <p>
          Раздел находится в разработке, благодарим за интерес и просим
          извинения за неудобства. Если у вас есть вопросы или хотите помочь
          проекту,
          <a
            href="mailto:hayappinventor@gmail.com?subject=Помочь проекту AppInventor Armenia"
          >
            напишите нам.
          </a>
        </p>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "InDevelop"
};
</script>

<style lang="sass" scoped>

.inDevelop
  width: 100%
  height: 90vh
  display: flex
  justify-content: center
  align-items: center

.wrapper
  display: flex
  align-items: center
  img
    width: 500px

.content
  h2
    font-size: 4rem
    margin-bottom: 1rem
  p
    font-size: 1.1rem
    max-width: 400px
    a
      font-weight: 600
      color: #155195 !important

@media (max-width: 768px)
  .inDevelop
    min-height: 90vh
  .wrapper
    flex-direction: column !important
    padding: 0 1rem
    svg
      width: 100%
  .content
    width: 80vw
    h2
      font-size: 2rem
      margin-bottom: 1rem
    p
      font-size: 1rem
      max-width: 100%
</style>
