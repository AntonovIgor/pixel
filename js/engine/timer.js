export class Timer {
  constructor(time) {
    this.value = time;
    this.duration = time;
    this.message = `Время истекло`;
  }

  tick() {
    return this.value > 0 ? this.value - 1 : this.message;
  }

  reset() {
    this.value = this.duration;
    return this.value;
  }
}
