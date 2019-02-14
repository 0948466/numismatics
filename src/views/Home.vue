<template>
  <div class="home">
    <TopIndex/>
    <div class="container-fluid">
      <div class="row">
        <div class="col-lg-3 p-0">
          <Filters/>
        </div>
        <div class="col-lg-9 p-0">
          <Catalog/>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
// @ is an alias to /src
import TopIndex from '../components/TopIndex';
import Filters from '../components/Filters';
import Catalog from '../components/Catalog';

export default {
  name: 'home',
  mounted() {
    const clickableRow = $('.clickable-row')
    if (clickableRow.length) {
  clickableRow.click(function() {
    window.location = $(this).data('href');
  });
}
const clickableRow2 = $('.clickable-row-2')
if (clickableRow2.length) {
  clickableRow2.click(function() {
    window.location = $(this).data('href');
  });
}
  },
  components: {
    Catalog,
    Filters,
    TopIndex,
  },
};
</script>
