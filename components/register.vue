<template lang='pug'>
  div.register
    div.label-box
      label {{ name }}:
    text-box(
      :value='value'
    )
</template>

<script>
import Config from '~/config';
import TextBox from '~/components/text-box';

export default {
  props: {
    name: String,
    value: String,
    index: Number
  },
  components: {
    TextBox
  },
  data() {
    return {
    };
  }
};
</script>

<style lang='stylus' scoped>
div.label-box
  display inline-block
  width 45px
</style>

