# Zara Web challenge

## Descripción

Esta prueba consiste en la creación de una pequeña aplicación para obtener información sobre diferentes personajes de Marvel.

## Contenido

- [Elección de tecnologías](#elección-de-tecnologías)
- [Despliegue en Vercel](#despliegue-en-vercel)
- [Estructura del proyecto](#estructura-del-proyecto)
- [Prerequisitos para levantar la aplicación](#prerequisitos-para-levantar-la-aplicación)
- [Modo de desarrollo](#modo-de-desarrollo)
- [Configuración de las variables de entorno](#configuración-de-las-variables-de-entorno)
- [Modo producción](#modo-producción)
- [Testing](#testing)

## Elección de tecnologías

- `vite`: por su rápida compilación y configuración simple.
- `react`: para interfaces componentizadas.
- `typeScript`: para añadir tipado estático y mejorar la mantenibilidad del código.
- `md5`: para autenticación en requests.
- `vitest`: para pruebas unitarias centradas en lógica de la aplicación.
- `@testing-library/react`: para pruebas unitarias centradas en el comportamiento del usuario.

## Despliegue en Vercel

La aplicación está desplegada en Vercel en la siguiente url:

```
https://zara-web-challenge-carlini.vercel.app/
```

## Estructura del proyecto

`public/`: contiene archivos estáticos como el HTML base, imágenes y otros recursos que se servirán públicamente.

`src/`: código fuente de la aplicación

`components/`: componentes de la aplicación. Cada componente está encapsulado en su propia carpeta y puede incluir archivos adicionales como CSS o pruebas unitarias.

- átomos: componentes básicos y reutilizables
- moléculas: conjuntos de componentes átomos que forman unidades más complejas.

`pages/`: páginas de la aplicación. Cada página representa una ruta distinta en la aplicación y puede contener sus propios componentes y lógica.

`hooks/`: contiene custom hooks que encapsulan la lógica reutilizable de la aplicación.

`contexts/`: contiene archivos relacionados con la gestión de contextos en la aplicación.

`types/`: definiciones de tipos TypeScript y la autodocumentación del código.

`utils/`: funciones de utilidad, constantes y otros archivos de ayuda

`styles/`: Este directorio contiene archivos de estilos globales

`App.tsx`: punto de entrada principal de la aplicación.

## Prerequisitos para levantar la aplicación

- Node.js (versión >20)
- Yarn

## Modo de desarrollo

- Tener Node.js instalado en el sistema. Se puede descargar desde https://nodejs.org/.
- También se necesita tener Yarn instalado. Se puede instalar siguiendo las instrucciones en https://classic.yarnpkg.com/en/docs/install.

### Descargar el proyecto

1. Clonar el repositorio
2. Instalar las dependencias ejecutando:

```bash
 yarn install
```

### Configuración de las variables de entorno

- Crear un archivo `.env.development` en la raíz del proyecto.
- Copiar las variables de entorno requeridas del archivo `.env.example` y pegarlas en `.env.development`.

> Nota: Algunas de las variables pueden incluir información sensible, como claves de API privadas. Se recomienda no exponerlas públicamente por cuestiones de seguridad y no subirlas al repositorio ni a la documentación. Sin embargo, para este proyecto, es necesario configurarlas en el archivo `.env.development` para poder levantarlo localmente, ya que de otro modo, cada persona tendría que generar esa API key privada de forma personal en su computadora.

### Levantar la aplicación

1. Una vez configuradas las variables de entorno en `.env.development`, ejecutar:

```bash
yarn dev
```

2. Acceder a la aplicación en `http://localhost:3000`.

## Modo producción

Levantar la aplicación en modo producción:

Instalación de dependencias:

```bash
yarn install
```

Compilación de la aplicación (optimización de assets):

```bash
yarn build
```

> Esto generará una versión optimizada de la aplicación en la carpeta `dist/`.

## Testing

1. Para ejecutar las pruebas unitarias, ejecuta el siguiente comando:

```bash
yarn test
```

2. Además, se pude ver la covertura del código ejecutando:

```bash
yarn coverage
```

3. Por último, abrir el archivo `index.html` generado en `/coverage/index.html` para ver la covertura de cada fuente.
