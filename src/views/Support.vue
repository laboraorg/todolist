<template>
  <div class="about">
    <img alt="Vue logo" src="../assets/logo.png" />
    <Support msg="Vue provide technical support" />
  </div>
</template>
<script>
// @ is an alias to /src
import Support from "@/components/Support.vue";

export default {
  name: "About",
  components: {
    Support
  }
};
</script>
