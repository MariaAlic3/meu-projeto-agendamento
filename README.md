# Agenda do Salão

Sistema web simples para um salão de bairro controlar agendamentos e evitar conflitos de horário.

## Para quem é este projeto

Hoje, muitos salões de bairro anotam horários num caderno, e isso gera
clientes marcadas no mesmo horário, esquecimentos e dinheiro perdido.
Este sistema organiza a agenda do dia numa tela simples, que funciona
no celular. A dona do salão vê de uma vez quem vem, para qual serviço e
em que horário, e consegue marcar um novo atendimento em segundos.
Com menos confusão, ela atende melhor e não perde cliente por desencontro.

## Stack

- React + Vite + TypeScript
- Sem backend: os dados ficam em `src/data/agendamentos.json`

## Como rodar

```bash
npm install
npm run dev     # roda o projeto localmente
npm run build   # gera a versão final
```

## Estrutura

```
src/
  components/   # componentes React (PascalCase, um por arquivo)
  types/        # tipos dos dados
  utils/        # funções auxiliares (ex.: datas em dd/mm/aaaa) (em desenvolvimento)
  data/         # dados em JSON
```
