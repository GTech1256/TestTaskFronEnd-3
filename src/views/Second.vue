<template>
  <div id="container">
    <Header />
    <div class="content">
      <div class="content__left">
        <Slider />
      </div>
      <div class="content__right">
        <form v-on:submit.prevent="add">
          <label for="">Ссылка на картинку</label>
          <input type="text" />
        </form>
        <div class="add">
          //svg
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Header from "@/components/Header.vue";
import Slider from "@/components/Slider.vue";

export default {
  name: "home",
  components: {
    Header,
    Slider
  },
  data() {
    return {};
  },
  methods: {}
};
</script>

<style scoped lang="stylus">
</style>

