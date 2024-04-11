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
  tipoTransacao: string;
  data: Date;
  valor: number;
};

const novaTransacao: Transacao = {
  tipoTransacao: "",
  data: new Date(),
  valor: 0,
};
