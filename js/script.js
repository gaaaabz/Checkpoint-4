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
const listaTarefas = document.querySelector("#lista-tarefas");
listaTarefas.textContent = "Tarefas: "

let botaoAdicionar = document.querySelector("#btnadicionar");
botaoAdicionar.addEventListener("click", () => {
    let novaTarefa = {
        nome: document.querySelector("#idinputtarefas").value.trim(),
        concluida: false}
    tarefas.push(novaTarefa);
    imprimirLista()
    //exercício 3
    alert("Tarefa adicionada com sucesso!");
})

//exercicio 4
function imprimirLista(){
    listaTarefas.innerHTML = "";
    tarefas.forEach((tarefa,index) => {
    
    const li = document.createElement("li");
    li.textContent = `${tarefa.nome} - ${tarefa.concluida == true ?"Concluída✅":"Não Concluída❌"}`;
    listaTarefas.appendChild(li)

});
}
imprimirLista()

