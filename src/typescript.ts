let valor: number = 3000;
let nome: string = "";
let isPago: boolean = false;
let qualquerValor: any = "";
qualquerValor = 22;

//ARRAYS
const lista = [];
lista.push("Jhonatan", 22, true);

//
const listaNumber: number[] = [];
lista.push(22, 12, 14, 5, 8);

//Tipos Personalizados (Type Alias)
type Transacao = {
  tipoTransacao: TipoTransacao;
  data: Date;
  valor: number;
};

//enum
enum TipoTransacao {
  DEPOSITO = "Depósito",
  TRANFERENCIA = "Transferência",
  PAGAMENTO_BOLETO = "Pagamento de Boleto",
}

const novaTransacao: Transacao = {
  tipoTransacao: TipoTransacao.DEPOSITO,
  data: new Date(),
  valor: 0,
};
