const form = document.getElementById("form");
let linhas = "";
const nomes = [];
const telefones = [];

form.addEventListener("submit", function (e) {
  e.preventDefault();
  adicionaLinha();
  atualizaTabela();
  atualizaTotalContatos();
});

function adicionaLinha() {
  const inputNome = document.getElementById("name");
  const inputTelefone = document.getElementById("tel");

  if (nomes.includes(inputNome.value)) {
    alert(
      `O contato com nome ${inputNome.value} já existe na agenda. Favor verificar.`
    );
  } else if (telefones.includes(inputTelefone.value)) {
    alert(
      ` O telefone ${inputTelefone.value} já existe na agenda. Favor verificar.`
    );
  } else {
    nomes.push(inputNome.value);
    telefones.push(inputTelefone.value);

    let linha = `<tr>`;
    linha += `<td>${inputNome.value} </td>`;
    linha += ` <td>${inputTelefone.value} </td> `;
    linha += `  </tr>`;

    linhas += linha;
  }

  inputNome.value = "";
  inputTelefone.value = "";
}

function atualizaTabela() {
  const tabela = document.querySelector("tbody");
  tabela.innerHTML = linhas;
}

function atualizaTotalContatos() {
  const totalContatos = telefones.length;
  document.getElementById("totalContatos").innerHTML = totalContatos;
}
