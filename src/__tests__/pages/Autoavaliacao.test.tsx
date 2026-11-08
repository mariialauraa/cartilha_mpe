import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Autoavaliacao from '../../pages/Autoavaliacao';

describe('Autoavaliacao', () => {
  it('deve renderizar o componente', () => {
    render(
      <BrowserRouter>
        <Autoavaliacao />
      </BrowserRouter>
    );
    const texto = screen.queryByText('Como sua empresa utiliza as ferramentas digitais?');
    expect(texto).toBeTruthy();
  });

  it('deve ter botão para começar avaliação', () => {
    render(
      <BrowserRouter>
        <Autoavaliacao />
      </BrowserRouter>
    );
    const botao = screen.queryByRole('button', { name: /começar/i });
    expect(botao).toBeTruthy();
  });
});
