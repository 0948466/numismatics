<template>
    <section class="coin-card">
      <Breadcrumb :items="[{link: 'home', text: 'Каталог'}, { text: 'Распущенные волосы'}]"/>

      <div class="p-2 p-md-3">
        <CoinDesc/>
        <TableSale/>
        <TableBuy/>
      </div>
    </section>
</template>

<script>
    import CoinDesc from '../components/CoinDesc';
    import TableSale from '../components/TableSale';
    import TableBuy from '../components/TableBuy';
    import Breadcrumb from "../components/Breadcrumb";

    export default {
        name: "CoinCard",
      mounted() {
        const clickableRow2 = $('.clickable-row-2')
        if (clickableRow2.length) {
          clickableRow2.click(function() {
            window.location = $(this).data('href');
          });
        }
      },
        components: {Breadcrumb, TableBuy, TableSale, CoinDesc }
    }
</script>

<style scoped>

</style>
