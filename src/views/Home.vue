<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <Hello msg="Welcome to Laboratory organization" />
  </div>
</template>

<script>
// @ is an alias to /src
import Hello from "@/components/Hello.vue";

export default {
  name: "Home",
  components: {
    Hello
  }
};
</script>
