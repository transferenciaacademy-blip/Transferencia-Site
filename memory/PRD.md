# PRD - Transferência Academy

## Problema Original
Criar um layout completo e moderno para um site da "Transferência Academy". O design deve ser dinâmico, responsivo e profissional, inspirado no estilo do site da Meds.

**Paleta de Cores**: Azul escuro (#0A1A40), Dourado (#D4A017) e Branco (#FFFFFF)

## Escolhas do Usuário
1. **Imagens**: Deixar que a IA escolha as melhores opções
2. **Seção de Editais**: Sistema dinâmico com backend (adicionar/editar/remover editais)
3. **Formulários**: Botões de CTA que redirecionam para WhatsApp
4. **Conteúdo**: Textos/copy sugestivos
5. **Funcionalidades**: Site institucional (sem blog/login por enquanto)

## Arquitetura
- **Frontend**: React + TailwindCSS + Shadcn UI
- **Backend**: FastAPI + MongoDB (a ser implementado)
- **Imagens**: Unsplash/Pexels (15 imagens profissionais selecionadas)

## Implementado (21/01/2025)

### Frontend Completo com Mock Data
✅ **Estrutura de Componentes**:
- `/app/frontend/src/components/Header.jsx` - Header fixo com navegação responsiva
- `/app/frontend/src/components/Hero.jsx` - Seção hero principal com CTA
- `/app/frontend/src/components/Sobre.jsx` - Sobre a Academy
- `/app/frontend/src/components/ComoFunciona.jsx` - 5 passos para aprovação
- `/app/frontend/src/components/Editais.jsx` - Lista de editais com filtros (busca e status)
- `/app/frontend/src/components/Depoimentos.jsx` - Depoimentos de alunos aprovados
- `/app/frontend/src/components/Diferenciais.jsx` - 4 diferenciais principais
- `/app/frontend/src/components/CTA.jsx` - Call-to-action final
- `/app/frontend/src/components/Footer.jsx` - Rodapé completo com links

✅ **Mock Data** (`/app/frontend/src/mock.js`):
- 6 editais mockados (3 abertos, 1 fechado)
- 3 depoimentos com fotos e avaliações
- 4 diferenciais com ícones
- 5 passos do processo
- Estatísticas (500+ aprovados, 50+ universidades, etc.)

✅ **Funcionalidades**:
- Navegação smooth scroll entre seções
- Filtros funcionais na seção de editais (busca por texto + status)
- Header fixo com mudança de estilo no scroll
- Todos os CTAs redirecionam para WhatsApp
- Design responsivo (mobile, tablet, desktop)
- Animações suaves em todas as seções
- Uso correto de lucide-react para ícones (NUNCA emojis)

✅ **Design**:
- Cores: Azul escuro (#0A1A40), Dourado (#D4A017), Branco
- Sem gradientes escuros coloridos
- Espaçamento profissional e generoso
- Micro-animações em hover
- Componentes Shadcn UI utilizados corretamente

## Próxima Fase: Backend

### API Endpoints a Implementar
```
POST   /api/editais          - Criar novo edital
GET    /api/editais          - Listar todos editais (com filtros)
GET    /api/editais/:id      - Buscar edital por ID
PUT    /api/editais/:id      - Atualizar edital
DELETE /api/editais/:id      - Deletar edital
```

### Modelos MongoDB
**Edital**:
```json
{
  "universidade": "string",
  "curso": "string",
  "vagas": "number",
  "dataAbertura": "date",
  "dataFechamento": "date",
  "status": "enum[aberto, fechado]",
  "requisitos": "string",
  "link": "string",
  "createdAt": "date",
  "updatedAt": "date"
}
```

### Integração Frontend-Backend
1. Remover mock.js após backend estar pronto
2. Criar serviço API em `/app/frontend/src/services/api.js`
3. Substituir dados mockados por chamadas reais
4. Adicionar loading states e error handling

## Backlog Priorizado

### P0 - Essencial para Lançamento
- [ ] Backend para gerenciamento de editais
- [ ] Integração frontend-backend
- [ ] Testes end-to-end

### P1 - Importante
- [ ] Sistema de admin para adicionar/editar editais
- [ ] Validações de formulário
- [ ] Mensagens de erro/sucesso

### P2 - Melhorias Futuras
- [ ] SEO optimization
- [ ] Analytics integration
- [ ] Sistema de newsletter
- [ ] Blog de notícias
- [ ] Área de login para alunos

## Próximas Tarefas
1. Implementar backend para editais (CRUD completo)
2. Testar endpoints com curl/Postman
3. Integrar frontend com backend
4. Testes completos com testing_agent_v3
5. Deploy e configuração de domínio
