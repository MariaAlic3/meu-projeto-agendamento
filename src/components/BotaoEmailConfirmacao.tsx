import dadosSalao from '../data/salao.json'
import type { Agendamento } from '../types/agendamento'
import type { ContatoSalao } from '../types/salao'
import { linkEmailConfirmacao } from '../utils/emailConfirmacao'

const salao: ContatoSalao = dadosSalao

interface BotaoEmailConfirmacaoProps {
  agendamento: Agendamento
}

function BotaoEmailConfirmacao({ agendamento }: BotaoEmailConfirmacaoProps) {
  return <a href={linkEmailConfirmacao(agendamento, salao)}>Enviar confirmação por e-mail</a>
}

export default BotaoEmailConfirmacao
