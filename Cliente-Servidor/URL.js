const url = new URL('https://www.ejemplo.org/cursos/programacion?ordenar=vistas&nivel=1');

console.log(url.hostname); // www.ejemplo.org
console.log(url.pathname); // /cursos/programacion
console.log(url.searchParams); // object URLSearchParams { 'ordenar' => 'vistas', 'nivel' => '1' }
console.log(url.searchParams.get('ordenar')); // vistas
console.log(url.searchParams.get('nivel')); // 1