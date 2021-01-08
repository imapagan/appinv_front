<template>
  <div class="home mt-5">
    <section class="first px-10">
      <first-section />
    </section>
    <section class="second my-8">
      <second-section />
    </section>
    <section class="third my-8 px-10">
      <third-section />
    </section>
    <section class="partners mt-8">
      <partners />
    </section>
  </div>
</template>

<script>
import FirstSection from "./MainPage/FirstSection";
import SecondSection from "./MainPage/SecondSection";
import ThirdSection from "./MainPage/ThirdSection";
import Partners from "./MainPage/Partners";

export default {
  name: "Home",
  components: {
    FirstSection,
    SecondSection,
    ThirdSection,
    Partners
  }
};
</script>
