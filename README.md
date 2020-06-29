# Peliculiando-ando

Prueba técnica GFI - Ditech

El resultado de la prueba se puede ver en el siguiente link -> [Peliculiando-ando](https://peliculiando-ando.web.app/).

### Dependencias del proyecto

node versión 12.11.1 o superior -> [descarga node](https://nodejs.org/)
angular/cli versión 9.1.4 -> [Angular CLI](https://github.com/angular/angular-cli)

### Instrucciones para despliegue en local

1. Nos ubicamos el root del proyecto y ejecutamos `npm install` o `yarn install`.
2. Ejecutamos `ng serve`.
3. Abrimos en un navegador la siguiente url `http://localhost:4200/`

### Tecnologías usadas

- Angular V9 -> [angular](https://angular.io/docs)
- Bootstrap 4 -> [bootstrap](https://getbootstrap.com/)
- PrimeNG -> [primeng](https://www.primefaces.org/primeng/)
- NGRX -> [ngrx](https://ngrx.io/)
- Firebase (para el deploy) -> [firebase](https://firebase.google.com/)

### Notas importantes sobre el proyecto

- El login es netamente mockeado, se puese inciar sesión escribiendo cualquier correo válido y una constraseña cualquiera.
- Se creó un interceptor el cual a cada petición http simula agregarle un Bearer Token. Sin embargo no se lo agrega de verdad para que la API de OMBD puede responder correctamente.
- Se usó NRGX para el control de stores en la aplicación. En este proyecto se usa para almacenar las películas favoritas, para saber cuando un modal está abierto o cerrado, para pasar información entre componentes, entre otras cosas.
- La información del usuario (email y token mockeado) se almacena en el SessionStorage del navegador.
- La información de las películas favoritas se almacena en el localStorage del navegador.
- Al entrar a la ruta `/my-movies`, el componente buscará un token en el SessionStorage y si no tienes te mandará a la landing principal.
