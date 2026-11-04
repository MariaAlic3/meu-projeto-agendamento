import type { Agendamento } from '../types/agendamento'
import BotaoEmailConfirmacao from './BotaoEmailConfirmacao'

interface ListaAgendamentosProps {
  agendamentos: Agendamento[]
}

function ListaAgendamentos({ agendamentos }: ListaAgendamentosProps) {
  if (agendamentos.length === 0) {
    return <p>Nenhum agendamento para hoje.</p>
  }

  return (
    <ul>
      {agendamentos.map((agendamento) => (
        <li key={agendamento.id}>
          {agendamento.hora} — {agendamento.cliente} ({agendamento.servico}){' '}
          <BotaoEmailConfirmacao agendamento={agendamento} />
        </li>
      ))}
    </ul>
  )
}

export default ListaAgendamentos
