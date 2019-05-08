import { fetchData } from '../utils';

/**
 * API Services
 *
 * @export
 * @class BackendService
 */
class BackendService {
  constructor(config) {
    // INFO: config de la URL de la API, la opción por la variable window es en caso
    // de que Kubernetes setee las vars despues del build que ya usa el process.env
    this.apiURL = config.API_URL;

    this.getData = this.getData.bind(this);
  }

  /**
   * Service call
   *
   * @returns {Promise} Respuesta del endpoint
   * @memberof BackendService
   */
  getData() {
    const options = {
      method: 'get',
      headers: {
        Accept: 'application/json'
      }
    };
    let url = '/transactions';

    if (this.apiURL) {
      url = `${this.apiURL + url}`;
    }

    return fetchData(url, options);
  }

}

export default new BackendService(window.AppENV || {});
