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

let botaoAdicionar = document.querySelector("#btnadicionar");
botaoAdicionar.addEventListener("click", () => {
    let novaTarefa = {
        nome: document.querySelector("#idinputtarefas").value.trim(),
        concluida: false}
    if (novaTarefa.nome == ""){
        alert("Preencha o campo corretamente")
        return
    }
    tarefas.push(novaTarefa);
    imprimirLista(tarefas)
    //exercício 3
    alert("Tarefa adicionada com sucesso!");
})

//exercicio 4
function imprimirLista(tarefas){
    listaTarefas.innerHTML = "";
    listaTarefas.textContent = "Tarefas: "
    tarefas.forEach((tarefa,index) => {
    
    const li = document.createElement("li");
    //exercicio5
    li.textContent = `${tarefa.nome} - ${tarefa.concluida == true ?"Concluída✅":"Não Concluída❌"}`;
    botaoConcluido = document.createElement("button")
    botaoConcluido.textContent = tarefa.concluida ? "Não concluido" : "Concluir"
    botaoConcluido.addEventListener("click", () => {
        tarefa.concluida = !tarefa.concluida
        imprimirLista()
    })
    li.appendChild(botaoConcluido)
    listaTarefas.appendChild(li)

});
}
imprimirLista(tarefas)
//exercicio6
let botaoPendentes = document.querySelector("#btnpendentes")
botaoPendentes.addEventListener("click", () => {
    listaPendentes = tarefas.filter(tarefa => tarefa.concluida == false)
    imprimirLista(listaPendentes)
})

