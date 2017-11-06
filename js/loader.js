const SERVER_URL = `https://es.dump.academy/pixel-hunter`;

export default class Loader {
  static loadData() {
    return fetch(`${SERVER_URL}/questions`).then((res) => res.json()).catch(window.console.error);
  }

  static loadResults(name) {
    return fetch(`${SERVER_URL}/stats/${name}`).then((res) => res.json()).catch(window.console.error);
  }

  static saveResults(data, name) {
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
