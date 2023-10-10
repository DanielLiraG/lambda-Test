## template.yaml

El comando sam validate --lint nos dice que Timeout debe ser un valor entre 1 y 900, así que lo modifiqué a 900.

## Problema adicional no escrito en el README.

El endpoint de https://www.sii.cl/valores_y_fechas/dolar/dolar${currentYear}.htm tiene una tabla con los números decimales despues de una coma (,).

Pero el endpoint de https://www.sii.cl/valores_y_fechas/utm/utm${currentYear}.htm tiene los números decimales luego de un punto (.).
Esto hacía que el replace:

.replace(/,/g, "X") // * No cambia ninguna coma por X
.replace(/\./g, "") // * Borra todos los puntos.
.replace(/X/g, ".") // * No hay ninguna X a la cual colocarle punto.

El número quedaba sin separador de decimales, transformando 768.180 por 768180.

Terminé haciendo que este parsing sea compatible con separadores de , y separadores de .
