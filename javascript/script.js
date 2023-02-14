 //função pro BUTTON

 function guardaForm() {
    var formsClientes = new Object();

    formsClientes.nome = document.getElementById("nome").value;
    formsClientes.sobrenome = document.getElementById("sobrenome").value;
    formsClientes.nascimento = document.getElementById("nascimento").value;
    formsClientes.profissao = document.getElementById("profissao").value;
    formsClientes.cpf = document.getElementById("cpf").value;
    formsClientes.cep = document.getElementById("cep").value;
    formsClientes.senha = document.getElementById("senha").value;
    formsClientes.confirmacao = document.getElementById("confirmacao").value;

    //converte para string JSON
     var formParaJson = JSON.stringify(formsClientes);

    document.getElementById("nomePrint").innerHTML = 'Nome: ' + formsClientes.nome;
    document.getElementById("sobrenomePrint").innerHTML = 'Sobrenome: ' + formsClientes.sobrenome;
    document.getElementById("nascimentoPrint").innerHTML = 'Nascimento: ' + formsClientes.nascimento;
    document.getElementById("profissaoPrint").innerHTML = 'Profissão: ' + formsClientes.profissao;
    document.getElementById("cpfPrint").innerHTML = 'CPF: ' + formsClientes.cpf;
    document.getElementById("cepPrint").innerHTML = 'CEP: ' + formsClientes.cep;
    document.getElementById("senhaPrint").innerHTML = 'Senha: ' + formsClientes.senha;
    document.getElementById("confirmacaoPrint").innerHTML = 'Confirmação da senha: ' + formsClientes.confirmacao;
   
    window.print()
    console.log(formsClientes.valueOf())

 }


//  para menu

const btnMobile = document.getElementById('btn-mobile');

function toggleMenu(event) {
  if (event.type === 'touchstart') event.preventDefault();
  const nav = document.getElementById('nav');
  nav.classList.toggle('active');
  const active = nav.classList.contains('active');
  event.currentTarget.setAttribute('aria-expanded', active);
  if (active) {
    event.currentTarget.setAttribute('aria-label', 'Fechar Menu');
  } else {
    event.currentTarget.setAttribute('aria-label', 'Abrir Menu');
  }
}

btnMobile.addEventListener('click', toggleMenu);
btnMobile.addEventListener('touchstart', toggleMenu);