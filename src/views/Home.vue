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
  padding: vw(18) vw(55)

  color: #333;
  text-decoration: none
  font-family: $font-family;
  font-size: vw(22)
  line-height: vw(24)
  letter-spacing: 1px
  text-transform: uppercase
  
  background: #fff
  border: none;
  border-radius: vw(10)

  cursor: pointer

</style>

