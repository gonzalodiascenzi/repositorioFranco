frutas = ['Anana', 'Banana', 'Manzana', 'Kiwi', 'Pera']

frutas.forEach((fruta, index) => {
 console.log(index + 1 + '-' + fruta);
})

const frutasEnPlural = frutas.map ( (fruta) => { //crea nuevo array con los mimos elementos sumado a lo que retornemos
return fruta + 's';
});

console.log(frutas);
console.log(frutasEnPlural);

precios [1,13,16,7]

const precios = precios.filter ((tarea) =>{
    return tarea < 8
}
)