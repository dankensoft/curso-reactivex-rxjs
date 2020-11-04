import { Observable, Observer } from 'rxjs';

// Creamos un Observer -> El cual es una Interface
const observer: Observer<any> = {
    next: value => console.log('next: ', value),
    error: err => console.warn('error: ', err),
    complete: () => console.info('complete')
};

const intervalo$ = new Observable<number>( subs => {
    let count = 0;
    const interval = setInterval( () => {
        count++;
        subs.next( count );
        console.log( count );
    }, 1000);

    setTimeout(() => {
        subs.complete();
    }, 2500);

    return () => {
        clearInterval( interval );
        console.log('Intérvalo Destruido');
    }
});

// intervalo$.subscribe( num => console.log('Número: ', num) );

const subs1 = intervalo$.subscribe(observer);
const subs2 = intervalo$.subscribe(observer);
const subs3 = intervalo$.subscribe(observer);

subs1.add(subs2).add(subs3);

setTimeout(() => {
    subs1.unsubscribe();
    console.log('Completado el TimeOut');
}, 6000);
