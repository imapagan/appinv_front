<template>
  <div class="teamLayout">
    <h2 class="heading headingH2 mobileHeadingH2">{{ title }}</h2>
    <div class="divider" />
    <div class="teamWrapper">
      <PersonCard
        v-for="person in team"
        :key="person.name"
        :image="person.image"
        :name="person.name"
        :role="person.role"
      />
    </div>
  </div>
</template>

<script>
import PersonCard from "./PersonCard";
export default {
  name: "TeamLayout",
  components: { PersonCard },
  props: ["title", "team"]
};
</script>

<style lang="scss" scoped>
@import "../assets/styles/vars";

.teamLayout {
  margin-top: 70px;
}

.heading {
  color: $primary;
}

.divider {
  background-color: #000;
  width: 100%;
  height: 1px;
  opacity: 0.5;
  margin: 17px 0;
}

.teamWrapper {
  display: grid;
  grid-template-columns: repeat(4, 177px);
  grid-row-gap: 67px;
  justify-content: space-between;
}
</style>
