const STOCK_BAJO = 3;

const textoMenu =
    "Seleccione la opción que desea comprar:\n" +
    "1 - Remera Negra\n" +
    "2 - Remera Roja\n" +
    "3 - Remera Blanca\n" +
    "4 - Deshacer última compra\n" +
    "5 - Consultar stock de un color\n" +
    "6 - Compra prioritaria\n" +
    "7 - Entregar primera remera del carrito\n" +
    "8 - Salir";

let colores = ["negra", "roja", "blanca"];
let stocks = [10, 4, 7];
let carrito = [];
let opcion;

const esStockBajo = (stock) => stock <= STOCK_BAJO;

function mostrarMensaje(texto) {
    console.log(texto);
    alert(texto);
}

function procesarCompra(stock, color) {
    if (stock > 0) {
        stock--;
        carrito.push(color);
        mostrarMensaje("Compraste una remera " + color + ". Stock restante: " + stock);
        if (esStockBajo(stock)) {
            mostrarMensaje("Stock bajo de remera " + color);
        }
    } else {
        mostrarMensaje("No hay stock de remera " + color);
    }
    return stock;
}

function deshacerCompra(lista, listaColores, listaStocks) {
    if (lista.length === 0) {
        mostrarMensaje("No hay compras para deshacer");
        return;
    }

    let colorQuitado = lista.pop();
    let posicion = listaColores.indexOf(colorQuitado);
    listaStocks[posicion]++;
    mostrarMensaje("Se quitó la remera " + colorQuitado + " del carrito. Stock actual: " + listaStocks[posicion]);
}

function consultarStock(listaColores, listaStocks) {
    let colorBuscado = prompt("¿De qué color querés consultar el stock?").toLowerCase().trim();

    if (listaColores.includes(colorBuscado)) {
        let posicion = listaColores.indexOf(colorBuscado);
        mostrarMensaje("Stock de remera " + colorBuscado + ": " + listaStocks[posicion]);
    } else {
        mostrarMensaje("No trabajamos el color " + colorBuscado);
    }
}

function compraPrioritaria(lista, listaColores, listaStocks) {
    let colorElegido = prompt("¿Qué color querés como compra prioritaria?").toLowerCase().trim();

    if (!listaColores.includes(colorElegido)) {
        mostrarMensaje("No trabajamos el color " + colorElegido);
        return;
    }

    let posicion = listaColores.indexOf(colorElegido);

    if (listaStocks[posicion] > 0) {
        listaStocks[posicion]--;
        lista.unshift(colorElegido);
        mostrarMensaje("Compra prioritaria: remera " + colorElegido + " al principio del carrito. Stock restante: " + listaStocks[posicion]);
    } else {
        mostrarMensaje("No hay stock de remera " + colorElegido);
    }
}

function entregarPrimera(lista) {
    if (lista.length === 0) {
        mostrarMensaje("No hay remeras en el carrito para entregar");
        return;
    }

    let entregada = lista.shift();
    mostrarMensaje("Se entregó la remera " + entregada + ". Quedan " + lista.length + " en el carrito");
}

function mostrarCarrito(lista) {
    if (lista.length === 0) {
        mostrarMensaje("No compraste ninguna remera");
        return;
    }

    let resumen = "Tu carrito:\n";
    for (const color of lista) {
        resumen = resumen + "- Remera " + color + "\n";
    }
    mostrarMensaje(resumen);
}

function opcionCompra(mensaje) {
    do {
        opcion = parseInt(prompt(mensaje));

        switch (opcion) {
            case 1:
                stocks[0] = procesarCompra(stocks[0], colores[0]);
                break;
            case 2:
                stocks[1] = procesarCompra(stocks[1], colores[1]);
                break;
            case 3:
                stocks[2] = procesarCompra(stocks[2], colores[2]);
                break;
            case 4:
                deshacerCompra(carrito, colores, stocks);
                break;
            case 5:
                consultarStock(colores, stocks);
                break;
            case 6:
                compraPrioritaria(carrito, colores, stocks);
                break;
            case 7:
                entregarPrimera(carrito);
                break;
            case 8:
                mostrarMensaje("Saliendo...");
                break;
            default:
                mostrarMensaje("Opción inválida, elegí un número del 1 al 8");
        }
    } while (opcion !== 8);

    mostrarCarrito(carrito);
    mostrarMensaje("Gracias por visitarnos");
}

opcionCompra(textoMenu);