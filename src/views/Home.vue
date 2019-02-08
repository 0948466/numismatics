<template>
  <div class="home">
    <TopIndex/>
    <div class="container-fluid p-2 p-lg-5">
      <div class="row">
        <div class="col-lg-3">
          <Filters/>
        </div>
        <div class="col-lg-9">
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
  components: {
    Catalog,
    Filters,
    TopIndex,
  },
};
</script>
