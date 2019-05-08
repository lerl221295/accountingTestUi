/* eslint-disable react/destructuring-assignment */

/**
 * Descarga de de datos usando Fetch
 *
 * @param  {*}       url     URL para solicitar datos
 * @param  {*}       options opciones del Request
 * @return {Promise}         Fetch promise
 */
export const fetchData = (url, options) => {
    const fetchRequest = new Request(url,
      Object.assign({}, options || {}, {credentials: 'omit'}));

    return fetch(fetchRequest)
        .then((response) => {
            if (!response.ok) {
                return response.json()
                    .then((result) => {
                        let message = result.message || result['error-message'] || result.details;

                        if (result.code) {
                            message = `${message}\n (Code: ${result.code})`;
                        }

                        throw Error(
                            message,
                            {
                                status: response.status,
                                statusText: response.statusText,
                                result
                            }
                        );
                    });
            }

            return response.json()
                .then((result) => ({ result }));
        });
};

/**
 * Verifica si una lista de propiedades están definidas en el objeto
 *
 * @param  {*}      props  Props a buscar
 * @param  {*}      objeto Objeto a verificar props
 * @return {Object}        Tupla de status y props encontradas
 */
export const checkifPropertiesExist = (props, objeto) => {
    const propsArray = Array.isArray(props) ? props : [props.toString()];

    const result = {
        status: false,
        keys: []
    };

    result.keys = propsArray.map((item) => {
        result.status = Object.prototype.hasOwnProperty.call(objeto, item);

        return (result.status) ? item : null;
    }).filter((item) => item);

    return result;
};
