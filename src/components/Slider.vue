<template>
  <swiper :options="swiperOption" ref="mySwiper">
    <swiper-slide></swiper-slide>

    <div class="swiper-pagination" slot="pagination"></div>
    <div class="swiper-button swiper-button-prev" slot="button-prev">
       //svg
    </div>
    <div class="swiper-button swiper-button-next" slot="button-next">
      //svg
    </div>
  </swiper>
</template>

<script>
import "swiper/dist/css/swiper.css";
import { swiper, swiperSlide } from "vue-awesome-swiper";
export default {
  name: "Slider",
  data() {
    return {
      swiperOption: {
        pagination: {
          el: ".swiper-pagination",
          type: "fraction"
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev"
        }
      }
    };
  },
  components: {
    swiper,
    swiperSlide
  },
  computed: {

  },

};
</script>

<style scoped lang="stylus">

</style>

