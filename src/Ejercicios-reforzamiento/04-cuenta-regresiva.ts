import { interval } from 'rxjs';
import { map, take } from 'rxjs/operators';

/**
 * Ejercicio: Realizar una cuenta regresiva
 * empezando de 7
 */

// Salida esperada ===
// 7
// 6
// 5
// 4
// 3
// 2
// 1
// 0

(() =>{

    const inicio = 7;
    const countdown$ = interval(700).pipe(
        // Usar los operadores necesarios
        // para realizar la cuenta regresiva
        map( i => inicio - i ), // Selecciono el valor inicial y se le resta el valor según el intérvalo
        take( inicio + 1 ) // Se suma 1 porque se detendrá la cuenta regresiva en 0
    );
    
    // No tocar esta línea ==================
    countdown$.subscribe( console.log ); // =
    // ======================================

})();