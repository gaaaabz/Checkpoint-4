//exercicio 1
let tarefas = [{"id":"0001",
    "nome":"Escovar os dentes",
    "concluida": true  }];
let tarefa1 =
    {"id":"0002",
    "nome":"Arrumar cama",
    "concluida": false  };

tarefas = [...tarefas, tarefa1];
console.log(tarefas);

//exercicio 2
const ListaTarefas = document.querySelector("#lista-tarefas");
ListaTarefas.textContent = "Tarefas: "

tarefas.forEach((tarefas) => {
    const li = document.createElement("li");
    li.textContent = tarefas.nome;
    ListaTarefas.appendChild(li)
});

let botaoAdicionar = document.querySelector("#btnadicionar");
botaoAdicionar.addEventListener("click", () => {
    const li = document.createElement("li");
    li.textContent = document.querySelector("#idinputtarefas").value;
    ListaTarefas.appendChild(li);
    //exercício 3
    alert("Tarefa adicionada com sucesso!");
})