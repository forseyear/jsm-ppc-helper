<template lang='pug'>
div.container
  //-address
  code-editor
  //-registers
</template>

<script>
import CodeEditor from '~/components/code-editor';

export default {
  components: {
    CodeEditor
  },
  data() {

  }
}
</script>

<style lang='stylus'>
div.container
  width 100%
  height 100%
</style>

