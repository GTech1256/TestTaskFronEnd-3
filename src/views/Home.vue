<template>
  <div id="container">
    <Header withoutBG />
    <router-link 
      class="button-start" 
      to="/second"  
      tag="button" 
      type="button"
    >
      Начать
    </router-link>
  </div>
</template>

<script>
// @ is an alias to /src
import Header from "@/components/Header.vue";
export default {
  name: "home",
  components: {
    Header
  },
  beforeCreate: function() {
    document.body.className = "home";
  }
};
</script>

<style scoped lang="stylus">
#container 
  background: #333
  min-height: 100%
  display: flex
  flex-direction: column
  justify-content: center
  align-items: center

.button-start 
  display: block
  padding: 18px 55px

  color: #333;
  text-decoration: none
  font-family: $font-family;
  font-size: 22px
  line-height: 24px
  letter-spacing: 1px
  text-transform: uppercase
  
  background: #fff
  border: none;
  border-radius: 10px

  cursor: pointer

@media $display-breakpoints.ms-and-down
  .button-start
    margin-top 75px
    margin-right: 5px
    padding-left: 62px
    padding-right: 48px

</style>

