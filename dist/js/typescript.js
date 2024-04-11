let valor = 3000;
let nome = "";
let isPago = false;
let qualquerValor = "";
qualquerValor = 22;
//ARRAYS
const lista = [];
lista.push("Jhonatan", 22, true);
//
const listaNumber = [];
lista.push(22, 12, 14, 5, 8);
//enum
var TipoTransacao;
(function (TipoTransacao) {
    TipoTransacao["DEPOSITO"] = "Dep\u00F3sito";
    TipoTransacao["TRANFERENCIA"] = "Transfer\u00EAncia";
    TipoTransacao["PAGAMENTO_BOLETO"] = "Pagamento de Boleto";
})(TipoTransacao || (TipoTransacao = {}));
const novaTransacao = {
    tipoTransacao: TipoTransacao.DEPOSITO,
    data: new Date(),
    valor: 0,
};
