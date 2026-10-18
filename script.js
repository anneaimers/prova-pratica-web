// menos de 150 min/semana = sedentário

const META_SEMANAL = 150; // const valor que não muda

let btnCalcular = document.querySelector("#btn-calcular");
let campoNome = document.querySelector("#nome");
let campoMinutos = document.querySelector("#minutos");
let divResultado = document.querySelector("#resultado");

btnCalcular.addEventListener("click", function (event) {
  event.preventDefault(); // impede a página de recarregar

  let nome = campoNome.value;
  let minutos = Number(campoMinutos.value);

  // condição ? valorseverdadeiro : valorsefalso
  let situacao = minutos >= META_SEMANAL
    ? "você NÃO é sedentário"
    : "você é sedentário";

  if (nome === "" || campoMinutos.value === "") {
    divResultado.innerHTML = "<p>Preencha todos os campos para calcular.</p>";
  } else if (minutos >= META_SEMANAL) {
    let excedente = minutos - META_SEMANAL;
    divResultado.innerHTML = `<p>Olá, <strong>${nome}</strong>! Com <strong>${minutos} min</strong> por semana, ${situacao}. Você supera a meta em <strong>${excedente} min</strong>.</p>`;
  } else {
    let faltam = META_SEMANAL - minutos;
    divResultado.innerHTML = `<p>Olá, <strong>${nome}</strong>! Com <strong>${minutos} min</strong> por semana, ${situacao}. Faltam <strong>${faltam} min</strong> para atingir a meta de ${META_SEMANAL} min semanais.</p>`;
  }
});