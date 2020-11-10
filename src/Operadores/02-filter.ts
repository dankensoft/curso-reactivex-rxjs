import { from, range, fromEvent } from 'rxjs';
import { filter, map } from "rxjs/operators";
import { Signature } from "typescript";

/* range(1,10).pipe(
    filter( val => val % 2 === 1 )
).subscribe( console.log ); */

interface Personaje {
    tipo: string;
    nombre: string;
}

const personajes: Personaje[] = [
    {
        tipo: 'heroe',
        nombre: 'Batman'
    },
    {
        tipo: 'heroe',
        nombre: 'Robin Hood'
    },
    {
        tipo: 'villano',
        nombre: 'Joker'
    }
]

from( personajes ).pipe(
    filter( pers => pers.tipo !== 'heroe' )
).subscribe( console.log );

const keyUp$ = fromEvent<KeyboardEvent>(document,'keyup').pipe(
    map( event => event.code ),
    filter( key => key === 'Enter' )
);
keyUp$.subscribe( console.log );