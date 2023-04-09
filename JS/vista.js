const btnSanduiche = document.getElementById("btnSanduiche");

function toggleMenu() {
  const nav = document.getElementById("nav");
  nav.classList.toggle("active");
}

btnSanduiche.addEventListener("click", toggleMenu);

const btnViewVisits = document.getElementById("btnViewVisits");

btnViewVisits.addEventListener("click", () => {
  console.log("epa");
  handleGetUsers();
});

function handleGetUsers() {
  console.log("opa");
  const result = fetch("http://localhost:3333/")
    .then((response) => response.json())
    .then((response) => {
      response.map((user) => {
        const li = document.createElement("li");
        const text = document.createTextNode(user.name);

        li.appendChild(document.createTextNode(user.name));

        document.getElementById("lista").appendChild(li);
      });
    });
  console.log(result);
}

const iptID = document.querySelector("#iptId");
const iptName = document.querySelector("#iptName");
const btnEnviar = document.getElementById("btnEnviar");

btnEnviar.addEventListener("click", () => {
  handleCreateUser();
});

function handleCreateUser() {
  const user = { id: +iptID.value, name: iptName.value };

  fetch("http://localhost:3333/createuser", {
    method: "POST",
    body: JSON.stringify(user),
    headers: { "Content-type": "application/json; charset=UTF-8" },
  });
}
