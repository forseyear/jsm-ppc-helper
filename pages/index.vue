<template lang='pug'>
  div.container
    div.grid-cell.grid-cell-editor
      div.address-container
        address-box(
          :value='address'
        )
      code-editor
    div.grid-cell.grid-cell-registers
      div.registers-container
        registers
    div.grid-cell.grid-cell-memories
      div.memories-container
        //- memories(検索box, viewer, logger)
</template>

<script>
import AddressBox from '~/components/address-box';
import CodeEditor from '~/components/code-editor';
import Registers from '~/components/registers';

export default {
  components: {
    AddressBox,
    CodeEditor,
    Registers
  },
  data() {
    return {
      address: '00000000',
      memories: []// ? 変更後だけ配列？
    };
  }
};
</script>

<style lang='stylus' scoped>
.container
  background-color #212121
  color #fefefe
  display grid
  grid-template-columns 1fr 1fr 1fr 1fr 1fr 1fr
  grid-gap 10px
.grid-cell
  display inline-grid
  margin 10px
.grid-cell-editor
  grid-column 1 / 3
.grid-cell-registers
  grid-column 4
.grid-cell-memories
  grid-column 5 / 6
</style>
