# Testes do projeto

Os testes automatizados são executados com:

```bash
npm test -- --run
```

## O que os testes verificam

- **Autoavaliação (`src/__tests__/pages/Autoavaliacao.test.tsx`)**: verifica se a tela inicial e o botão para começar são exibidos.
- **Fluxo da autoavaliação (`src/__tests__/integration/autoavaliacao-flow.test.tsx`)**: percorre as nove perguntas, verifica a conclusão e confere pontuações e classificações para diferentes respostas.
- **Classificação (`src/__tests__/utils/classificacao.test.ts`)**: verifica as classificações de uso inicial, moderado e frequente, além dos dados retornados pela função.
- **Páginas (`src/__tests__/pages/Paginas.test.tsx`)**: verifica se a página inicial, a página de Transformação Digital e a de Ferramentas Digitais exibem seus títulos principais.
- **Header (`src/__tests__/components/Header.test.tsx`)**: verifica se a marca do guia e o menu principal aparecem.
- **Footer (`src/__tests__/components/Footer.test.tsx`)**: verifica se o nome do guia e a descrição da cartilha aparecem.

Esses testes cobrem renderização e comportamentos essenciais; não substituem testes de todos os detalhes visuais ou de todas as interações possíveis.
