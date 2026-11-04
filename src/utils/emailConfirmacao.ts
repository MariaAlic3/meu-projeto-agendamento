import type { Agendamento } from '../types/agendamento'
import type { ContatoSalao } from '../types/salao'
import { formatarData } from './datas'

/** Texto padrão do e-mail de confirmação, igual para todas as clientes. */
export function montarEmailConfirmacao(agendamento: Agendamento, salao: ContatoSalao) {
  const assunto = `Confirmação do seu horário - ${salao.nome}`
  const corpo = [
    `Olá, ${agendamento.cliente}! Tudo bem?`,
    '',
    `Seu horário no ${salao.nome} está confirmado:`,
    '',
    `Serviço: ${agendamento.servico}`,
    `Data: ${formatarData(agendamento.data)}`,
    `Horário: ${agendamento.hora}`,
    '',
    'Se precisar remarcar ou cancelar, é só falar com a gente:',
    `WhatsApp: https://wa.me/${salao.whatsapp}`,
    `Instagram: https://instagram.com/${salao.instagram}`,
    `Endereço: ${salao.endereco}`,
    '',
    'Esperamos por você!',
    `Equipe ${salao.nome}`,
  ].join('\n')

  return { assunto, corpo }
}

/** Link mailto: que abre o app de e-mail com a mensagem já preenchida. */
export function linkEmailConfirmacao(agendamento: Agendamento, salao: ContatoSalao): string {
  const { assunto, corpo } = montarEmailConfirmacao(agendamento, salao)
  const parametros = `subject=${encodeURIComponent(assunto)}&body=${encodeURIComponent(corpo)}`
  return `mailto:${encodeURIComponent(agendamento.email)}?${parametros}`
}
