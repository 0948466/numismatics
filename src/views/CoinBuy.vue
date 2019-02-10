<template>
  <section class="coin-buy">
    <nav aria-label="breadcrumb">
      <ol class="breadcrumb bg-transparent pl-2 pl-lg-5">
        <li class="breadcrumb-item"><a href="/">Каталог</a></li>
        <li class="breadcrumb-item"><a href="/coin-card">Распущенные волосы</a></li>
        <li class="breadcrumb-item active" aria-current="page">Покупка монеты</li>
      </ol>
    </nav>

    <div class="p-2 p-lg-5">
      <h1>Покупка монеты</h1>

      <form action="#">
        <div class="container-fluid">
          <div class="row">
            <div class="col-md-6 mb-3">
              <h5>Информация о сделке</h5>
              <div class="border p-4">
                <p>Монета - "Распущенные волосы"</p>
                <p>Упаковка - Монетный двор</p>
                <p>Цена за штуку - 26450 рублей</p>
                <p>Количество - 13 штук</p>
                <p>Итого - 345 850 рублей <sup class="text-muted">* с учетом комиссии биржи</sup></p>
                <label>
                  Комментарий к заказу
                  <input type="text" class="w-100 mt-2">
                </label>
              </div>
              <button type="submit" class="btn btn-success w-100 d-flex justify-content-between align-items-center">
                <i class="far fa-arrow-alt-circle-up"></i>
                Купить
                <i class="far fa-arrow-alt-circle-up"></i>
              </button>
            </div>
            <div class="col-md-6 mb-3">
              <h5>Оферта</h5>
              <div class="border p-4">
                <ol class="pl-3 pr-3">
                  <li class="mb-2">Комиссия биржи составляет 1%</li>
                  <li class="mb-2">Здесь описано важное правило</li>
                  <li class="mb-2">Здесь описано важное правило</li>
                </ol>
                <div class="form-check">
                  <input type="checkbox" class="form-check-input" id="submitRules">
                  <label class="form-check-label" for="submitRules">Я ознакомился с правилами и офертой</label>
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>

    </div>
  </section>

</template>

<script>
  export default {
    name: 'CoinBuy'
  };
</script>

<style scoped>

</style>
