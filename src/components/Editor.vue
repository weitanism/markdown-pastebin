<template>
  <textarea id="editor"></textarea>
</template>

<script>
import SimpleMDE from "simplemde";

var editor;

export default {
  name: "Editor",
  data() {
    return {
      editor,
      config: {
        autofocus: true,
        autosave: {
          enabled: true,
          uniqueId: "UniqueID",
          delay: 1000
        },
        forceSync: true,
        indentWithTabs: false,
        initialValue: "# Hello world!\n```\nimport antigravity\n```",
        lineWrapping: false,
        parsingConfig: {
          allowAtxHeaderWithoutSpace: true,
          strikethrough: false,
          underscoresBreakWords: true
        },
        placeholder: "Type here...",
        promptURLs: true,
        renderingConfig: {
          singleLineBreaks: false,
          codeSyntaxHighlighting: true
        },
        spellChecker: true,
        styleSelectedText: true,
        tabSize: 4
      }
    };
  },
  methods: {},
  mounted() {
    editor = new SimpleMDE(this.config);
  }
};
</script>

<style scoped>
/* @import url("../../node_modules/simplemde/src/css/simplemde.css"); */
@import url("https://cdn.jsdelivr.net/simplemde/latest/simplemde.min.css");
</style>
