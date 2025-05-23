let playlist =[`funk`,`hip-hop`,`pop`,`rock`,`jazz`,`hino`];

console.log(`antes do splice: ${playlist}`);

//removendo 2 elementos a partir do indice 2
let elementosRemovidos = playlist.splice(2, 4)

console.log(`depois do splice: ${playlist}`);
console.log(`elementos Removidos: ${elementosRemovidos}`);

console.log(`-----------------------------------`);

let desafio = playlist.splice(0, 2)

console.log(`antes do 2 splice: ${playlist}`);
console.log(`elementos removidos : ${desafio}`);