import { from } from "rxjs";
import { reduce, scan, map } from 'rxjs/operators';

const numeros = [1,2,3,4,5];

const totalAcumulador = ( acc, cur ) => acc + cur;

// Comparación entre el Reduce y el Scan 
// Reduce
from( numeros )
.pipe(
    reduce( totalAcumulador, 0 )
)
.subscribe( console.log ); // Respuesta: 15

// Scan
from( numeros )
.pipe(
    scan( totalAcumulador, 0 )
)
.subscribe( console.log ); // Respuesta: 1 3 6 10 15

// Redux
interface Usuario {
    id?: string,
    autenticado?: boolean,
    token?: string,
    edad?: number
}

const user: Usuario[] = [
    { id: 'rodri', autenticado: false, token: null},
    { id: 'rodri', autenticado: true, token: 'ABC'},
    { id: 'rodri', autenticado: true, token: 'ABC123'}
];

const state$ = from ( user ).pipe(
    scan<Usuario>( (acc, cur) => {
        return { ...acc, ...cur }
    }, {edad: 2})
);

const id$ = state$.pipe(
    map( state => state.id )
);

id$.subscribe( console.log );
