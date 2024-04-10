let saldo = 3000;

const elementoSaldo = document.querySelector(".saldo-valor .valor");
elementoSaldo.textContent = saldo;

const elementoFormulario = document.querySelector(".block-nova-transacao form");
elementoFormulario.addEventListener("submit", function (e) {
  e.preventDefault();
  if (!elementoFormulario.checkValidity()) {
    alert("Por favor, preencha todos os campos da transação!");
    return;
  }

  const inputTipoTransacao = elementoFormulario.querySelector("#tipoTransacao");
  const inputValor = elementoFormulario.querySelector("#valor");
  const inputData = elementoFormulario.querySelector("#data");

  let tipoTransacao = inputTipoTransacao.value;
  let valor = inputValor.value;
  let data = inputData.value;

  if (tipoTransacao == "Depósito") {
    saldo += valor;
  } else if (
    tipoTransacao == "Transferência" ||
    tipoTransacao == "Pagamento de Boleto"
  ) {
    saldo -= valor;
  } else {
    alert("tipo de transacão é inválida!");
    return;
  }

  elementoSaldo.textContent = saldo;
  const novaTransacao = {
    tipoTransacao: tipoTransacao,
    valor: valor,
    data: data,
  };

  console.log(novaTransacao);
  elementoFormulario.reset();
});