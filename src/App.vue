<template>
  <div>
    <CNavbar />
    <router-view />
  </div>
</template>

<script>
import {defineComponent} from "vue";
import CNavbar from "@/components/CNavbar.vue";

export default defineComponent({
  components: {CNavbar}
})
</script>
