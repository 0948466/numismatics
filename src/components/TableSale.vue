<template>
  <section class="table-sale border-bottom mb-4 pb-4">
    <div class="container-fluid p-0">
      <div class="row justify-content-between align-items-center m-0 mb-4">
        <h2 class="mb-3">Продать монеты</h2>
        <a href="/create-lot-sale" class="btn btn-outline-dark mb-2 mb-sm-0">Создать лот на продажу</a>
      </div>

      <TableSaleContent link="/coin-sale"/>
    </div>
  </section>
</template>

<script>
  import TableSaleContent from "./TableSaleContent";
  export default {
    name: 'TableSale',
    components: {TableSaleContent}
  };
</script>

<style scoped>

</style>
