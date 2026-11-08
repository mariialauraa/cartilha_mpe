import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router';
import Home from '../../pages/Home';
import TransformacaoDigital from '../../pages/TransformacaoDigital';
import FerramentasDigitais from '../../pages/FerramentasDigitais';

describe('Páginas', () => {
  it('deve exibir o conteúdo principal da página inicial', () => {
    render(
      <BrowserRouter>
        <Home />
      </BrowserRouter>
    );

    expect(
      screen.getByRole('heading', {
        name: 'Transformação digital ao alcance do seu negócio.',
      })
    ).toBeTruthy();
  });

  it('deve exibir o título da página de transformação digital', () => {
    render(
      <BrowserRouter>
        <TransformacaoDigital />
      </BrowserRouter>
    );

    expect(
      screen.getByRole('heading', { name: 'Entenda a Transformação Digital' })
    ).toBeTruthy();
  });

  it('deve exibir o título da página de ferramentas digitais', () => {
    render(
      <BrowserRouter>
        <FerramentasDigitais />
      </BrowserRouter>
    );

    expect(
      screen.getByRole('heading', { name: 'Ferramentas Digitais' })
    ).toBeTruthy();
  });
});
