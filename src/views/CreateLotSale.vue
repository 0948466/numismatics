  <template>
    <section class="coin-lot-sale">
      <nav aria-label="breadcrumb">
        <ol class="breadcrumb bg-transparent pl-2 pl-lg-5">
          <li class="breadcrumb-item"><a href="/">Каталог</a></li>
          <li class="breadcrumb-item"><a href="/coin-card">Распущенные волосы</a></li>
          <li class="breadcrumb-item active" aria-current="page">Создание лота на продажу</li>
        </ol>
      </nav>

      <div class="p-2 p-lg-5">
        <h1 class="mb-4">Создание лота на продажу</h1>

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
                    <input type="number" id="price" class="form-control col-8 col-md-5" aria-describedby="priceHelp" placeholder="От 10 до 10000" min="10" max="10000">
                    <sup id="priceHelp" class="text-muted ml-2 col-3 col-lg-12 p-0 p-md-2">
                      Шаг 10
                    </sup>
                  </div>

                  <div class="form-group row ml-0 mr-0">
                    <label class="col-form-label mr-2" for="quantity">
                      Количество
                    </label>
                    <input type="number" id="quantity" class="form-control  col-8 col-md-5" aria-describedby="quantityHelp" placeholder="От 1 до 500" min="1" max="500">
                    <sup id="quantityHelp" class="text-muted ml-2 col-3 col-lg-12 p-0 p-md-2">
                      Шаг 10
                    </sup>
                  </div>


                  <p>Итого - <span class="result-price"></span> рублей <sup class="text-muted">* с учетом комиссии биржи</sup></p>

                </div>
                <button type="submit" class="btn btn-primary w-100 d-flex justify-content-between align-items-center">
                    <i class="far fa-arrow-alt-circle-up"></i>
                  Хочу продать
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

        <section class="table-sale p-2 p-lg-5 mb-2 mb-lg-5">
          <h2 class="mb-4">Существующие предложения</h2>
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
                <a class="btn d-block btn-primary border-0 rounded-0 d-flex justify-content-between align-items-center" href="/coin-sale">
                  <i class="far fa-arrow-alt-circle-up"></i>
                  Продать
                  <i class="far fa-arrow-alt-circle-up"></i>
                </a>
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
                <a class="btn d-block btn-primary border-0 rounded-0 d-flex justify-content-between align-items-center" href="/coin-sale">
                  <i class="far fa-arrow-alt-circle-up"></i>
                  Продать
                  <i class="far fa-arrow-alt-circle-up"></i>
                </a>
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
                <a class="btn d-block btn-primary border-0 rounded-0 d-flex justify-content-between align-items-center" href="/coin-sale">
                  <i class="far fa-arrow-alt-circle-up"></i>
                  Продать
                  <i class="far fa-arrow-alt-circle-up"></i>
                </a>
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
      name: 'CreateLotSale',
      mounted() {
        const quantityInput = $('#quantity')
        const priceInput = $('#price')

        if (!quantityInput.length) {
          return
        }

        const resultPrice = $('.result-price')

        function changeResult() {
          try {
            let result = quantityInput.val() * priceInput.val()

            if (result !== result) {
              result = 0
            }
            resultPrice.text(result)
          } catch (e) {
            console.error(e)
          }

        }

        changeResult()

        quantityInput.on('input', changeResult)
        priceInput.on('input', changeResult)
      }
    };
  </script>

  <style scoped>

  </style>
