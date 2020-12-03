import { of, interval, forkJoin } from 'rxjs';
import { delay, take } from 'rxjs/operators';

const numeros$ = of(1,2,3,4);
const intervalo$ = interval(1000).pipe(take(3)); //0..1..2
const letras$ = of('a','b','c').pipe(delay(3500));

/* forkJoin(
    numeros$,
    intervalo$,
    letras$
).subscribe(console.log) */

/* forkJoin(
    numeros$,
    intervalo$,
    letras$
).subscribe(resp => {
    console.log('números: ', resp[0]);
    console.log('intérvalo: ', resp[1]);
    console.log('letras: ', resp[2]);
}) */

// Enviándolo como Objeto
/* forkJoin({
    numeros$,
    intervalo$,
    letras$
}).subscribe(resp => {
    console.log(resp);
    // Se puede obtener detallado
    console.log(resp.letras$);
}) */

// Colocando nombres en el Objeto
forkJoin({
    Número: numeros$,
    Intérvalo: intervalo$,
    Letra: letras$
}).subscribe(resp => {
    console.log(resp);
})