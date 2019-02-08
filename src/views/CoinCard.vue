<template>
    <section class="coin-card">
      <nav aria-label="breadcrumb">
        <ol class="breadcrumb bg-transparent pl-2 pl-lg-5">
          <li class="breadcrumb-item"><a href="/">Каталог</a></li>
          <li class="breadcrumb-item active" aria-current="page">Распущенные волосы</li>
        </ol>
      </nav>

        <CoinDesc/>
        <TableSale/>
        <TableBuy/>
    </section>
</template>

<script>
    import CoinDesc from '../components/CoinDesc';
    import TableSale from '../components/TableSale';
    import TableBuy from '../components/TableBuy';

    export default {
        name: "CoinCard",
        components: { TableBuy, TableSale, CoinDesc }
    }
</script>

<style scoped>

</style>
