<template>
  <div id="container" :data-step="stepData">
    <Header />
    <section class="content">
      <div class="content__left">
        <Slider />
      </div>
      <div class="content__right">
        <form class="content__form" v-on:submit.prevent="add">
          <label class="content__label" for="url-input">
            Ссылка на картинку
            </label>
          <input class="content__input" type="text" id="url-input">
          <button class="content__submit" type="submit">
            Добавить ссылку
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              xmlns:xlink="http://www.w3.org/1999/xlink" 
              width="140" 
              height="140" 
              x="0px" 
              y="0px" 
              style="enable-background:new 0 0 459.325 459.325" 
              version="1.1" 
              viewBox="0 0 459.325 459.325" 
              xml:space="preserve"
              fill="#fff"
            >
              <g>
                  <path d="M459.319,229.668c0,22.201-17.992,40.193-40.205,40.193H269.85v149.271c0,22.207-17.998,40.199-40.196,40.193
              c-11.101,0-21.149-4.492-28.416-11.763c-7.276-7.281-11.774-17.324-11.769-28.419l-0.006-149.288H40.181
              c-11.094,0-21.134-4.492-28.416-11.774c-7.264-7.264-11.759-17.312-11.759-28.413C0,207.471,17.992,189.475,40.202,189.475h149.267
              V40.202C189.469,17.998,207.471,0,229.671,0c22.192,0.006,40.178,17.986,40.19,40.187v149.288h149.282
              C441.339,189.487,459.308,207.471,459.319,229.668z"/>
              </g>
            </svg>
          </button><!-- /.content__submit -->
        </form><!-- /.content__form -->
      </div><!-- /.content__right -->
    </section><!-- /.content -->
    <tutorial-text-control 
      class="container__tutorial"
      v-if="tutorialIsStarted"
    />
  </div>
</template>

<script>
// @ is an alias to /src
import Header from "@/components/Header.vue";
import Slider from "@/components/Slider.vue";
import TutorialTextControl from "@/components/TutorialTextControl.vue";

import {
  TUTORIAL_START
} from '../store/mutation-types';
import { mapGetters } from "vuex";

export default {
  name: "home",
  components: {
    Header,
    Slider,
    TutorialTextControl
  },
  data() {
    return {};
  },
  methods: {},
  computed: {
    stepData() {
      return this.tutorialIsStarted ? `step_${this.currentStep}` : null 
    },
    ...mapGetters([
      'currentStep',
      'tutorialIsStarted'
    ])
  },
  mounted() {
    this.$store.commit(TUTORIAL_START)
  }
};
</script>

<style scoped lang="stylus">
#container
  height 100%
  min-height: 100%
  // Header {position:absolute}
  padding-top: vw(160, $grid-breakpoints.lg);
  position: relative

  .content__left,
  .content__right,
  .header
    overlayGray()
  .header
    position absolute

  &[data-step="step_1"],
  &[data-step="step_2"]
    .content__left,
    .header
      overlayGrayActive()

  &[data-step="step_2"]
    .container__tutorial
      top: vw(570)

  &[data-step="step_3"]
    .content__right,
    .header
      overlayGrayActive()
    .container__tutorial
      top: vw(332)
      right: vw(35)

.content 
  display flex
  height 100%

.content__left
  width 1020px

.content__right 
  width 260px
  height 100%
  padding: vw(40)

  background-color #cccccc

.content__form 
  display flex
  height 100%
  flex-direction column

.content__label
  margin 0
  margin-bottom vw(20)

  color: $dark-text
  font-size: vw(18)
  line-height vw(18)

  text-align: center;

.content__input
  border: none

  line-height vw(28)

.content__submit
  padding vw(20)
  margin-top auto

  font-size 0

  background-color $red
  border: none

.container__tutorial
  position absolute
  top: vw(232)
  right: vw(300)
  z-index: 1000

  transition: top 0.2s ease-out, right 0.2s ease-out

</style>

