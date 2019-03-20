<template lang='pug'>
  div.registers-container
    register(
      v-for='(regi, index, key) in registers',
      :name='regi.name',
      :value='regi.value',
      :index='index',
      :key='key'
    )
</template>

<script>
import Register from '~/components/register';

import Add from '~/asm/add';
import TypeClasses from '~/type-classes';
export default {
  components: {
    Register
  },
  data() {
    return {
      registers: [
        { name: 'r1', value: '00000000' },
        { name: 'r2', value: '00000000' },
        { name: 'r3', value: '00000000' },
        { name: 'r4', value: '00000000' },
        { name: 'r5', value: '00000000' },
        { name: 'r6', value: '00000000' },
        { name: 'r7', value: '00000000' },
        { name: 'r8', value: '00000000' },
        { name: 'r9', value: '00000000' },
        { name: 'r10', value: '00000000' },
        { name: 'r11', value: '00000000' },
        { name: 'r12', value: '00000000' },
        { name: 'r13', value: '00000000' },
        { name: 'r14', value: '00000000' },
        { name: 'r15', value: '00000000' },
        { name: 'r16', value: '00000000' },
        { name: 'r17', value: '00000000' },
        { name: 'r18', value: '00000000' },
        { name: 'r19', value: '00000000' },
        { name: 'r20', value: '00000000' },
        { name: 'r21', value: '00000000' },
        { name: 'r22', value: '00000000' },
        { name: 'r23', value: '00000000' },
        { name: 'r24', value: '00000000' },
        { name: 'r25', value: '00000000' },
        { name: 'r26', value: '00000000' },
        { name: 'r27', value: '00000000' },
        { name: 'r28', value: '00000000' },
        { name: 'r29', value: '00000000' },
        { name: 'r30', value: '00000000' },
        { name: 'r31', value: '00000000' }
      ],
    };
  },
  mounted() {
    const R = new TypeClasses.register(this.registers[0].value);
    Add.addi(R, new TypeClasses.register(23), new TypeClasses.register(34));
    this.registers[0].value = `${R.get()}`;
    console.log(R.get());
  }
};
</script>

<style lang='stylus' scoped>
</style>
