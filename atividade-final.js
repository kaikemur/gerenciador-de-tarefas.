//Etapa 1
let tarefas = [
  "Estudar JavaScript",
  "Fazer exercícios de matemática",
  "Lavar a louça",
  "Comprar mercado",
  "Ir à academia",
  "Ler um livro",
  "Fazer revisão para o teste",
  "Limpar o quarto",
  "Estudar para concurso",
  "Organizar o computador",
];

console.log(`antes do push`, tarefas);

tarefas.push(`programar`, `limpar o  quintal`);

console.log(`depois do push`, tarefas);
console.log(`---------------------------------------------------------------------------`);
//Etapa 2

let tarefaRemovida = tarefas.pop();
console.log(`array com o pop`, tarefas);
console.log(` tarefa Removida:`, tarefaRemovida);

console.log(`---------------------------------------------------------------------------`);

//Etapa 3

console.log(`antes da nova tarefa`,tarefas);

tarefas.unshift(`estudar para prova`)

console.log(`depois da nova tarefa`,tarefas);

console.log(`---------------------------------------------------------------------------`);

//Etapa 4

console.log(`Antes de remover a primeira tarefa do array`,tarefas);

tarefas.shift(``)

console.log(`Depois de remover a primeira tarefa do array`, tarefas);

console.log(`---------------------------------------------------------------------------`);

//Etapa 5
console.log("A playlist inclui `Ir à academia`?" , tarefas.includes(`Ir à academia`));

console.log(`---------------------------------------------------------------------------`);

//Etapa 6

console.log(`tarefas como string : ${tarefas.join(`, `)}`);

console.log(`---------------------------------------------------------------------------`);

//Etapa 7

console.log("parte da lista de tarefas (indices 2 ao 4):",tarefas.slice(2, 5))

console.log(`---------------------------------------------------------------------------`);

//Etapa 8
let tarefaRemovidas= tarefas.splice(3,1, (`jogar futebol`))

console.log(`tarefa removida: ${tarefaRemovidas}`);

console.log(`depois ${tarefas}`);

console.log(`---------------------------------------------------------------------------`);

//Etapa 9

let tarefasNovas=["jogar cs","ir no aniversario do leo"]
console.log(`tarefas antes`, tarefas);

console.log(`tarefas combinadas: ${tarefas.concat(tarefasNovas)}`);


console.log(`---------------------------------------------------------------------------`);
