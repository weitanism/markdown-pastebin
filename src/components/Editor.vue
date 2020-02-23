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
        forceSync: true,
        indentWithTabs: false,
        lineWrapping: false,
        parsingConfig: {
          allowAtxHeaderWithoutSpace: true,
          strikethrough: false,
          underscoresBreakWords: true
        },
        placeholder: "Type here...",
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
  methods: {
    activatePreviewMode(content = null) {
      if (content !== null) {
        this.editor.value(content);
        console.log(content, this.editor.value());
      }
      if (!this.editor.isPreviewActive()) {
        this.editor.togglePreview();
      }
    },
    content() {
      return this.editor.value();
    }
  },
  mounted() {
    if (!editor) {
      this.editor = new SimpleMDE(this.config);
      this.editor.codemirror.on("change", () => this.$emit("change"));
    }
  }
};
</script>

<style scoped>
/* @import url("../../node_modules/simplemde/src/css/simplemde.css"); */
/* @import url("https://cdn.jsdelivr.net/simplemde/latest/simplemde.min.css"); */
</style>
