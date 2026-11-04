/** Dados de contato do salão, usados nas mensagens enviadas às clientes. */
export interface ContatoSalao {
  nome: string
  /** Número com DDI e DDD, só dígitos (ex.: 5571999999999) */
  whatsapp: string
  /** Usuário do Instagram, sem o @ */
  instagram: string
  endereco: string
}
