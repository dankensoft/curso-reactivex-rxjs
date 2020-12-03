import { forkJoin, of } from 'rxjs';
import { ajax } from 'rxjs/ajax';
import { catchError } from 'rxjs/operators';

const GITHUB_API_URL = 'https://api.github.com/users';
const GITHUB_USER = 'dankensoft';

forkJoin({
    usuario: ajax.getJSON(
        `${ GITHUB_API_URL }/${ GITHUB_USER }`
    ),
    repos: ajax.getJSON(
        `${ GITHUB_API_URL }/${ GITHUB_USER }/repos`
    ),
    gists: ajax.getJSON(
        `${ GITHUB_API_URL }/${ GITHUB_USER }/gists`
    )
})
.pipe(
    // Error en General de las peticiones aunque una sola falle
    // También se puede manejar Error individual por cada petición
    catchError(err => of(err.message))
)
.subscribe(console.log)