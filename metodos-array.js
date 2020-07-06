const productos =[
{ nombre:'computador', precio: 699, departamento:'tecnologia' },
{ nombre:'ollas verdes', precio: 39, departamento: 'hogar'},
{ nombre:'reloj', precio: 75, departamento:'tecnologia' },
{ nombre:'horno', precio: 33, departamento:'hogar' },
{ nombre:'escritorio', precio: 120, departamento: 'hogar'},
{ nombre: 'figura accion', precio: 10, departamento:'juguetes' },
]

const escritorio = productos.find(item => {
    return item.nombre === 'escritorio'
})
console.log(escritorio)


const productosIva = productos.map(item => {
    item.precio = item.precio + item.precio * 0.19
    return item
})
console.log(productosIva)


const productosHogar = productos.filter(item => {
    return item.departamento === 'hogar'
})

console.log (productosHogar)

const check = productos.every(item =>{
    return item.precio >= 10
})
console.log(check)

const alguno = productos.some ( item => {
    return item.precio >= 200
})
console.log(alguno)

const precioTotal = productos.reduce((total, item) => {
 return total + item.precio
}, 0)
console.log(precioTotal)


var texto = "Siempre haz sobrio lo que dijiste que ibas a hacer borracho ";
var nuevoTexto = texto.length;
console.log(nuevoTexto)

var texto = "Siempre haz sobrio lo que dijiste que ibas a hacer borracho ";
var nuevoTexto = texto.substring(15);
console.log(nuevoTexto)

var texto = "Siempre haz sobrio lo que dijiste que ibas a hacer borracho ";
var nuevoTexto = texto.substr(0, 8);
console.log(nuevoTexto)

var texto = "Siempre haz sobrio lo que dijiste que ibas a hacer borracho ";
var nuevoTexto = texto.indexOf("z");
console.log(nuevoTexto)

var texto = "Siempre haz sobrio lo que dijiste que ibas a hacer borracho ";
var nuevoTexto = texto.replace( texto, "Por qué, cariño, no vivo en absoluto cuando no estoy contigo");
console.log(nuevoTexto)

var texto = "Por qué, cariño, no vivo en absoluto cuando no estoy contigo";
var nuevoTexto = texto.toUpperCase();
console.log(nuevoTexto)

var texto = "Siempre haz sobrio lo que dijiste que ibas a hacer borracho ";
var nuevoTexto = texto.split(texto[2]);
console.log(nuevoTexto)

var texto = "Siempre haz sobrio lo que dijiste que ibas a hacer borracho ";
var nuevoTexto = texto.slice(33);
console.log(nuevoTexto)