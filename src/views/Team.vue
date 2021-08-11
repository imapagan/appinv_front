<template>
  <div class="teamPage mt-15">
    <div class="a-container">
      <h1 class="heading headingH1">Команда</h1>
      <p class="description pNormal mobilePNormal">
        Коллектив проекта полностью состоит из добровольцев. Если хотите быть
        частью <a href="/">App Inventor Armenia</a> или помогать по другим нашим
        проектам, будем рады сотрудничеству. <br />
        Можете писать нам:
        <a
          href="mailto:hayappinventor@gmail.com?subject=Партнерство с AppInventor Armenia"
        >
          hayappinventor@gmail.com.
        </a>
      </p>

      <TeamLayout title="Команда перевода" :team="teamTranslate" />
      <TeamLayout title="Команда сайта" :team="teamSite" />
      <TeamLayout title="Команда менеджеров" :team="teamManagers" />
    </div>
  </div>
</template>

<script>
import TeamLayout from "../components/TeamLayout";

export default {
  name: "Team",
  components: { TeamLayout },
  data: () => ({
    teamTranslate: [
      {
        image: require("@/assets/img/team-1.png"),
        name: "Мгер Хачатрян"
      },
      {
        image: require("@/assets/img/team-3.png"),
        name: "Елена Акобян"
      },
      {
        image: require("@/assets/img/team-4.png"),
        name: "Арзун Геворгян"
      },
      {
        image: require("@/assets/img/team-5.png"),
        name: "Давид Минасян"
      },
      {
        image: require("@/assets/img/team-6.png"),
        name: "Нане Варданян"
      },
      {
        image: require("@/assets/img/team-8.png"),
        name: "Мелине Асрян"
      }
    ],
    teamSite: [
      {
        image: require("@/assets/img/team-9.png"),
        name: "Геворг Даллакян",
        role: "Иллюстратор"
      },
      {
        image: require("@/assets/img/team-10.png"),
        name: "Мара Мелконян",
        role: "UX/UI дизайнер"
      },
      {
        image: require("@/assets/img/team-11.jpg"),
        name: "Гор Григорян",
        role: "Web-разработчик"
      },
      {
        image: require("@/assets/img/team-12.png"),
        name: "Лилит Мартиросян",
        role: "Иллюстратор аватаров"
      }
    ],
    teamManagers: [
      // {
      //   image: require("@/assets/img/team-13.png"),
      //   name: "Милана Сугян",
      //   role: "Внешние связи"
      // },
      {
        image: require("@/assets/img/team-14.png"),
        name: "Элина Минасян",
        role: "Scrum мастер"
      },
      // {
      //   image: require("@/assets/img/team-15.jpg"),
      //   name: "Анна Нурбекян",
      //   role: "Комьюнити менеджер"
      // },
      {
        image: require("@/assets/img/team-16.png"),
        name: "Арман Исоян",
        role: "Автор идеи"
      }
    ]
  })
};
</script>

<style lang="scss" scoped>
@import "../assets/styles/vars";

.teamPage {
  margin-bottom: 118px;
}

.heading {
  color: $primary;
}

.description {
  margin-top: 43px;
  width: 90%;
}
</style>
