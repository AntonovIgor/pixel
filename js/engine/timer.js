export const timer = {

  tick: (time) => {
    const interval = setInterval(() => {
      if (time > 0) {
        time = time - 1;
      } else {
        stopFn();
      }
    }, 1);

    const stopFn = () => {
      clearInterval(interval);
    };
  }
};
