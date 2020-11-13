import { fromEvent } from 'rxjs';
import { map, tap } from 'rxjs/operators';

const texto = document.createElement('div');
texto.innerHTML = `
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam suscipit efficitur ligula non convallis. Morbi facilisis ex vitae laoreet hendrerit. Praesent non tellus magna. Aliquam gravida, nibh at iaculis pellentesque, ligula ex ornare metus, non mattis nibh magna non odio. Phasellus eleifend blandit vestibulum. Donec vehicula orci justo, ut luctus enim sodales in. Morbi finibus, leo eget malesuada fringilla, lacus dui convallis dolor, eget molestie nunc turpis quis lectus. Pellentesque id neque viverra, pellentesque mi sit amet, aliquet sem. Quisque mattis dui sit amet commodo auctor. Integer commodo, mauris et fermentum fermentum, nulla leo suscipit ex, eget mollis dui diam non purus. Pellentesque eget lacus eget sapien elementum mattis. Aliquam gravida mi eu mauris porttitor, nec posuere arcu rhoncus. Nullam ut porta tortor, a porttitor leo.
<br/><br/>
Aenean porttitor placerat augue at faucibus. In posuere arcu justo, viverra volutpat ante gravida quis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin lobortis erat tortor, ut dictum risus ultrices ut. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nunc lacus dui, consectetur vel ex et, dapibus semper lacus. Maecenas leo sem, consectetur quis sem non, ultrices cursus massa. Sed dictum justo et nisi tempus porttitor pellentesque ac elit. Ut nisl odio, sodales at dolor et, ornare ullamcorper odio. Maecenas maximus velit nulla, et efficitur ante dictum vel. Fusce et nibh et justo lobortis tristique at non sem. Fusce lectus enim, placerat ac mi viverra, sollicitudin ultricies enim.
<br/><br/>
Vestibulum vehicula ante vel lectus mattis laoreet. Suspendisse sed odio vel odio eleifend fermentum. Praesent vel semper augue. Vestibulum ultricies dui eu magna pellentesque finibus. Nulla finibus tincidunt sapien vitae maximus. In volutpat sagittis fringilla. Aenean sed pulvinar sem. Quisque accumsan eget tellus ut lobortis. Duis vehicula aliquam justo eget aliquam. Sed in enim ornare, sagittis sem nec, viverra arcu. Duis vitae semper metus, eu tincidunt dolor. Nullam ac nulla eu risus porta ullamcorper. Nulla vel sapien pellentesque, sollicitudin est molestie, consectetur elit. Nam ultricies, turpis sed tincidunt lacinia, urna purus egestas orci, id laoreet enim orci at mi. Proin enim odio, eleifend ac magna vitae, commodo dictum massa.
<br/><br/>
Maecenas erat nunc, mollis euismod ex sit amet, cursus elementum leo. Vivamus enim tellus, molestie vel neque et, maximus rutrum ligula. Vestibulum aliquam suscipit neque, nec consectetur ligula hendrerit quis. Nam vehicula eros a molestie aliquam. Suspendisse commodo in libero ut rhoncus. Aliquam condimentum dolor vitae leo gravida, sed egestas ex placerat. Aenean eu condimentum justo. Donec eget posuere felis. Aenean non ultrices tortor. Sed urna arcu, lobortis quis suscipit in, mollis eu nulla. Nullam at orci in dolor semper mattis. Suspendisse potenti. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin posuere est non risus malesuada euismod.
<br/><br/>
Proin vehicula viverra metus, et fermentum sem tincidunt blandit. Aenean a neque in nibh dictum pharetra eu vel magna. Quisque sollicitudin urna leo, ac dapibus quam tempus non. Sed fermentum mi tellus, aliquet commodo diam egestas vitae. Duis sodales iaculis ante, at blandit velit rhoncus at. Pellentesque pretium mi velit, non tincidunt nulla posuere id. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nulla urna elit, vehicula non lectus nec, facilisis vulputate neque. Mauris lacinia pellentesque ante id blandit. Nulla maximus finibus augue et fermentum.
`;

const body = document.querySelector('body');
body.append(texto);

const progressBar = document.createElement('div');
progressBar.setAttribute('class','progress-bar');
body.append(progressBar);

// Función que haga el cálculo
const calcularPorcentajeScroll = ( event ) => {
    // Destructuración
    const {
        scrollTop,
        scrollHeight,
        clientHeight
    } = event.target.documentElement;

/*     console.log(
        scrollTop,
        scrollHeight,
        clientHeight
    ); */

    return (scrollTop / (scrollHeight - clientHeight)) * 100;
}
// Streams
const scroll$ = fromEvent(document, 'scroll');
// scroll$.subscribe(console.log);

const progress$ = scroll$.pipe(
    // map( event => calcularPorcentajeScroll( event ) )
    map( calcularPorcentajeScroll ),
    tap( console.log )
);

progress$.subscribe( porcentaje => {
    progressBar.style.width = `${ porcentaje }%`;
});
