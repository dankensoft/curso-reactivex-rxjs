import { range } from 'rxjs';
import { map, tap } from 'rxjs/operators';


const  numeros$ = range(1,5);

numeros$.pipe(
    tap( x => {
        console.log('antes', x);
        return 100; // no se muestra
    }),
    map(val => val * 10),
    tap( x => console.log('despues', x) ),
    // Enviando el tap como un Partial Observable
    tap({
        next: val => console.log('next-despues ', val),
        complete: () => console.log('Se completó...')
    })
)
.subscribe( subs => console.log('subs ', subs) );
