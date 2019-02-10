<template>
  <section class="table-buy p-2 p-lg-5 mb-2 mb-lg-5">
    <div class="container-fluid">
      <div class="row justify-content-between align-items-center mb-4">
        <h2 class="mb-3">Купить монеты</h2>
        <a href="/create-lot-buy" class="btn btn-outline-dark mb-2 mb-sm-0">Создать лот на покупку</a>
      </div>
    </div>
    <table class="table table-bordered table-responsive-lg">
      <thead>
      <tr>
        <th scope="col">Упаковка</th>
        <th scope="col">Цена за 1 шт.</th>
        <th scope="col">Кол-во</th>
        <th scope="col">Итого</th>
      </tr>
      </thead>
      <tbody>

      <tr>
        <td colspan="4"></td>
      </tr>

      <tr class="bg-success clickable-row-2"  data-href="/coin-buy">
        <td class="p-2" colspan="4"></td>
      </tr>
      <tr class="clickable-row-2"  data-href="/coin-buy">
        <td>Монетный двор</td>
        <td>26.600 Р</td>
        <td>10</td>
        <td>266.000 Р</td>
      </tr>
      <tr class="clickable-row-2"  data-href="/coin-buy" >
        <td class="p-0" colspan="4">
          <div class="btn bg-success text-light border-0 rounded-0 d-flex justify-content-between align-items-center">
            <i class="far fa-arrow-alt-circle-up"></i>
            Купить
            <i class="far fa-arrow-alt-circle-up"></i>
          </div>
        </td>
      </tr>
      <tr>
        <td colspan="4"></td>
      </tr>

      <tr class="bg-success clickable-row-2"  data-href="/coin-buy">
        <td class="p-2" colspan="4"></td>
      </tr>
      <tr class="clickable-row-2"  data-href="/coin-buy">
        <td>Монетный двор</td>
        <td>26.600 Р</td>
        <td>10</td>
        <td>266.000 Р</td>
      </tr>
      <tr class="clickable-row-2"  data-href="/coin-buy" >
        <td class="p-0" colspan="4">
          <div class="btn bg-success text-light border-0 rounded-0 d-flex justify-content-between align-items-center">
            <i class="far fa-arrow-alt-circle-up"></i>
            Купить
            <i class="far fa-arrow-alt-circle-up"></i>
          </div>
        </td>
      </tr>
      <tr>
        <td colspan="4"></td>
      </tr>

      <tr class="bg-success clickable-row-2"  data-href="/coin-buy">
        <td class="p-2" colspan="4"></td>
      </tr>
      <tr class="clickable-row-2"  data-href="/coin-buy">
        <td>Монетный двор</td>
        <td>26.600 Р</td>
        <td>10</td>
        <td>266.000 Р</td>
      </tr>
      <tr class="clickable-row-2"  data-href="/coin-buy" >
        <td class="p-0" colspan="4">
          <div class="btn bg-success text-light border-0 rounded-0 d-flex justify-content-between align-items-center">
            <i class="far fa-arrow-alt-circle-up"></i>
            Купить
            <i class="far fa-arrow-alt-circle-up"></i>
          </div>
        </td>
      </tr>
      <tr>
        <td colspan="4"></td>
      </tr>


      </tbody>
    </table>
  </section>
</template>

<script>
  export default {
    name: 'TableBuy'
  };
</script>

<style scoped>

</style>
