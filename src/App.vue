<template>
  <div id="app">
    <Header/>
    <router-view/>
    <Footer/>
  </div>
</template>

<style lang="scss">
  @import "../src/scss/custom-bootstrap";
  @import '../node_modules/bootstrap/scss/bootstrap.scss';
  @import "../src/scss/base";
</style>
<script>
  import Header from './components/Header';
  import Footer from './components/Footer';

  export default {
    components: { Footer, Header }
  };
</script>
