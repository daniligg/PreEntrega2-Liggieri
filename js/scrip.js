let opcion = parseInt(prompt('Elegir un producto \n1-JABÓN DE ALMENDRA $ 1500 .\n2-JABÓN DE COCO, NARANJA Y ROMERO $1700 .\n3-JABÓN DE CHOCOLATE Y ALMENDRA $ 1600. \n4-JABÓN DE VAINILLA $ 1800 \n0-Finalizar compra.'));
let seleccionarCantidad;
let total = 0;

const cantidad = (cant, precio) => {
    return cant * precio
}

while (opcion != 0) {
    switch (opcion) {
        case 1:
            seleccionarCantidad = parseInt(prompt('el producto seleccionado es JABÓN DE ALMENDRA, indique la cantidad'))
            total += cantidad(seleccionarCantidad, 1500)
            break;
        case 2:
            seleccionarCantidad = parseInt(prompt('el producto seleccionado es JABÓN DE COCO, NARANJA Y ROMERO, indique la cantidad'))
            total += cantidad(seleccionarCantidad, 1700)
            break;
        case 3:
            seleccionarCantidad = parseInt(prompt('el producto seleccionado es JABÓN DE CHOCOLATE Y ALMENDRA, indique la cantidad'))
            total += cantidad(seleccionarCantidad, 1600)
            break;
        case 4:
            seleccionarCantidad = parseInt(prompt('el producto seleccionado es JABÓN DE VAINILLA , indique la cantidad'))
            total += cantidad(seleccionarCantidad, 1800)
            break;

        default:
            break;
    }
    opcion = parseInt(prompt('\n1-JABÓN DE ALMENDRA $ 1500 .\n2-JABÓN DE COCO, NARANJA Y ROMERO $1700 .\n3-JABÓN DE CHOCOLATE Y ALMENDRA $ 1600. \n4-JABÓN DE VAINILLA $ 1800 \n0-Finalizar compra.'));
}
alert('el total de la compra es de: ' + total);

alert('Gracias por su compra');


//Hasta áca es la primer entrega//
//segunda entrega//

class Producto {
    constructor(nombre, precio, cantidad) {
        this.nombre = nombre.toUpperCase();
        this.precio = parseFloat(precio);
        this.cantidad = cantidad;
    }
}

const listaDeCompras = [
    new Producto("JABÓN DE ALMENDRA", 1500, 1),
    new Producto("JABÓN DE COCO, NARANJA Y ROMERO", 1700, 2),
    new Producto("JABÓN DE CHOCOLATE Y ALMENDRA", 1600, 5),
    new Producto("JABÓN DE VAINILLA", 1800, 1)
];

console.log(listaDeCompras);


let continuar = true;

while (continuar) {
    let ingreso = prompt('Ingresa los datos del producto: nombre, precio, cantidad, separados por una barra diagonal ("\\"). Ingresa X para finalizar');
    if (ingreso.toUpperCase() == 'X') {
        continuar = false;
        break;
    }

    let datos = ingreso.split('\\');
    const Compras = new Producto(datos[0], datos[1], datos[2]);

    listaDeCompras.push(Compras);

    console.log(listaDeCompras);
}

let eleccion = prompt('Elegí la opción deseada:\n1 - Precio de mayor a menor \n2 - Precio de menor a mayor');

function ordenar(eleccion, array) {
    let arrayOrdenado = array.slice(0);


    switch (eleccion) {
        case '1':
            return arrayOrdenado.sort((a, b) => b.precio - a.precio);
        case '2':
            return arrayOrdenado.sort((a, b) => a.precio - b.precio);
        default:
            alert('No es una opción válido');
            break;
    }
}


function crearStringResultado(array) {
    let info = '';

    array.forEach(elemento => {
        info += '\nnombre: ' + elemento.nombre + '\n$: ' + elemento.precio + '\ncantidad: ' + elemento.cantidad;
    })

    return info;

}
alert(crearStringResultado(ordenar(eleccion, listaDeCompras)))




const MisCompras = [{
    nombre: "JABÓN DE ALMENDRA",
    precio: 1500,
    cantidad: 2,
    total: function () {
        return this.precio * this.cantidad;
    }
}];

alert(MisCompras[0].total());