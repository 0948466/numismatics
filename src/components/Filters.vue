<template>
  <section class="filters d-none d-sm-block border-right p-3 pt-lg-5">
    <h2 class="mb-5">Фильтр</h2>

    <FiltersContent/>
  </section>
</template>

<script>
  import FiltersContent from "./FiltersContent";
  export default {
    name: 'Filters',
    components: {FiltersContent}
  };
</script>

<style scoped>

</style>
