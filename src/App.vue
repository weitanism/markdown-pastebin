<template>
  <div id="app">
    <Header v-bind:link="link" v-on:share="share"></Header>
    <Editor></Editor>
  </div>
</template>

<script>
import Header from "./components/Header";
import Editor from "./components/Editor.vue";

export default {
  name: "App",
  components: {
    Header,
    Editor
  },
  data() {
    return {
      link: ""
    };
  },
  methods: {
    share() {
      // TODO: Save the content to the server and get the perma-link.
      console.log("share");
      this.link = "I'm a link";
    }
  }
};
</script>

<style>
html,
body {
  margin: 0;
}

#app {
  font-family: Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  padding: 0 60px;
}
</style>
