<template>
  <section class="table-sale p-2 p-lg-5 border-bottom mb-2 mb-lg-5">
    <div class="container-fluid">
      <div class="row justify-content-between align-items-center">
        <h2 class="mb-3">Продать монеты</h2>
        <a href="/create-lot-sale" class="btn btn-outline-dark mb-2 mb-sm-0">Создать лот на продажу</a>
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


      <tr class="bg-primary">
        <td class="p-2" colspan="4"></td>
      </tr>
      <tr>
        <td>Монетный двор</td>
        <td>26.600 Р</td>
        <td>10</td>
        <td>266.000 Р</td>
      </tr>
      <tr>
        <td class="p-0" colspan="4">
          <a class="btn d-block btn-primary border-0 rounded-0" href="/coin-sale">Продать</a>
        </td>
      </tr>


      <tr>
        <td colspan="4"></td>
      </tr>


      <tr class="bg-primary">
        <td class="p-2" colspan="4"></td>
      </tr>
      <tr>
        <td>Монетный двор</td>
        <td>26.600 Р</td>
        <td>10</td>
        <td>266.000 Р</td>
      </tr>
      <tr>
        <td class="p-0" colspan="4">
          <a class="btn d-block btn-primary border-0 rounded-0" href="/coin-sale">Продать</a>
        </td>
      </tr>


      <tr>
        <td colspan="4"></td>
      </tr>


      <tr class="bg-primary">
        <td class="p-2" colspan="4"></td>
      </tr>
      <tr>
        <td>Монетный двор</td>
        <td>26.600 Р</td>
        <td>10</td>
        <td>266.000 Р</td>
      </tr>
      <tr>
        <td class="p-0" colspan="4">
          <a class="btn d-block btn-primary border-0 rounded-0" href="/coin-sale">Продать</a>
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
    name: 'TableSale'
  };
</script>

<style scoped>

</style>
