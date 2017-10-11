export const getTimer = (time) => {
  return {
    value: time,
    tick() {
      return this.value > 0 ? getTimer(this.value - 1) : `stop`;
    },
    reset() {
      return getTimer(0);
    }
  };
};
