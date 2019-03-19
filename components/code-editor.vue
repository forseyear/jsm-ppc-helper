<template lang='pug'>
  div.editor-container
    monaco-editor.editor(v-model="code" theme="vs-dark")
</template>

<script>
import MonacoEditor from 'vue-monaco';
import Config from '~/config';

export default {
  components: {
    MonacoEditor
  },
  data() {
    return {
      code: Config.code
    };
  }
};
</script>

<style lang='stylus' scoped>
div.editor
  width 300px
  height 500px
</style>

