import { describe, expect, it } from 'vitest'
import type { Agendamento } from '../types/agendamento'
import { agendar } from './agendar'

describe('Agendamento sem conflito de horário', () => {
  it('Recusar agendamento em horário já ocupado', () => {
    // Dado que já existe um agendamento das 14:00 às 15:00 no dia 10/12/2026
    const agendamentoExistente: Agendamento = {
      id: 1,
      cliente: 'Ana Souza',
      email: 'ana.souza@exemplo.com',
      servico: 'Corte',
      data: '2026-12-10',
      hora: '14:00',
      horaFim: '15:00',
    }

    // Quando uma cliente tenta agendar um serviço das 14:30 às 15:30 no mesmo dia
    const novoAgendamento: Agendamento = {
      id: 2,
      cliente: 'Beatriz Lima',
      email: 'beatriz.lima@exemplo.com',
      servico: 'Escova',
      data: '2026-12-10',
      hora: '14:30',
      horaFim: '15:30',
    }
    const resultado = agendar([agendamentoExistente], novoAgendamento)

    // Então o sistema recusa o novo agendamento
    expect(resultado.ok).toBe(false)

    // E informa que o horário está ocupado
    expect(resultado.erro).toMatch(/ocupado/i)
  })
})
