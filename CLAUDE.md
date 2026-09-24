# Projeto: Agenda do Salão

## Contexto
Sistema web simples para um salão de bairro controlar agendamentos.
A dona do salão marca horários hoje num caderno e perde clientes por
conflito de horário. Usuária principal: pessoa não técnica, usa celular.

## Stack
- React + Vite, TypeScript (template react-ts)
- Sem backend por enquanto: dados ficam em memória/arquivo JSON

## Convenções
- Todos os arquivos em .ts ou .tsx, nunca .js/.jsx
- Não usar `any`; tipos dos dados ficam em src/types/
- Componentes em PascalCase, um por arquivo, em src/components/
- Textos da interface sempre em português
- Datas no formato brasileiro (dd/mm/aaaa) na tela

## Comandos
- `npm run dev` → roda o projeto localmente
- `npm run build` → gera a versão final

## Não faça
- Não instale bibliotecas novas sem me perguntar antes