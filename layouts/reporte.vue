<template>
  <div>
    <TheHeader />
    <Nuxt />
    <TheFooter />
  </div>
</template>
<script>
import TheHeader from "@/components/UI/header.vue";
import TheFooter from "@/components/UI/footer.vue";
export default {
  components:{TheHeader, TheFooter}
}
</script>
