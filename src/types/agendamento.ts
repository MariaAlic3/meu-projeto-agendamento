export interface Agendamento {
  id: number
  cliente: string
  /** E-mail da cliente, para envio da confirmação */
  email: string
  servico: string
  /** Data no formato aaaa-mm-dd (exibida na tela como dd/mm/aaaa) */
  data: string
  /** Hora no formato hh:mm */
  hora: string
}
