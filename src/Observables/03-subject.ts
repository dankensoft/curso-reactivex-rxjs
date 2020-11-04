import { Observable, Observer, Subject } from 'rxjs';

// Creamos un Observer -> El cual es una Interface
const observer: Observer<any> = {
    next: value => console.log('next: ', value),
    error: err => console.warn('error: ', err),
    complete: () => console.info('complete')
};

const intervalo$ = new Observable<number>( subs =>{
    const intervalID = setInterval( () => subs.next(Math.random()), 1000);
    return () => {
        clearInterval( intervalID );
        console.log('Intérvalo Destruido');
    }
});

// Ejemplo antes del Subject
/* const subs1 = intervalo$.subscribe( rnd => console.log('subs1: ', rnd) );
const subs2 = intervalo$.subscribe( rnd => console.log('subs2: ', rnd) ); */

/** Características Importantes del Subject
 * 1- Casteo Múltiple -> Puede tener varios Subscriptores
 * 2- También es un Observer
 * 3- También usa Next, Error y Complete
 */
// Creamos el Subject
const subject$ = new Subject();
const subscription = intervalo$.subscribe( subject$ );

// Enviando el Subscribe
/* const subs1 = subject$.subscribe( rnd => console.log('subs1: ', rnd) );
const subs2 = subject$.subscribe( rnd => console.log('subs2: ', rnd) ); */

/** Cuando la Data es producida por el Observable en sí mismo, es considerado un 
 * "Cold Observable". Pero cuando la Data es producida FUERA del Observable es 
 * llamado "Hot Observable".
 */

 // Enviando el Subscribe con el Observer
const subs1 = subject$.subscribe( observer );
const subs2 = subject$.subscribe( observer );

// Quiere decir que podemos enviar datos durante el Proceso...
setTimeout(() => {
    subject$.next(10);
    subject$.complete();
    // Llamo al Unsubscribe para que finalice el Intérvalo del Proceso en Curso...
    subscription.unsubscribe();
}, 3500);