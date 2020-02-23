<template>
  <div class="container">
    <h1>Markdown Pastebin</h1>
    <Share id="share" v-bind:link="link" v-on:share="share"></Share>
  </div>
</template>

<script>
import Share from "./Share";

export default {
  name: "Header",
  props: ["link"],
  components: {
    Share
  },
  methods: {
    share() {
      this.$emit("share");
    }
  }
};
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}
</style>
