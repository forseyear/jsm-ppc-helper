<template lang='pug'>
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
    }
  }
}
</script>

<style lang='stylus'>
div.editor
  width 300px
  height 500px
</style>

