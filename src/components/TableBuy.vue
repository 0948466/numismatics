<template>
  <section class="table-buy">
    <div class="container-fluid p-0">
      <div class="row justify-content-between align-items-center m-0 mb-4">
        <h2 class="mb-3">Купить монеты</h2>
        <router-link :to="{ name: 'create-lot-buy'}" class="btn btn-outline-dark mb-2 mb-sm-0">Создать лот на покупку</router-link>
      </div>
    </div>


      <TableBuyContent link="/coin-buy"/>

  </section>
</template>

<script>
  import TableBuyContent from "./TableBuyContent";
  export default {
    name: 'TableBuy',
    components: {TableBuyContent}
  };
</script>

<style scoped>

</style>
