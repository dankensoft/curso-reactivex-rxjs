import { range, fromEvent } from 'rxjs';
import { map, mapTo, pluck } from "rxjs/operators";

// Ejemplo usando un range con operador map
/* range(1,5)
.pipe(
    map<number, string>( val => {
        return (val * 10).toString()
    })
)
.subscribe( console.log ); */

// Ejemplo usando un fromEvent - map, pluck y mapTo
const keyUp$ = fromEvent<KeyboardEvent>(document, 'keyup');

const keyUpCode$ = keyUp$.pipe(
    map( event => event.code )
);

const keyUpPluck$ = keyUp$.pipe(
    pluck('target','baseURI')
)

const keyUpMapTo$ = keyUp$.pipe(
    mapTo('Tecla presionada')
)

keyUpCode$.subscribe( code => console.log('map: ', code));
keyUpPluck$.subscribe( uri => console.log('pluck: ', uri));
keyUpMapTo$.subscribe( message => console.log('mapTo: ', message));