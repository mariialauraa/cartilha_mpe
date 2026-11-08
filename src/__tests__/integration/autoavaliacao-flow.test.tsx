import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { BrowserRouter } from 'react-router-dom';
import Autoavaliacao from '../../pages/Autoavaliacao';

const renderWithRouter = (component: React.ReactElement) => {
  return render(<BrowserRouter>{component}</BrowserRouter>);
};

describe('Autoavaliacao - Fluxo Básico', () => {
  it('deve completar a avaliação com 9 perguntas', async () => {
    renderWithRouter(<Autoavaliacao />);

    const botaoComeco = screen.getByRole('button', { name: /começar/i });
    await userEvent.click(botaoComeco);

    for (let i = 0; i < 9; i++) {
      const radios = screen.getAllByRole('radio');
      await userEvent.click(radios[0]);

      const buttons = screen.getAllByRole('button');
      const botaoAvancar = buttons.find((b) =>
        /próxima|finalizar/i.test(b.textContent || '')
      );
      if (botaoAvancar) {
        await userEvent.click(botaoAvancar);
      }
    }

    const conclusao = screen.queryByText('Avaliação concluída');
    expect(conclusao).toBeTruthy();
  });

  it('deve exibir resultado final com 3 ferramentas', async () => {
    renderWithRouter(<Autoavaliacao />);

    const botaoComeco = screen.getByRole('button', { name: /começar/i });
    await userEvent.click(botaoComeco);

    for (let i = 0; i < 9; i++) {
      const radios = screen.getAllByRole('radio');
      await userEvent.click(radios[0]);

      const buttons = screen.getAllByRole('button');
      const botaoAvancar = buttons.find((b) =>
        /próxima|finalizar/i.test(b.textContent || '')
      );
      if (botaoAvancar) {
        await userEvent.click(botaoAvancar);
      }
    }

    expect(screen.queryAllByText('Presença Digital').length).toBeGreaterThan(0);
    expect(screen.queryAllByText('Comércio Eletrônico').length).toBeGreaterThan(0);
    expect(
      screen.queryAllByText('Gestão Empresarial (ERP)').length
    ).toBeGreaterThan(0);
  });

  it('deve calcular pontuação e classificação conforme as respostas', async () => {
    renderWithRouter(<Autoavaliacao />);

    await userEvent.click(screen.getByRole('button', { name: /começar/i }));

    const respostas = [3, 3, 3, 0, 0, 0, 2, 2, 2];
    for (const resposta of respostas) {
      await userEvent.click(screen.getAllByRole('radio')[resposta]);
      const botaoAvancar = screen.getByRole('button', {
        name: /próxima|finalizar/i,
      });
      await userEvent.click(botaoAvancar);
    }

    expect(
      screen
        .getByRole('progressbar', { name: 'Pontuação de Presença Digital' })
        .getAttribute('aria-valuenow')
    ).toBe('9');
    expect(
      screen
        .getByRole('progressbar', { name: 'Pontuação de Comércio Eletrônico' })
        .getAttribute('aria-valuenow')
    ).toBe('0');
    expect(
      screen
        .getByRole('progressbar', {
          name: 'Pontuação de Gestão Empresarial (ERP)',
        })
        .getAttribute('aria-valuenow')
    ).toBe('6');

    expect(screen.getByText('Uso frequente')).toBeTruthy();
    expect(screen.getByText('Uso inicial')).toBeTruthy();
    expect(screen.getByText('Uso moderado')).toBeTruthy();
  });
});
