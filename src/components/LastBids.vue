<template>
  <section class="last-bids pt-3 pt-md-5 pb-3 border-bottom mb-2">
      <div class="container-fluid p-0">
        <div class="row justify-content-between align-items-center m-0 mb-4">
          <h2 class="mb-3">Последние заявки</h2>
          <!--<a href="/" class="btn btn-outline-dark mb-2 mb-sm-0">Открыть каталог</a>-->
        </div>

        <div class="last-bids__empty border text-center p-3">
          <p>Вы не провели ни одной сделки<br>
             Начните торговлю прямо сейчас.</p>
          <a href="/" class="btn btn-outline-dark col-5">В каталог</a>
        </div>


        <!--<table class="table table-striped table-responsive-lg">-->
          <!--<thead>-->
          <!--<tr>-->
            <!--<th scope="col">Тип заявки</th>-->
            <!--<th scope="col">Дата</th>-->
            <!--<th scope="col">Лот</th>-->
            <!--<th scope="col">Объем</th>-->
            <!--<th scope="col">Цена</th>-->
            <!--<th scope="col">Итого</th>-->
            <!--<th scope="col">Статус</th>-->
          <!--</tr>-->
          <!--</thead>-->
          <!--<tbody>-->
          <!--<tr class='clickable-row' data-href='/bid'>-->
            <!--<td>-->
              <!--<p class="text-success">Покупка</p>-->
            <!--</td>-->
            <!--<td>-->
             <!--20.01.2019-->
            <!--</td>-->
            <!--<td>Петр 1<br>-->
              <!--5 ₽</td>-->
            <!--<td>250 шт.</td>-->
            <!--<td>1000 ₽</td>-->
            <!--<td>25 000 ₽</td>-->
            <!--<td>-->
              <!--<p class="text-info">-->
                <!--<i class="fas fa-exclamation-circle"></i>-->
                <!--На проверке-->
              <!--</p>-->
            <!--</td>-->
          <!--</tr>-->
          <!--<tr class='clickable-row' data-href='/bid'>-->
            <!--<td>-->
              <!--<p class="text-primary">Продажа</p>-->
            <!--</td>-->
            <!--<td>-->
             <!--20.01.2019-->
            <!--</td>-->
            <!--<td>Петр 1<br>-->
              <!--5 ₽</td>-->
            <!--<td>250 шт.</td>-->
            <!--<td>1000 ₽</td>-->
            <!--<td>25 000 ₽</td>-->
            <!--<td>-->
              <!--<p class="text-success">-->
                <!--<i class="fas fa-check-circle"></i>-->
                <!--Одобрено-->
              <!--</p>-->
            <!--</td>-->
          <!--</tr>-->
          <!--<tr class='clickable-row' data-href='/bid'>-->
            <!--<td>-->
              <!--<p class="text-primary">Продажа</p>-->
            <!--</td>-->
            <!--<td>-->
             <!--20.01.2019-->
            <!--</td>-->
            <!--<td>Петр 1<br>-->
              <!--5 ₽</td>-->
            <!--<td>250 шт.</td>-->
            <!--<td>1000 ₽</td>-->
            <!--<td>25 000 ₽</td>-->
            <!--<td>-->
              <!--<p class="text-danger">-->
                <!--<i class="fas fa-times-circle"></i>-->
                <!--Отклонено-->
              <!--</p>-->
            <!--</td>-->
          <!--</tr>-->
          <!--<tr class='clickable-row' data-href='/bid'>-->
            <!--<td>-->
              <!--<p class="text-success">Покупка</p>-->
            <!--</td>-->
            <!--<td>-->
              <!--20.01.2019-->
            <!--</td>-->
            <!--<td>Петр 1<br>-->
              <!--5 ₽</td>-->
            <!--<td>250 шт.</td>-->
            <!--<td>1000 ₽</td>-->
            <!--<td>25 000 ₽</td>-->
            <!--<td>-->
              <!--<p class="text-info">-->
                <!--<i class="fas fa-exclamation-circle"></i>-->
                <!--На проверке-->
              <!--</p>-->
            <!--</td>-->
          <!--</tr>-->
          <!--<tr class='clickable-row' data-href='/bid'>-->
            <!--<td>-->
              <!--<p class="text-primary">Продажа</p>-->
            <!--</td>-->
            <!--<td>-->
              <!--20.01.2019-->
            <!--</td>-->
            <!--<td>Петр 1<br>-->
              <!--5 ₽</td>-->
            <!--<td>250 шт.</td>-->
            <!--<td>1000 ₽</td>-->
            <!--<td>25 000 ₽</td>-->
            <!--<td>-->
              <!--<p class="text-success">-->
                <!--<i class="fas fa-check-circle"></i>-->
                <!--Одобрено-->
              <!--</p>-->
            <!--</td>-->
          <!--</tr>-->

          <!--</tbody>-->
        <!--</table>-->

        <!--<div class="text-right">-->
          <!--<a href="/bids" class="btn-link">Открыть все заявки</a>-->
        <!--</div>-->
      </div>

  </section>

</template>

<script>
  export default {
    name: "LastBids"
  }
</script>

<style scoped>

</style>
