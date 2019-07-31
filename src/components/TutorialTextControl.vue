<template>
  <section class="tutorial" role="dialog" :class="{ 'tutorial--left': currentStep === 3 }">
    <h2 class="tutorial__title">
      {{ currentStep +  ' / 3' }}
    </h2>
    <p 
      class="tutorial__text"
      :class="tutorialTextModifier"
    >
      {{ text[currentStep - 1] }}
    </p>
    <button class="tutorial__next" @click="nextStep">
      Далее
    </button>
    <button class="tutorial__skip" @click="skip">
      пропустить
    </button>
  </section>
</template>
<script>
import { mapGetters } from 'vuex';

import {
  TUTORIAL_STOP,
  NEXT_STEP
} from "../store/mutation-types"

export default {
  name: 'tutorial-control',
  data: () => ({
    text: [
      'Введите вдрес картинки в белое текстовое поле',
      'После, нажите красную кнопку, чтобы добавить картинку в слайдер',
      'Можно увидеть новую картинку'
    ]
  }),
  computed: {
    tutorialTextModifier() {
      
      switch (this.currentStep) {
        case 2:
          return 'tutorial__text--width--420' 
        case 3: 
          return 'tutorial__text--width--190' 
        default:
          return null;
      }
    },
    ...mapGetters([
      'currentStep',
    ])
  },
  methods: {
    nextStep() {
      this.$store.commit(NEXT_STEP)
    },
    skip() {
      this.$store.commit(TUTORIAL_STOP)
    }
  }
}
</script>
<style lang="stylus" scoped>
.tutorial
  display: flex;
  flex-direction: column;

.tutorial__title
  display: inline-block
  margin: 0
  margin-left: auto
  margin-bottom: vw(17)

  position: relative

  font-size: vw(24)
  font-weight: 400
  line-height: vw(36)

  &::before
    display: block 
    height: vw(1)
    width: vw(126)

    background-color: #fff

    position: absolute
    bottom: 0
    left: vw(4)

    content: ""
  
.tutorial__text
  margin: 0
  margin-bottom: vw(19)
  max-width: vw(290)

  font-size: vw(24)
  line-height vw(36)
  text-align: right 

  &--width
    &--420
      max-width: vw(420)
    &--190
      max-width: vw(190)

.tutorial__next
  display: block
  margin-bottom: vw(18)
  margin-left: auto
  padding: vw(2) vw(30)

  font-size: vw(24)
  line-height: vw(36)

  background-color: $red
  border: none
  border-radius: 3px

.tutorial__skip
  display: block
  padding: 0
  margin-left: auto

  position: relative

  font-size: vw(18)
  line-height: vw(18)

  background: transparent
  border: none
  &::after
    display: block
    width: vw(99)
    height: vw(1)

    position: absolute
    bottom: 0

    background-color: #fff

    content: ""

@media $display-breakpoints.sm-and-up 
  .tutorial--left
    .tutorial__text
      text-align: left

    .tutorial__next,
    .tutorial__skip,
    .tutorial__title
      margin-left: 0
      margin-right: auto
    
    .tutorial__title::before 
      right: 0
      left: auto


@media $display-breakpoints.ms-and-down
  .tutorial
    text-align: center

  .tutorial__next,
  .tutorial__skip,
  .tutorial__title,
  .tutorial__text
    margin-left auto
    margin-right auto
  
  .tutorial__title::before
    left: 50%
    transform: translateX(-50%)


  .tutorial__title
    margin-bottom: vw(17, $grid-breakpoints.ms)

    font-size: vw(24, $grid-breakpoints.ms)
    line-height: vw(36, $grid-breakpoints.ms)

    &::before
      height: vw(1, $grid-breakpoints.ms)
      width: vw(126, $grid-breakpoints.ms)

      left: vw(4, $grid-breakpoints.ms)
    
  .tutorial__text
    margin-bottom: vw(19, $grid-breakpoints.ms)
    max-width: vw(290, $grid-breakpoints.ms)

    font-size: vw(24, $grid-breakpoints.ms)
    line-height: vw(36, $grid-breakpoints.ms)

    &--width
      &--420
        max-width: vw(420, $grid-breakpoints.ms)
      &--190
        max-width: vw(190, $grid-breakpoints.ms)

  .tutorial__next
    margin-bottom: vw(18, $grid-breakpoints.ms)
    padding: vw(2, $grid-breakpoints.ms) vw(30, $grid-breakpoints.ms)

    font-size: vw(24, $grid-breakpoints.ms)
    line-height: vw(36, $grid-breakpoints.ms)

  .tutorial__skip
    font-size: vw(18, $grid-breakpoints.ms)
    line-height: vw(18, $grid-breakpoints.ms)

    &::after
      width: vw(99, $grid-breakpoints.ms)
      height: vw(1, $grid-breakpoints.ms)
</style>
