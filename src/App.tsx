import { useState } from 'react'
import FormularioAgendamento from './components/FormularioAgendamento'
import ListaAgendamentos from './components/ListaAgendamentos'
import dadosIniciais from './data/agendamentos.json'
import type { Agendamento } from './types/agendamento'

/** Data de hoje no formato aaaa-mm-dd, no fuso do aparelho. */
function hojeIso(): string {
  const agora = new Date()
  const mes = String(agora.getMonth() + 1).padStart(2, '0')
  const dia = String(agora.getDate()).padStart(2, '0')
  return `${agora.getFullYear()}-${mes}-${dia}`
}

/** Converte aaaa-mm-dd para dd/mm/aaaa. */
function formatarData(dataIso: string): string {
  const [ano, mes, dia] = dataIso.split('-')
  return `${dia}/${mes}/${ano}`
}

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
