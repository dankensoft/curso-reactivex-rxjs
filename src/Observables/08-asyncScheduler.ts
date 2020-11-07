import { asyncScheduler } from "rxjs";

// Ejemplos que configuran un SetTimeout con el asyncScheduler
// Primer Ejemplo
const saludar = () => console.log('Hola DanKenSoft');
asyncScheduler.schedule(saludar,2000);

// Segundo Ejemplo
const saludar2 = ( nombre ) => console.log(`Hola ${ nombre }`); // Si fueran más parámetros entonces se colocaria el state como un Objeto
asyncScheduler.schedule(saludar2,2000,'Rodrigo');

// Ejemplo que configuran un SetInterval con el asyncScheduler
const subs = asyncScheduler.schedule(function(state){
    console.log('state: ', state);
    this.schedule(state + 1, 1000);
},3000,0);

/* setTimeout(() => {
    subs.unsubscribe();
}, 6000); */

asyncScheduler.schedule( () => subs.unsubscribe(), 6000 );