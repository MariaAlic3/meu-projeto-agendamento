/*
 * Regra: agendamento sem conflito de horário.
 *
 * Como este arquivo surgiu (TDD):
 *  1. VERMELHO — commit 44cda90 adicionou src/utils/agendar.test.ts, que
 *     importava `agendar` daqui. O teste falhava com
 *     "Cannot find module './agendar'": a regra ainda não existia
 *     (motivo certo, não erro de digitação).
 *  2. VERDE — este arquivo foi escrito só para fazer aquele teste passar,
 *     sem alterar o arquivo de teste. Para provar isso:
 *       git diff --exit-code --stat 44cda90 -- src/utils/agendar.test.ts
 *     (saída vazia e código 0 = o teste não foi tocado).
 */
import type { Agendamento } from '../types/agendamento'

export interface ResultadoAgendamento {
  ok: boolean
  /** Mensagem para a dona do salão quando o agendamento é recusado */
  erro?: string
  /** Lista atualizada (igual à original quando recusado) */
  agendamentos: Agendamento[]
}

/** Duração assumida quando o agendamento não informa `horaFim`. */
const DURACAO_PADRAO_MINUTOS = 60

/** Converte "hh:mm" em minutos desde a meia-noite ("14:30" → 870). */
function paraMinutos(hora: string): number {
  const [h, m] = hora.split(':').map(Number)
  return h * 60 + m
}

function intervalo(a: Agendamento): { inicio: number; fim: number } {
  const inicio = paraMinutos(a.hora)
  const fim = a.horaFim ? paraMinutos(a.horaFim) : inicio + DURACAO_PADRAO_MINUTOS
  return { inicio, fim }
}

/**
 * Dois horários conflitam se são no mesmo dia e os intervalos se sobrepõem.
 * Usamos "<" (e não "<="): terminar às 15:00 e o próximo começar às 15:00
 * NÃO é conflito.
 */
function conflita(a: Agendamento, b: Agendamento): boolean {
  if (a.data !== b.data) return false
  const x = intervalo(a)
  const y = intervalo(b)
  return x.inicio < y.fim && y.inicio < x.fim
}

/**
 * Tenta incluir um novo agendamento, recusando se o horário
 * já estiver ocupado por outro agendamento.
 */
export function agendar(existentes: Agendamento[], novo: Agendamento): ResultadoAgendamento {
  const conflito = existentes.find((a) => conflita(a, novo))
  if (conflito) {
    const fim = conflito.horaFim ? ` às ${conflito.horaFim}` : ''
    return {
      ok: false,
      erro: `Horário ocupado: já existe um agendamento das ${conflito.hora}${fim} neste dia.`,
      agendamentos: existentes,
    }
  }
  return { ok: true, agendamentos: [...existentes, novo] }
}
