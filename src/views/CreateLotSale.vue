  <template>
    <section class="coin-lot-sale">
      <Breadcrumb :items="[{link: 'home', text: 'Каталог'}, {link: 'coin-card', text: 'Распущенные волосы'}, { text: 'Создание лота на продажу'}]"/>

    <div class="p-2 p-md-3">
      <h1 class="mb-4">Создание лота на продажу</h1>

        <form action="#" class="mb-5">
          <div class="container-fluid">
            <div class="row">
              <div class="col-md-6 mb-3 p-0 pr-md-2">
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
                    <input type="number" id="price" class="form-control col-8 col-md-5" name="price" aria-describedby="priceHelp" placeholder="От 10 до 10000" min="10" max="10000">
                    <sup id="priceHelp" class="text-muted">
                      Шаг 10
                    </sup>
                  </div>

                  <div class="form-group row ml-0 mr-0">
                    <label class="col-form-label mr-2" for="quantity">
                      Количество
                    </label>
                    <input type="number" id="quantity" class="form-control  col-8 col-md-5" name="quantity" aria-describedby="quantityHelp" placeholder="От 1 до 500" min="1" max="500">
                    <sup id="quantityHelp" class="text-muted">
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
              <div class="col-md-6 mb-3 p-0 pl-md-2">
                <h5>Оферта</h5>
                <div class="border p-4">
                  <ol class="pl-3 pr-3">
                    <li class="mb-2">Комиссия биржи составляет 1%</li>
                    <li class="mb-2">Здесь описано важное правило</li>
                    <li class="mb-2">Здесь описано важное правило</li>
                  </ol>
                  <div class="form-check">
                    <input type="checkbox" class="form-check-input" id="submitRules" name="submit-rules">
                    <label class="form-check-label" for="submitRules">Я ознакомился с правилами и офертой</label>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </form>

        <section class="table-sale">
          <h2 class="mb-4">Существующие предложения</h2>

          <TableSaleContent link="/coin-sale"/>
        </section>
      </div>
    </section>
  </template>

  <script>
    import TableSaleContent from "../components/TableSaleContent";
    import Breadcrumb from "../components/Breadcrumb";
    export default {
      name: 'CreateLotSale',
      components: {Breadcrumb, TableSaleContent},
    };
  </script>

  <style scoped>

  </style>
