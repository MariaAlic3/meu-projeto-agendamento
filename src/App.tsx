import { useState } from 'react'
import FormularioAgendamento from './components/FormularioAgendamento'
import ListaAgendamentos from './components/ListaAgendamentos'
import dadosIniciais from './data/agendamentos.json'
import type { Agendamento } from './types/agendamento'
import { formatarData, hojeIso } from './utils/datas'

function App() {
  const [agendamentos, setAgendamentos] = useState<Agendamento[]>(dadosIniciais)
  const hoje = hojeIso()
  const agendamentosDoDia = agendamentos.filter((a) => a.data === hoje)

  function adicionar(novo: Omit<Agendamento, 'id'>) {
    const proximoId = Math.max(0, ...agendamentos.map((a) => a.id)) + 1
    setAgendamentos([...agendamentos, { id: proximoId, ...novo }])
  }

  return (
    <main>
      <h1>Agenda do Salão</h1>
      <h2>Agendamentos de hoje ({formatarData(hoje)})</h2>
      <ListaAgendamentos agendamentos={agendamentosDoDia} />
      <h2>Novo agendamento</h2>
      <FormularioAgendamento dataInicial={hoje} onAdicionar={adicionar} />
    </main>
  )
}

export default App
