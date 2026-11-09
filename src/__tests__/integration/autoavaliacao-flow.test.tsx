import { beforeEach, describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { BrowserRouter } from 'react-router-dom';
import Autoavaliacao from '../../pages/Autoavaliacao';
import { baixarManualAutoavaliacao } from '../../utils/baixarManualAutoavaliacao';

vi.mock('../../utils/baixarManualAutoavaliacao', () => ({
  baixarManualAutoavaliacao: vi.fn().mockResolvedValue(undefined),
}));

const renderWithRouter = (component: React.ReactElement) => {
  return render(<BrowserRouter>{component}</BrowserRouter>);
};

describe('Autoavaliacao - Fluxo Básico', () => {
  beforeEach(() => {
    sessionStorage.clear();
    localStorage.clear();
    vi.mocked(baixarManualAutoavaliacao).mockReset();
    vi.mocked(baixarManualAutoavaliacao).mockResolvedValue(undefined);
  });

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
    expect(screen.getByText('Oportunidades de melhoria')).toBeTruthy();
    expect(
      screen.getByText(
        'Conheça as possibilidades de receber pedidos e realizar vendas pela internet. Avalie quais canais fazem sentido para o seu negócio.'
      )
    ).toBeTruthy();
    expect(
      screen.queryByText(
        'Avalie um canal simples para apresentar produtos e receber pedidos pela internet.'
      )
    ).toBeNull();
  });

  it('deve baixar o resultado com as dicas correspondentes a cada classificação', async () => {
    renderWithRouter(<Autoavaliacao />);
    await userEvent.click(screen.getByRole('button', { name: /começar/i }));

    for (let i = 0; i < 9; i++) {
      await userEvent.click(screen.getAllByRole('radio')[0]);
      await userEvent.click(
        screen.getByRole('button', { name: /próxima|finalizar/i }),
      );
    }

    await userEvent.click(
      screen.getByRole('button', { name: /baixar resultado completo/i }),
    );

    expect(baixarManualAutoavaliacao).toHaveBeenCalledWith(
      expect.arrayContaining([
        expect.objectContaining({
          nome: 'Presença Digital',
          pontos: 0,
          classificacao: expect.objectContaining({ classe: 'atencao' }),
          dicas: expect.arrayContaining([
            'Escolha um canal digital adequado ao seu negócio, como uma rede social ou um aplicativo de mensagens.',
          ]),
        }),
        expect.objectContaining({
          nome: 'Comércio Eletrônico',
          pontos: 0,
          classificacao: expect.objectContaining({ classe: 'atencao' }),
          dicas: expect.arrayContaining([
            'Avalie um canal simples para apresentar produtos e receber pedidos pela internet.',
          ]),
        }),
        expect.objectContaining({
          nome: 'Gestão Empresarial (ERP)',
          pontos: 0,
          classificacao: expect.objectContaining({ classe: 'atencao' }),
          dicas: expect.arrayContaining([
            'Identifique quais atividades precisam de mais organização, como finanças, vendas ou estoque.',
          ]),
        }),
      ]),
    );
  });

  it('deve informar quando não consegue gerar o manual', async () => {
    vi.mocked(baixarManualAutoavaliacao).mockRejectedValueOnce(
      new Error('Canvas indisponível'),
    );
    const erro = vi.spyOn(console, 'error').mockImplementation(() => {});
    renderWithRouter(<Autoavaliacao />);
    await userEvent.click(screen.getByRole('button', { name: /começar/i }));

    for (let i = 0; i < 9; i++) {
      await userEvent.click(screen.getAllByRole('radio')[0]);
      await userEvent.click(
        screen.getByRole('button', { name: /próxima|finalizar/i }),
      );
    }

    await userEvent.click(
      screen.getByRole('button', { name: /baixar resultado completo/i }),
    );

    expect((await screen.findByRole('alert')).textContent).toContain(
      'Não foi possível gerar o manual agora. Tente novamente.',
    );
    erro.mockRestore();
  });

  it('deve restaurar o resultado depois que a página for montada novamente', async () => {
    const { unmount } = renderWithRouter(<Autoavaliacao />);

    await userEvent.click(screen.getByRole('button', { name: /começar/i }));

    for (let i = 0; i < 9; i++) {
      await userEvent.click(screen.getAllByRole('radio')[3]);
      await userEvent.click(
        screen.getByRole('button', { name: /próxima|finalizar/i }),
      );
    }

    unmount();
    renderWithRouter(<Autoavaliacao />);

    expect(screen.getByText('Você já realizou uma avaliação!')).toBeTruthy();
    await userEvent.click(
      screen.getByRole('button', { name: /ver último resultado/i }),
    );

    expect(screen.getByText('Avaliação concluída')).toBeTruthy();
    expect(
      screen
        .getByRole('progressbar', { name: 'Pontuação de Presença Digital' })
        .getAttribute('aria-valuenow'),
    ).toBe('9');
  });

  it('deve iniciar uma nova avaliação sem apagar o resultado anterior', async () => {
    renderWithRouter(<Autoavaliacao />);

    await userEvent.click(screen.getByRole('button', { name: /começar/i }));

    for (let i = 0; i < 9; i++) {
      await userEvent.click(screen.getAllByRole('radio')[0]);
      await userEvent.click(
        screen.getByRole('button', { name: /próxima|finalizar/i }),
      );
    }

    await userEvent.click(
      screen.getByRole('button', { name: /refazer avaliação/i }),
    );

    expect(screen.getByText('Pergunta 1 de 9')).toBeTruthy();
    expect(localStorage.getItem('autoavaliacao-respostas')).not.toBeNull();
  });
});
