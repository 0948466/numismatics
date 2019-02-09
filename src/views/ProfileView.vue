<template>
  <section class="profile-view">
    <Profile/>
    <LastBids/>
    <LastOrder/>
  </section>
</template>

<script>
  import Profile from "../components/Profile";
  import LastBids from "../components/LastBids";
  import LastOrder from "../components/LastOrder";
  export default {
    name: "ProfileView",
    components: {LastOrder, LastBids, Profile}
  }
</script>