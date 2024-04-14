import Conta from "../types/Conta.js";
import { FormatoData } from "../types/FarmatoData.js";
import { formatarMoeda, formatarData } from "../utils/formatters.js";
const elementoRegistroTransacoesExtrato = document.querySelector(".extrato .registro-transacoes");
renderizarExtrato();
function renderizarExtrato() {
    const getGruposTransacoes = Conta.getGruposTransacoes();
    elementoRegistroTransacoesExtrato.innerHTML = "";
    let htmlRegistroTransacoes = "";
    for (let GrupoTransacao of getGruposTransacoes) {
        let htmlTransacoeItem = "";
        for (let transacao of GrupoTransacao.transacoes) {
            htmlTransacoeItem += `
        <div class="transacao-item">
          <div class="transacao-info">
            <span class="tipo">${transacao.tipoTransacao}</span>
            <strong class="valor">${formatarMoeda(transacao.valor)}</strong>
          </div>
          <time class="data">${formatarData(transacao.data, FormatoData.DIA_MES)}}</time>
        </div>
      `;
            htmlRegistroTransacoes += `
      <div class="transacoes-group">
        <strong class="mes-group">${GrupoTransacao.label}</strong>
        ${htmlTransacoeItem}
      </div>
      `;
        }
    }
    if (htmlRegistroTransacoes == "") {
        htmlRegistroTransacoes = `<div>Não há transações registradas.</div>`;
    }
    elementoRegistroTransacoesExtrato.innerHTML = htmlRegistroTransacoes;
}
