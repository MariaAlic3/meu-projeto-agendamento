import type { Agendamento } from '../types/agendamento'

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
          {agendamento.hora} — {agendamento.cliente} ({agendamento.servico})
        </li>
      ))}
    </ul>
  )
}

export default ListaAgendamentos
