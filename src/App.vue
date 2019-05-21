<template>
  <div id="app">
    <router-view/>
  </div>
</template>


<script>
// @ is an alias to /src

export default {
  name: "home"
};
</script>

<style lang="stylus">

#app, body, html {
  height: 100%;
  font-family: 'Roboto', sans-serif;
}

* {
  box-sizing: border-box;
}
</style>
