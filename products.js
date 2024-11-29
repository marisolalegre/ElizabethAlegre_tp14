let electrodomestico =[ "cocina", "heladera", "lavarropas", "calefon", "microondas", "smart"];

//A
for(let i=0; i< electrodomestico.length; i++)
    {
    console.log (electrodomestico[i])
};

//B
let i1= electrodomestico.shift();
electrodomestico.push(i1)
console.log(electrodomestico);

//C
electrodomestico.push("batidora","secarropa");
//
console.log (electrodomestico);

//dd
console.log (`cantidad de electrodomecto ${electrodomestico.length}`);

//E
let buscarElemento = "cocina";

if(electrodomestico.includes(buscarElemento)){
    console.log("Producto encontrado.");    
}
else{
    console.log("El producto buscado no existe.");
}

//F
let arraysUnif = electrodomestico.join(' ');
console.log(arraysUnif);

//g



//H
arraysUnif=arraysUnif.replace ("placha", "cocina");
console.log (arraysUnif)

//iI

newarray=arraysUnif.split (", ");
console.log(newarray);

