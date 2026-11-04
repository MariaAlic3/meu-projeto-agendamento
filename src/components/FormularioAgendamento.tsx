import { useState } from 'react'
import type { FormEvent } from 'react'
import type { Agendamento } from '../types/agendamento'

interface FormularioAgendamentoProps {
  dataInicial: string
  onAdicionar: (novo: Omit<Agendamento, 'id'>) => void
}

function FormularioAgendamento({ dataInicial, onAdicionar }: FormularioAgendamentoProps) {
  const [cliente, setCliente] = useState('')
  const [email, setEmail] = useState('')
  const [servico, setServico] = useState('')
  const [data, setData] = useState(dataInicial)
  const [hora, setHora] = useState('')

  function handleSubmit(evento: FormEvent<HTMLFormElement>) {
    evento.preventDefault()
    onAdicionar({ cliente, email, servico, data, hora })
    setCliente('')
    setEmail('')
    setServico('')
    setHora('')
  }

  return (
    <form onSubmit={handleSubmit}>
      <p>
        <label>
          Cliente <input value={cliente} onChange={(e) => setCliente(e.target.value)} required />
        </label>
      </p>
      <p>
        <label>
          E-mail <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        </label>
      </p>
      <p>
        <label>
          Serviço <input value={servico} onChange={(e) => setServico(e.target.value)} required />
        </label>
      </p>
      <p>
        <label>
          Data <input type="date" value={data} onChange={(e) => setData(e.target.value)} required />
        </label>
      </p>
      <p>
        <label>
          Hora <input type="time" value={hora} onChange={(e) => setHora(e.target.value)} required />
        </label>
      </p>
      <button type="submit">Adicionar</button>
    </form>
  )
}

export default FormularioAgendamento
