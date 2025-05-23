let playlist =[`funk`,`hip-hop`,`pop`]
let playlistEmcaps = playlist.map(musica => musica.toUpperCase());

console.log("playlist em maiusculas:", playlistEmcaps);

console.log(`-----------------------------------------------------`);

let minuscula= playlist.map(musica => musica.toLowerCase());
console.log(`misuculas com map(): ${minuscula.join(`, `)}`);

console.log(`-----------------------------------------------------`);


let numeros = [10,20,30,40,50];

let dobrados = numeros.map(n => n * 2);
console.log(`valores dobrados: ${dobrados.join(`, `)}`);

console.log(`-----------------------------------------------------`);

let metades = numeros.map(n => n / 2);
console.log(`valores pelametades: ${metades.join(`, `)}`);

console.log(`-----------------------------------------------------`);

let comoTexto = numeros.map(n => `${n} pts `);
console.log(`como texto: ${comoTexto.join(`, `)}`);