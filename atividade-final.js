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

