<template>
  <section>
    <base-card>
      <header>
        <h2>Requests Received</h2>
      </header>
      <ul v-if="hasRequests">
        <RequestsItem
          v-for="(reg,index) in receivedRequests"
          :key="index"
          :email="reg.userEmail"
          :message="reg.message"
        ></RequestsItem>
      </ul>
      <h3 v-else>You haven,t receiced any requests yet!</h3>
    </base-card>
  </section>
</template>

<script>
import RequestsItem from "@/components/requests/RequestsItem.vue";

export default {

  components: {
    RequestsItem,
    
  },
  computed: {
    receivedRequests() {
      return this.$store.getters["requests/requests"];
     
    },
    // ...mapGetters(['requests/requests']),
    hasRequests() {
      return this.$store.getters["requests/hasRequests"];
    },
  },
 
};
</script>
<style scoped>
header {
  text-align: center;
}

ul {
  list-style: none;
  margin: 2rem auto;
  padding: 0;
  max-width: 30rem;
}

h3 {
  text-align: center;
}
</style>
