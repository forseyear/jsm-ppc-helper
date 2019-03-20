export default {
  addi(rD: register, rA: register, rB: register): void {
    rD.set(rA.get() + rB.get());
  },
};
