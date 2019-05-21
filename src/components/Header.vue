<template>
  <div class="header">
    <div class="header__logo header__logo--left" :class="colored">
      <a href="#">
         //svg
      </a>
    </div>
    <div class="header__logo header__logo--right" :class="colored">
      <a href="#">
        //svg
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: "Header",
  props: {
    colored: String
  }
};
</script>

<style scoped lang="stylus">
.header 
  height: vw(160,$grid-breakpoints.lg);
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 vw(40,$grid-breakpoints.lg)
  position: absolute;
  top: 0;
  width: 100%;
</style>

