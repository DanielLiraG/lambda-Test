# Prueba técnica - AWS Lambdas

La prueba consiste en la creación de AWS lambdas hechas con typescript, utilizando graphql para consumir data de una base de datos y modificarla para enviarla como respuesta.

NOTA: debe utilizar nodejs18.x para el desarrollo de las lambdas. **NO** debe modificar los archivos .eslintrc.js, .prettierrc.js, jest.config.js.

## Primera parte

Utilizando como referencia la carpeta lambdasTemplate, deberá desarrollar una lambda hecha con typescript, la cual al ser ejecutada deberá extraer la información de los Pokémon desde el número 43 hasta el 76, donde debe obtener el nombre, altura, peso y las estadísticas del mismo con sus valores. Posteriormente, debe reorganizar la información de cada Pokémon de manera que el nombre de las estadísticas pasen a ser una key dentro del objeto del Pokémon y tenga su valor base (agregue todas las estadísticas y no solo las que se observan en el ejemplo), como se muestra en el siguiente ejemplo:

```
{
  “name”: "dugtrio",
  “height”: 7,
  “weight”: 333,
  “hp”: 35,
  “attack”: 100,
  “defense”: 50,
  …
}
```

Finalmente, los cambios deben enviarse como un array en la respuesta de la función lambda, dentro de un objeto que incluirá un mensaje, el statusCode y data. Dentro de la propiedad data se enviará el array con los cambios, siguiendo el siguiente ejemplo:

```
{
  “message”: “ok”,
  “statusCode”: 200,
  “data”: [{...},{...},{...}, ...]
}
```

Todas las consultas a la pokeapi deben realizarse utilizando graphql a través de su link beta (<https://beta.pokeapi.co/graphql/v1beta>)

Consideraciones:

- Utilice clases para el desarrollo de la lambda.
- Implemente los principios SOLID.
- Organice en carpetas todo lo desarrollado.
- Cree test unitarios utilizando jest.
- Utilice AWS sam-cli para ejecutar la lambda, ya que al utilizar el script execute.sh debe funcionar.

## Segunda Parte

Utilizando el archivo consultas.js, que contiene la lógica de Web scraping para extraer los valores actuales de la unidad tributaria de un país, se debe crear una AWS Lambda con TypeScript refactorizando el código implementado en consultas.js.

En la lógica de consultas, se ha identificado un error donde los primeros días del año no tienen información disponible, lo que provoca que la función retorne null como respuesta. Considerando esto, se debe corregir de manera que, en esos casos, se retorne el último valor del año anterior.

Requerimientos:

- Utilice clases al refectorizar.
- Cambiar la libreria request-promise por fetch.
- Utilizar las url que le serán enviadas con la prueba.
- Puede utilizar o cambiar cualquier librería.
- Debe mantener la estructura de la respuesta y los parámetros de entrada de la función.
