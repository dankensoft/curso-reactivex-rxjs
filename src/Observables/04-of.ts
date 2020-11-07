import { of } from "rxjs";

// const obs$ = of(1,2,3,4,5,6);
const obs$ = of<number>(1,2,3,4,5,6); // También se pueden enviar String, Objetos, Arreglos y Promesas
// Se comprueba que los Observables también pueden trabajar de manera Síncrona
console.log('Inicio del Obs$');
obs$.subscribe( 
    next => console.log('next: ', next),
    null,
    () => console.log('Terminamos la secuenta')
);
console.log('Fin del Obs$');