<template lang='pug'>
  div.address
    div.label-box
      label address:
    text-box(
      :value='value'
    )
</template>

<script>
import Config from '~/config';
import TextBox from '~/components/text-box';

export default {
  props: {
    value: String
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
  width 85px
</style>

