/** Data de hoje no formato aaaa-mm-dd, no fuso do aparelho. */
export function hojeIso(): string {
  const agora = new Date()
  const mes = String(agora.getMonth() + 1).padStart(2, '0')
  const dia = String(agora.getDate()).padStart(2, '0')
  return `${agora.getFullYear()}-${mes}-${dia}`
}

/** Converte aaaa-mm-dd para dd/mm/aaaa. */
export function formatarData(dataIso: string): string {
  const [ano, mes, dia] = dataIso.split('-')
  return `${dia}/${mes}/${ano}`
}
