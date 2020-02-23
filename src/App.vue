<template>
  <div id="app">
    <Header v-bind:link="link" v-on:share="share"></Header>
    <Editor ref="editor" v-on:change="onChange"></Editor>
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
      link: "",
      fileId: new URLSearchParams(window.location.search).get("id")
    };
  },
  methods: {
    share() {
      let content = this.$refs.editor.content();
      if (!content) {
        alert("Can not share with empty content!");
        return;
      }
      this.uploadContentAsFile(content).then(fileId => {
        this.link = `${window.location.origin}/?id=${fileId}`;
      });
    },
    showFile(fileId) {
      this.featchFile(fileId).then(content => {
        this.$refs.editor.activatePreviewMode(content);
        this.link = `${window.location.origin}/?id=${fileId}`;
      });
    },
    uploadContentAsFile(content) {
      return this.$http
        .post("/api/upload", { content: content })
        .then(response => response.body.fileId);
    },
    featchFile(fileId) {
      return this.$http.get(`/api/file/${fileId}`).then(
        response => {
          return response.body.content;
        },
        response => {
          console.log(response);
          return null;
        }
      );
    },
    onChange() {
      this.link = "";
    }
  },
  mounted() {
    if (this.fileId) {
      this.showFile(this.fileId);
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
