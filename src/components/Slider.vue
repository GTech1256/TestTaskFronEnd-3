<template>
  <swiper 
    class="swiper" 
    :options="swiperOption"
    :initialSlide="4" 
    ref="mySwiper"
  >
    <swiper-slide>
      <img class="swiper__content" src="@/assets/img/1.jpg">
    </swiper-slide>
    <swiper-slide>
      <img class="swiper__content" src="@/assets/img/2.jpg">
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
  height: 100%

.swiper-button 
  display: block
  width: vw(90)
  height: vw(83)
  margin-top: vw(-42)

  font-size: 0

  background: transparent url("../assets/svg/arrow.svg") no-repeat;
  border: none 

  &-prev
    margin-left: vw(8)
    transform: rotate(180deg)
  &-next
    margin-right: vw(8)

.swiper-pagination 
  margin-bottom: vw(20)

  font-size: vw(18)
  letter-spacing: vw(-1)

.swiper__content
  height: 100%;
  width 100%
  object-fit: cover

@media $display-breakpoints.ms-and-down
  .swiper-button 
    width: vw(50, $grid-breakpoints.ms)
    height: vw(50, $grid-breakpoints.ms)
    margin-top: vw(-25, $grid-breakpoints.ms)

    &-prev
      margin-left: 0
    &-next
      margin-right: 0

  .swiper-pagination
    margin-bottom: vw(18, $grid-breakpoints.ms)
    margin-left: vw(19, $grid-breakpoints.ms)

    font-size: vw(18, $grid-breakpoints.ms)
    letter-spacing: vw(-1, $grid-breakpoints.ms)
</style>
