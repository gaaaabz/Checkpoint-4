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
        imprimirLista(tarefas);
    })
    li.appendChild(botaoConcluido);

    //implementação extra
    botaoExcluir = document.createElement("button");
    botaoExcluir.textContent = "Excluir";
    botaoExcluir.style.backgroundColor = "red";
    botaoExcluir.style.marginLeft = "10px";
    botaoExcluir.addEventListener("click", () => {
        tarefas.splice(index, 1);
        imprimirLista(tarefas);

    })
    li.appendChild(botaoExcluir)
    listaTarefas.appendChild(li);

});
}

//exercicio6
let botaoPendentes = document.querySelector("#btnpendentes");
botaoPendentes.addEventListener("click", () => {
    listaPendentes = tarefas.filter(tarefa => tarefa.concluida == false);
    imprimirLista(listaPendentes);
})

//exercicio7
let tarefasMaiusculas = tarefas.map(tarefa => {
    return {
        nome: tarefa.nome.toUpperCase(),
        concluida: tarefa.concluida
    };
});
console.log(tarefasMaiusculas);

//exercicio8
let botaoCalcular = document.querySelector("#btncalcular");
botaoCalcular.addEventListener("click", () => {
    let tarefasConcluidas = tarefas.reduce((finalizados, tarefa) => {
        return tarefa.concluida ? finalizados + 1 : finalizados;
    }, 0);
    console.log(tarefasConcluidas)
    switch (tarefasConcluidas){
        case 0: 
            alert("Nenhuma tarefa concluída");
            break;
        case 1:
            alert("Apenas uma tarefa concluída");
            break;
        case tarefas.length:
            alert("Parabéns! Todas as tarefas foram concluídas");
            break;
        default:
            alert(`Você concluiu ${tarefasConcluidas} tarefas`)
    }
})

//exercicio9
const {nome, concluida} = tarefas[0];
console.log(nome, concluida);

//exercicio10
function criarTarefa(id, nome, concluida){
    let novaTarefa = {
        id : id,
        nome: nome,
        concluida: concluida};
    tarefas.push(novaTarefa);
};

//Desafio
function criarTarefasRest(...novasTarefas) {
    for (let tarefa of novasTarefas) {
        tarefas.push(tarefa); 
    }
}

criarTarefasRest(
    { id: "0001", nome: "Lição de Java", concluida: false },
    { id: "0002", nome: "Alimentar gato", concluida: true },
    { id: "0003", nome: "Lavar a louça", concluida: true }
);

imprimirLista(tarefas);