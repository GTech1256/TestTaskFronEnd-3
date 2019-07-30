<template>
  <swiper 
    class="swiper" 
    :options="swiperOption"
    :initialSlide="4" 
    ref="mySwiper"
  >
    <swiper-slide>
      <img src="@/assets/img/1.jpg">
    </swiper-slide>
    <swiper-slide>
      <img src="@/assets/img/2.jpg">
    </swiper-slide>

    <div class="swiper-pagination" slot="pagination"></div>
    <button class="swiper-button swiper-button-prev" slot="button-prev" type="button">
       Предыдущий слайд
    </button>
    <button class="swiper-button swiper-button-next" slot="button-next" type="button">
      Следующий слайд
    </button>
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
.swiper-container
  height 100%

.swiper-button 
  display block
  width 90px
  height 83px
  margin-top -42px

  font-size 0

  background: transparent url("../assets/svg/arrow.svg") no-repeat;
  border: none 

  &-prev
    margin-left: 8px
    transform rotate(180deg)
  &-next
    margin-right: 8px

.swiper-pagination 
  margin-bottom 20px

  font-size 18px
  letter-spacing: -1px
</style>
