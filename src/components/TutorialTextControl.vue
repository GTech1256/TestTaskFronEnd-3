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
  margin-bottom: 17px

  position: relative

  font-size: 24px
  font-weight: 400
  line-height: 36px

  &::before
    display block 
    height: 1px
    width: 126px

    background-color #fff

    position absolute
    bottom: 0
    left: 4px

    content: ""
  
.tutorial__text
  margin: 0
  margin-bottom: 19px
  max-width: 290px

  font-size: 24px
  line-height 36px
  text-align: right 

  &--width
    &--420
      max-width: 420px
    &--190
      max-width: 190px

.tutorial__next
  display: block
  margin-bottom: 18px
  margin-left: auto
  padding: 2px 30px

  font-size: 24px
  line-height: 36px

  background-color $red
  border: none
  border-radius: 3px

.tutorial__skip
  display: block
  padding: 0
  margin-left: auto

  position: relative

  font-size: 18px
  line-height: 18px

  background: transparent
  border: none
  &::after
    display: block
    width: 99px
    height 1px

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

</style>
