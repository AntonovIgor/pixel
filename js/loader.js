const SERVER_URL = `https://es.dump.academy/pixel-hunter/questions`;

export default class Loader {
  static loadData() {
    return fetch(`${SERVER_URL}`).then((res) => res.json());
  }
}