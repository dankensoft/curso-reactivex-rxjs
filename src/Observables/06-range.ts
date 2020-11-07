import { range } from "rxjs";

// Si se agrega el asyncSheduler quedaría de forma Asíncrona
// El Range recibe el primer valor de donde iniciará y el segundo indicará cuantos lapsos debe mostrar
const src$ = range(1,5);

console.log('Inicio');
src$.subscribe( console.log );
console.log('Fin');
