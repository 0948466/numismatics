<template>
  <section class="coin-lot-buy">
    <nav aria-label="breadcrumb">
      <ol class="breadcrumb bg-transparent pl-2 pl-lg-5">
        <li class="breadcrumb-item"><a href="/">Каталог</a></li>
        <li class="breadcrumb-item"><a href="/coin-card">Распущенные волосы</a></li>
        <li class="breadcrumb-item active" aria-current="page">Создание лота на покупку</li>
      </ol>
    </nav>

    <div class="p-2 p-lg-5">
      <h1>Создание лота на покупку</h1>

      <form action="#">
        <div class="container-fluid">
          <div class="row">
            <div class="col-md-6 mb-3">
              <h5>Информация о сделке</h5>
              <div class="border p-4">
                <p>Монета - "Распущенные волосы"</p>

                <p>Упаковка -
                  <select class="selectpicker" data-live-search="true">
                    <option>Монетный двор</option>
                    <option>Монетный двор 2</option>
                    <option>Монетный двор 3</option>
                  </select>
                </p>


                <div class="form-group row ml-0 mr-0">
                  <label class="col-form-label mr-2" for="price">
                    Цена за штуку
                  </label>
                  <input type="text" id="price" class="form-control col-5 " aria-describedby="priceHelp" placeholder="От 10 до 10000">
                  <sup id="priceHelp" class="text-muted ml-2">
                    Шаг 10
                  </sup>
                </div>

                <div class="form-group row ml-0 mr-0">
                  <label class="col-form-label mr-2" for="quantity">
                    Количество
                  </label>
                  <input type="text" id="quantity" class="form-control col-5 " aria-describedby="quantityHelp" placeholder="От до 500">
                  <sup id="quantityHelp" class="text-muted ml-2">
                    Шаг 10
                  </sup>
                </div>


                <p>Итого - 345 850 рублей <sup class="text-muted">* с учетом комиссии биржи</sup></p>

              </div>
              <button type="submit" class="btn btn-success w-100">
                Хочу купить
              </button>
            </div>
            <div class="col-md-6 mb-3">
              <h5>Оферта</h5>
              <div class="border p-4">
                <ol class="pl-3 pr-3">
                  <li>Комиссия биржи составляет 1%</li>
                  <li>Здесь описано важное правило</li>
                  <li>Здесь описано важное правило</li>
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

      <section class="table-buy p-2 p-lg-5 mb-2 mb-lg-5">
        <h2 class="mb-3">Существующие предложения</h2>

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


          <tr class="bg-success">
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
              <a class="btn d-block btn-success border-0 rounded-0" href="/coin-buy">Купить</a>
            </td>
          </tr>


          <tr>
            <td colspan="4"></td>
          </tr>


          <tr class="bg-success">
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
              <a class="btn d-block btn-success border-0 rounded-0" href="/coin-buy">Купить</a>
            </td>
          </tr>


          <tr>
            <td colspan="4"></td>
          </tr>


          <tr class="bg-success">
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
              <a class="btn d-block btn-success border-0 rounded-0" href="/coin-buy">Купить</a>
            </td>
          </tr>

          <tr>
            <td colspan="4"></td>
          </tr>


          </tbody>
        </table>
      </section>


    </div>
  </section>
</template>

<script>
  export default {
    name: 'CreateLotBuy'
  };
</script>

<style scoped>

</style>
