## template.yaml

El comando sam validate --lint nos dice que Timeout debe ser un valor entre 1 y 900, así que lo modifiqué a 900.

También se añadió permiso a poder acceder a cualquier ruta de la api, dado el caso de que si se ejecuta con:

```bash
sam local start-api
```

Se pueden probar las otras rutas y recibir un 404, esto es apto para aplicar un enturador de express.

## Problema adicional no escrito en el README.

El endpoint de https://www.sii.cl/valores_y_fechas/dolar/dolar${currentYear}.htm tiene una tabla con los números decimales despues de una coma (,).

Pero el endpoint de https://www.sii.cl/valores_y_fechas/utm/utm${currentYear}.htm tiene los números decimales luego de un punto (.).
Esto hacía que el replace:

.replace(/,/g, "X") // _ No cambia ninguna coma por X
.replace(/\./g, "") // _ Borra todos los puntos.
.replace(/X/g, ".") // \* No hay ninguna X a la cual colocarle punto.

El número quedaba sin separador de decimales, transformando 768.180 por 768180.

Terminé haciendo que este parsing sea compatible con separadores de , y separadores de .
