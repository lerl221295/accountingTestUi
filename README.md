# Accounting UI #

Accounting test Proyect

## Antes de empezar tu prueba, asegurate de correr el API localmente -> https://github.com/lerl221295/accountingTestApi

Stack:
* React (https://reactjs.org/)
* Redux (https://redux.js.org/introduction)
* Redux-Saga (https://github.com/redux-saga/redux-saga)
* Immutable.js (https://facebook.github.io/immutable-js/)
* Jest (https://jestjs.io/)
* Docker (https://www.docker.com/)

Basado en create-react-app. Para más opciones de configuración visite: https://github.com/facebook/create-react-app/blob/master/packages/react-scripts/template/README.md


## What is this repository for?

* js SRC
* js unit test
* Docker & test


## Available Scripts

### `npm run start`

Inicia la app en development mode.<br>
En el browser: [http://localhost:3000](http://localhost:3000).

Realizar hot-reaload con la edición del código.<br>
Muestra errores de código y del linter por pantalla.

### `npm run test`

Inicia la suite de testing Jest en modo interactivo.<br>
Mas información: [running tests](https://facebook.github.io/create-react-app/docs/running-tests).

### `npm run test:watch`

Realiza la ejecución de test y la generación del reporte de coverage.

### `npm run build`

Construye la app para producción en la carpeta `build`.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

Genera una versión minificada y optimizada lista para deployment.<br>
Más información: [deployment](https://facebook.github.io/create-react-app/docs/deployment).

### `npm run docker:build`

Realiza el build de una imagen de docker de la app.<br>
Se debe configurar el entorno requerido en la carpeta envs/.<br>
Actualizar el nombre de las variables IMAGE y CONTAINER de scripts/docker-builder.sh según corresponda.

### `npm run docker:run`

Inicia la aplicación a través de docker corriendo la imagen establecida en IMAGE y las configuraciones del ENV.


## Alternative run with Docker

* docker build -t lrojas/accounting-ui .
* docker run --env-file=config/envs/development.env -p 8081:80 --rm -it lrojas/accounting-ui


## Contribution guidelines

* Write tests!
* Code review
