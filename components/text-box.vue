<template lang='pug'>
  input(
    type='text',
    :value='value'
  )
</template>

<script>
import Config from '~/config';

export default {
  props: {
    value: String
  },
  components: {
  },
  data() {
    return {
    };
  }
};
</script>

<style lang='stylus' scoped>
input
  border 1px solid #112299
  background-color #1e1e1e
  color #fefefe
  width 80px
</style>

