<template>
  <section class="about-us">
    <TopIndex/>
    <div class="p-5">
        <div class="mb-5">
          <div class="container-fluid">
            <div class="row justify-content-between">
              <h2 class="mb-3">Правила</h2>
              <a href="#" class="btn-link">Скачать правила</a>
            </div>
          </div>
          <p class=""> Lorem Ipsum является стандартной "рыбой" для текстов на латинице с начала XVI века. В то время некий безымянный печатник создал большую коллекцию размеров и форм шрифтов, используя Lorem Ipsum для распечатки образцов. Lorem Ipsum не только успешно пережил без заметных изменений пять веков, но и перешагнул в электронный дизайн. Его популяризации в новое время послужили публикация листов Letraset с образцами Lorem Ipsum в 60-х годах и, в более недавнее время, программы электронной вёрстки типа Aldus PageMaker, в шаблонах которых используется Lorem Ipsum.</p>
        </div>
      <div class="mb-5">
        <div class="container-fluid">
          <div class="row justify-content-between">
            <h2 class="mb-3">Пользовательское соглашение</h2>
            <a href="#" class="btn-link">Скачать соглашение</a>
          </div>
        </div>
          <p class=""> Lorem Ipsum является стандартной "рыбой" для текстов на латинице с начала XVI века. В то время некий безымянный печатник создал большую коллекцию размеров и форм шрифтов, используя Lorem Ipsum для распечатки образцов. Lorem Ipsum не только успешно пережил без заметных изменений пять веков, но и перешагнул в электронный дизайн. Его популяризации в новое время послужили публикация листов Letraset с образцами Lorem Ipsum в 60-х годах и, в более недавнее время, программы электронной вёрстки типа Aldus PageMaker, в шаблонах которых используется Lorem Ipsum.</p>
      </div>
      <div class="mb-5">
        <h2 class="mb-3">Доставка</h2>
        <p class=""> Lorem Ipsum является стандартной "рыбой" для текстов на латинице с начала XVI века. В то время некий безымянный печатник создал большую коллекцию размеров и форм шрифтов, используя Lorem Ipsum для распечатки образцов. Lorem Ipsum не только успешно пережил без заметных изменений пять веков, но и перешагнул в электронный дизайн. Его популяризации в новое время послужили публикация листов Letraset с образцами Lorem Ipsum в 60-х годах и, в более недавнее время, программы электронной вёрстки типа Aldus PageMaker, в шаблонах которых используется Lorem Ipsum.</p>
      </div>
      <div class="mb-5">
        <h2 class="mb-3">Контакты</h2>

        <div class="container-fluid">
          <div class="row justify-content-start">
            <div class="pl-0 pr-md-5 border-right">
              <p>Email - <span>test@test.test</span></p>
              <p class="mb-0">Phone - <span>+7(000)123-45-67</span></p>
            </div>
            <div class="pl-md-5">
              <p>ООО "Кукумбер"</p>
              <p class="mb-0">Юр. адрес - <span>Москва, ул. Тверская д.20</span></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>

  import TopIndex from '../components/TopIndex';
  export default {
    name: 'AboutUs',
    components: { TopIndex },
  }
</script>
