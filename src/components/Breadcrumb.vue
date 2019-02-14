<template>
  <nav aria-label="breadcrumb">
    <ol class="breadcrumb bg-transparent px-2 px-md-3">
      <template v-for="item in items">
        <li v-if="item.link" class="breadcrumb-item">
          <router-link :to="{ name: item.link }">{{ item.text }}</router-link>
        </li>

        <li v-else class="breadcrumb-item active" aria-current="page">
          {{ item.text }}
        </li>
      </template>
    </ol>
  </nav>
</template>

<script>
  export default {
    name: "Breadcrumb",
    props: ['items']
  }
</script>

<style scoped>

</style>
