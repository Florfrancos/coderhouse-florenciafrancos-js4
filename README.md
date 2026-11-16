# Simulador de compra de remeras

Simulador interactivo de una tienda de remeras, hecho en JavaScript para la entrega de Coderhouse. El programa muestra un menú por `prompt`, controla el stock de cada color y va armando un carrito de compras. Los mensajes se muestran con `alert` y también en la consola.

## Cómo usarlo

1. Descargá o cloná el repositorio.
2. Abrí `index.html` en el navegador.
3. Aceptá los mensajes que aparecen y elegí opciones del menú escribiendo el número correspondiente.
4. Si querés ver los mensajes también en la consola, abrila con `F12`.

## Menú de opciones

| Opción | Qué hace |
|--------|----------|
| 1 a 5 | Compra una remera (negra, roja, blanca, verde o azul) y descuenta el stock |
| 6 | Deshace la última compra y devuelve el stock |
| 7 | Consulta el stock de un color |
| 8 | Compra prioritaria: agrega la remera al principio del carrito |
| 9 | Entrega la primera remera del carrito |
| 10 | Cambia una remera del carrito por otro color |
| 11 | Sale del programa y muestra el carrito final |

## Stock inicial

| Color | Unidades |
|-------|----------|
| Negra | 10 |
| Roja | 4 |
| Blanca | 7 |
| Verde | 8 |
| Azul | 5 |

Cuando el stock de un color queda en 3 unidades o menos, el programa muestra un aviso de stock bajo.

## Conceptos aplicados

- Arrays (`colores`, `stocks` y `carrito`) y sus métodos: `push`, `pop`, `shift`, `unshift`, `indexOf`, `includes` y `splice`.
- `splice` para reemplazar una remera del carrito por su índice (opción 10).
- Ciclo `do...while` para repetir el menú hasta que se elija salir.
- Estructura `switch` para manejar las opciones.
- Condicionales y validaciones de los datos que ingresa la persona.
- Funciones con parámetros y valores de retorno.
- Función flecha (`esStockBajo`) y constante (`STOCK_BAJO`).

## Tecnologías

- HTML
- JavaScript

## Estructura del proyecto

```
├── index.html
├── main.js
└── README.md
```

## Autora

Florencia Francos