import { fromEvent } from 'rxjs';
import { first, tap, map } from 'rxjs/operators';


const click$ = fromEvent<MouseEvent>(document, 'click');

click$.pipe(
    // tap( () => console.log('tap') ),
    // first<MouseEvent>( event => event.clientY >= 150 )
    tap<MouseEvent>( console.log ),
/*     map(event => ({
        clientY: event.clientY,
        clientX: event.clientX
    })) */
    map( ({ clientX, clientY }) => ({ clientX, clientY })),
    first( event => event.clientY >= 150 )
)
.subscribe({
    next: val => console.log('next: ', val),
    complete: () => console.log('Complete')
});
