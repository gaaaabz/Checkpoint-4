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