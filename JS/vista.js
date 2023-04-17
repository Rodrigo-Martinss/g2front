const btnSanduiche = document.getElementById("btnSanduiche");
const btnCadastrar = document.getElementById("btnCadastrar");
const modal = document.querySelector(".modal-container");
const modalActive = document.querySelector(".modal");
const tbody = document.querySelector("tbody");
const tecnico = document.querySelector("#m-tecnico");
const cliente = document.querySelector("#m-cliente");
const solicitacao = document.querySelector("#m-solicitacao");
const btnSalvar = document.querySelector("#btnSalvar");
const foraModal = document.querySelector("modal-container-active");

function removeClassModal() {
  modal.removeAttribute('class');
  modalActive.removeAttribute('class');
  modal.classList.add("modal-container");
  modalActive.classList.add("modal");
};

const removeclass =  removeClassModal();

function toggleMenu() {
  const nav = document.getElementById("nav");
  nav.classList.toggle("active");
}

btnSanduiche.addEventListener("click", toggleMenu);

function openModal() {
  if (modal.classList.contains("modal-container") && modalActive.classList.contains("modal") === true ){
    modal.removeAttribute('class');
    modalActive.removeAttribute('class');
    modal.classList.add("modal-container-active");
    modalActive.classList.add("modal-active");
  };  

  function handleCreateUser() {
    const visita = {
      tecnico: +tecnico.value,
      cliente: cliente.value,
      solicitacao: solicitacao.value,
    };

    fetch("http://localhost:3333/createuser", {
      method: "POST",
      body: JSON.stringify(visita),
      headers: { "Content-type": "application/json; charset=UTF-8" },
    });
  }
  btnSalvar.addEventListener("click", handleCreateUser);

  btnSalvar.onclick = e => {
    if (tecnico.value == '' || cliente.value == '' || solicitacao.value == '') {
      return
    }
  };
    e.preventDefault();
  
  modal.classList.remove("active");
}