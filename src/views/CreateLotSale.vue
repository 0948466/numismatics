  <template>
    <section class="coin-sale">
      <nav aria-label="breadcrumb">
        <ol class="breadcrumb bg-transparent pl-2 pl-lg-5">
          <li class="breadcrumb-item"><a href="/">Каталог</a></li>
          <li class="breadcrumb-item"><a href="/coin-card">Распущенные волосы</a></li>
          <li class="breadcrumb-item active" aria-current="page">Создание лота на продажу</li>
        </ol>
      </nav>

      <div class="p-2 p-lg-5">
        <h1>Создание лота на продажу</h1>

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


                  <div class="form-group row">
                    <label class="col-sm-3 col-form-label" for="Packaging">Упаковка</label>
                    <div class="col-sm-5">
                      <input type="text" id="Packaging" class="form-control" aria-describedby="packagingHelp">
                    </div>
                    <small id="packagingHelp" class="text-muted col-sm-3">
                      Шаг 10
                    </small>
                  </div>


                  <label>
                    Цена за штуку
                    <input placeholder="от 10 до 10000">
                  </label>
                  <p>Количество - 13 штук</p>
                  <label>
                    Количество
                    <input type="text" placeholder="от 1 до 500" required>
                  </label>
                  <p>Итого - 345 850 рублей</p>
                  <label>
                    Комментарий к заказу
                    <input type="text">
                  </label>
                </div>
                <button type="submit" class="btn btn-primary w-100">
                  Продать
                </button>
              </div>
              <div class="col-md-6 mb-3">
                <h5>Оферта</h5>
                <div class="border p-4">
                  <ol>
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

      </div>
    </section>
  </template>

  <script>
    export default {
      name: 'CreateLotSale'
    };
  </script>

  <style scoped>

  </style>
