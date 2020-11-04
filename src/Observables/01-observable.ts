// Prueba de Salida por Consola
/* const nombre: string = 'DanKenSoft!!';
console.log( nombre ); */

// Nuestro Primer Observable
import { Observable, Observer } from 'rxjs';

// Creamos un Observer -> El cual es una Interface
const observer: Observer<string> = {
    next: value => console.log('Siguiente [next]: ', value),
    error: err => console.warn('Error [obs]: ', err),
    complete: () => console.info('Completado [obs]')
};

const obs$ = new Observable<string>( subs => {
    subs.next('Hola');
    subs.next('DanKenSoft');
    subs.next('Hola');
    subs.next('DanKenSoft');

    subs.complete();

    subs.next('Hola');
    subs.next('DanKenSoft');
});

// Enviando solo el next al Subscribe
// Forma principal
/* obs$.subscribe( resp => console.log( resp ) ); */
// Forma a partir del ECMAScript 6
// obs$.subscribe( console.log );

// Enviando el next, error y complete al Subscribe
/* obs$.subscribe( 
    valor => console.log('next: ', valor),
    err => console.warn('error: ', err),
    () => console.log('Completado')
 ); */

 // Enviando por medio del Observer
 obs$.subscribe( observer );
