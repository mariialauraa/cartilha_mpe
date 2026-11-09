# Testes do projeto

Os testes automatizados são executados com:

```bash
npm test -- --run
```

## O que os testes verificam

- **Autoavaliação (`src/__tests__/pages/Autoavaliacao.test.tsx`)**: verifica se a tela inicial e o botão para começar são exibidos.
- **Fluxo da autoavaliação (`src/__tests__/integration/autoavaliacao-flow.test.tsx`)**: percorre as nove perguntas, verifica a conclusão e confere pontuações e classificações para diferentes respostas.
- **Navegação das recomendações (`src/__tests__/integration/navegacao-ferramentas.test.tsx`)**: verifica os links das três oportunidades, a abertura exclusiva da seção indicada, a rolagem e o foco no destino, inclusive no acesso direto e na troca de seção. Confere também a navegação geral sem oportunidades e o retorno ao topo nas páginas sem âncora.
- **Classificação (`src/__tests__/utils/classificacao.test.ts`)**: verifica as classificações de uso inicial, moderado e frequente, além dos dados retornados pela função.
- **Páginas (`src/__tests__/pages/Paginas.test.tsx`)**: verifica se a página inicial, a página de Transformação Digital e a de Ferramentas Digitais exibem seus títulos principais.
- **Header (`src/__tests__/components/Header.test.tsx`)**: verifica se a marca do guia e o menu principal aparecem.
- **Footer (`src/__tests__/components/Footer.test.tsx`)**: verifica se o nome do guia e a descrição da cartilha aparecem.

Esses testes cobrem renderização e comportamentos essenciais; não substituem testes de todos os detalhes visuais ou de todas as interações possíveis.
