## template.yaml

El comando sam validate --lint nos dice que Timeout debe ser un valor entre 1 y 900, así que lo modifiqué a 900.

También se añadió permiso a poder acceder a cualquier ruta de la api, dado el caso de que si se ejecuta con:

```bash
sam local start-api
```

Se pueden probar las otras rutas y recibir un 404, esto es apto para aplicar un enturador de express.
