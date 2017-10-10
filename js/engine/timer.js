export const getTimer = (time) => {
  return {
    value: time,
    tick() {
      return getTimer(time + 1);
    },
    reset() {
      return getTimer(0);
    }
  };
};
