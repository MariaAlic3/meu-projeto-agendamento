export interface Agendamento {
  id: number
  cliente: string
  /** E-mail da cliente, para envio da confirmação */
  email: string
  servico: string
  /** Data no formato aaaa-mm-dd (exibida na tela como dd/mm/aaaa) */
  data: string
  /** Hora de início no formato hh:mm */
  hora: string
  /**
   * Hora de término no formato hh:mm.
   * Opcional porque os agendamentos antigos (e o formulário atual) ainda não
   * informam o término; nesse caso a regra de conflito assume 60 minutos.
   * Campo criado na etapa "verde" do TDD, porque o teste de conflito o usa.
   */
  horaFim?: string
}
