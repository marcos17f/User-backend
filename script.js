const openModal = document.getElementById("openModal");
const closeModal = document.getElementById("closeModal");
const modal = document.getElementById("modal");
const overlay = document.getElementById("overlay");
const form = document.querySelector("form");

openModal.addEventListener("click", () => {
  modal.classList.add("active");
  overlay.classList.add("active");
});

closeModal.addEventListener("click", () => {
  modal.classList.remove("active");
  overlay.classList.remove("active");
});

overlay.addEventListener("click", () => {
  modal.classList.remove("active");
  overlay.classList.remove("active");
});

// Integração com o Backend Java
form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const username = document.getElementById("username").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  const userData = {
    username: username,
    email: email,
    password: password
  };

  try {
    const response = await fetch("http://localhost:8080/api/usuarios", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(userData)
    });

    if (response.ok) {
      alert("Usuário cadastrado com sucesso!");
      form.reset();
      modal.classList.remove("active");
      overlay.classList.remove("active");
    } else {
      alert("Erro ao cadastrar usuário.");
    }
  } catch (error) {
    console.error("Erro na requisição:", error);
    alert("Não foi possível conectar ao servidor.");
  }
});
