let criarTask = document.querySelector(".submit");
let titleInput = document.querySelector("#tarefa");
let descriptionInput = document.querySelector("#descricao");
let todosCard = document.querySelector("#todosCard");
let progressCard = document.querySelector("#progressCard");
let doneCard = document.querySelector("#doneCard");

const todos = [];

let showTasks = (task, page) => {
  if (titleInput.value === "") {
    alert("Você precisa preencher o título da tarefa");
    return;
  }
  
  let tarefa = document.createElement("p");
  tarefa.classList.add("tarefa-estilizada");
  tarefa.textContent = titleInput.value;

  let descricao = document.createElement("p");
  descricao.classList.add("descricao-estilizada");
  descricao.textContent = descriptionInput.value;

  let detalhes = document.createElement("details");
  detalhes.appendChild(descricao);

  let sumario = document.createElement("summary");
  sumario.textContent = "Ler Descrição";

  sumario.addEventListener("click", () => {
    if (detalhes.open) {
      sumario.textContent = "Ler Descrição";
    } else {
      sumario.textContent = "Esconder Descrição";
    }
  });

  detalhes.appendChild(sumario);

  let imagemFechar = document.createElement("img");
  imagemFechar.src = "assets/close-square-svgrepo-com.png";

  let imagemNext = document.createElement("img");
  imagemNext.src = "assets/right-svgrepo-com.png";

  let botaoFechar = document.createElement("button");
  botaoFechar.classList.add("close-tarefa-todo");
  botaoFechar.appendChild(imagemFechar);
  botaoFechar.addEventListener("click", () => {
    return mainContainer.remove();
  });

  let botaoNext = document.createElement("button");
  botaoNext.classList.add("next-step-tarefa");
  botaoNext.appendChild(imagemNext);

  let botaoNextClickHandler = () => {
    
    progressCard.appendChild(mainContainer);
   
    botaoNext.removeEventListener('click', botaoNextClickHandler);

    botaoNext.addEventListener('click', () => {
      doneCard.appendChild(mainContainer)
      tarefa.classList.add('riscado')
      botaoNext.remove()
    })
  };
  botaoNext.addEventListener("click", botaoNextClickHandler);

  let divBotoes = document.createElement("div");
  divBotoes.classList.add("div-botoes");
  divBotoes.appendChild(botaoFechar);

  let divBotoesSetas = document.createElement("div")
  divBotoesSetas.classList.add('div-botoes-setas')
  divBotoes.appendChild(divBotoesSetas)
  divBotoesSetas.appendChild(botaoNext)

  let divTarefa = document.createElement("div");
  divTarefa.classList.add("card-content");
  divTarefa.appendChild(tarefa);
  divTarefa.appendChild(detalhes);

  let mainContainer = document.createElement("div");
  mainContainer.classList.add("tarefas-container");
  mainContainer.id = `tarefas-container-${task}`;
  mainContainer.appendChild(divTarefa);
  mainContainer.appendChild(divBotoes);

  if (page) {
    page.appendChild(mainContainer);
  }
};

criarTask.addEventListener("click", gerarTarefa);

function gerarTarefa() {
  showTasks(todos.length + 1, todosCard);
  todos.push(titleInput.value);
  titleInput.value = '';
  descriptionInput.value = "";
}


