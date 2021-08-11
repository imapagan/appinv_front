<template>
  <div class="personCard">
    <div class="image">
      <img :src="image" alt="" />
    </div>
    <h3 class="pNormal mobilePNormal">{{ name }}</h3>
    <p class="role pSmall">{{ role }}</p>
  </div>
</template>

<script>
export default {
  name: "PersonCard",
  props: ["image", "name", "role"]
};
</script>

<style lang="scss" scoped>
@import "../assets/styles/vars";

.personCard {
  text-align: center;
  width: 177px;
}

.image {
  width: 170px;
  height: 170px;
  border-radius: 50%;
  overflow: hidden;
  margin-bottom: 9px;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}

.role {
  color: $gray;
  width: 135px;
  text-align: center;
  margin: 9px auto 0;
}
</style>
