const SERVER_URL = `https://es.dump.academy/pixel-hunter`;
const USER_NAME = `Evgeniy777`;

export default class Loader {
  static loadData() {
    return fetch(`${SERVER_URL}/questions`).then((res) => res.json());
  }

  static loadResults(name = USER_NAME) {
    return fetch(`${SERVER_URL}/stats/${name}`).then((res) => res.json());
  }

  static saveResults(data, name = USER_NAME) {
    const requestSettings = {
      body: JSON.stringify(data),
      headers: {
        'Content-Type': `application/json`
      },
      method: `POST`
    };
    return fetch(`${SERVER_URL}/stats/${name}`, requestSettings);
  }
}
