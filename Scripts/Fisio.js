//alert ("Bienvenidos !!")

//Variables: Es un espacio en memoria donde podemos guardar informacion

var nombre= "Pedro Perez";//strings, TEXTOS
var numeros= 123456; //Number,numero, float, decimales
var boleanos= true; // boleanos si esta activo o oline
var arreglos=["paula", "pedro",06, 19, true] // Es una variable que guarda varios elementos, en el orden empieza desde 0 de izquierda a derecha
var objeto= {
animal: "perro",
raza: "criollo",
aga: 3,
propietario: "Nicolas Poveda"

} // Un objeto de la vida real traido a la programacion, un conjunto de caracteristicas



function mensaje (params) { // Ejecuta un bloque de codigo
// Bloque de codigo
var name= prompt ("Ingrese su nombre") // prompt me permite ingresar un dato
alert ("bienvenid@" +  name) 
}