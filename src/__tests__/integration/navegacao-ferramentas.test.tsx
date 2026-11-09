import '@testing-library/jest-dom/vitest';
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Link, MemoryRouter } from 'react-router-dom';
import App from '../../App';
import FerramentasDigitais from '../../pages/FerramentasDigitais';

const scrollIntoViewOriginal = Object.getOwnPropertyDescriptor(
  Element.prototype,
  'scrollIntoView',
);
const scrollIntoView = vi.fn();

beforeEach(() => {
  scrollIntoView.mockReset();
  Object.defineProperty(Element.prototype, 'scrollIntoView', {
    configurable: true,
    value: scrollIntoView,
  });
  vi.stubGlobal('scrollTo', vi.fn());
});

afterEach(() => {
  vi.unstubAllGlobals();
  if (scrollIntoViewOriginal) {
    Object.defineProperty(
      Element.prototype,
      'scrollIntoView',
      scrollIntoViewOriginal,
    );
  } else {
    Reflect.deleteProperty(Element.prototype, 'scrollIntoView');
  }
});

async function concluirAvaliacao(resposta: string) {
  const user = userEvent.setup();
  await user.click(screen.getByRole('button', { name: /começar avaliação/i }));
  for (let i = 0; i < 9; i++) {
    await user.click(screen.getByRole('radio', { name: resposta }));
    await user.click(
      screen.getByRole('button', { name: /próxima|finalizar/i }),
    );
  }
  return user;
}

function conferirDestino(id: string) {
  const destino = document.getElementById(id);
  expect(destino).toHaveAttribute('open');
  expect(document.querySelectorAll('details[open]')).toHaveLength(1);
  expect(scrollIntoView).toHaveBeenLastCalledWith({
    behavior: 'instant',
    block: 'start',
  });
  expect(scrollIntoView.mock.contexts.at(-1)).toBe(destino);
  expect(destino?.querySelector('summary')).toHaveFocus();
}

const destinos = [
  ['Explorar presença digital', 'presenca-digital'],
  ['Explorar comércio eletrônico', 'comercio-eletronico'],
  ['Explorar gestão empresarial', 'erp'],
];

describe('Navegação das recomendações', () => {
  it.each(destinos)('deve navegar por "%s" e abrir a seção %s', async (texto, id) => {
    render(
      <MemoryRouter initialEntries={['/autoavaliacao']}>
        <App />
      </MemoryRouter>,
    );
    const user = await concluirAvaliacao('Não');
    const link = screen.getByRole('link', { name: texto });
    expect(link).toHaveAttribute('href', `/ferramentas-digitais#${id}`);

    vi.mocked(window.scrollTo).mockClear();
    await user.click(link);

    conferirDestino(id);
    expect(window.scrollTo).not.toHaveBeenCalled();

    await user.click(screen.getByRole('link', { name: 'Início' }));
    expect(window.scrollTo).toHaveBeenLastCalledWith({
      top: 0,
      left: 0,
      behavior: 'instant',
    });
  });

  it.each(destinos)('deve abrir a seção ao acessar diretamente o link de "%s"', (_, id) => {
    render(
      <MemoryRouter initialEntries={[`/ferramentas-digitais#${id}`]}>
        <App />
      </MemoryRouter>,
    );
    conferirDestino(id);
  });

  it('deve manter a navegação geral quando não há oportunidades de melhoria', async () => {
    render(
      <MemoryRouter initialEntries={['/autoavaliacao']}>
        <App />
      </MemoryRouter>,
    );
    const user = await concluirAvaliacao('Sempre');
    expect(screen.queryByRole('link', { name: /explorar/i })).not.toBeInTheDocument();

    const link = screen.getByRole('link', { name: 'Ver todas as ferramentas' });
    expect(link).toHaveAttribute('href', '/ferramentas-digitais');
    await user.click(link);

    expect(document.getElementById('presenca-digital')).toHaveAttribute('open');
    expect(document.querySelectorAll('details[open]')).toHaveLength(1);
    expect(scrollIntoView).not.toHaveBeenCalled();
    expect(window.scrollTo).toHaveBeenLastCalledWith({
      top: 0,
      left: 0,
      behavior: 'instant',
    });
  });

  it('deve trocar a seção pelo hash e reabrir um destino fechado manualmente', async () => {
    const user = userEvent.setup();
    render(
      <MemoryRouter initialEntries={['/ferramentas-digitais#erp']}>
        <Link to="/ferramentas-digitais#comercio-eletronico">Ir para comércio</Link>
        <Link to="/ferramentas-digitais#erp">Ir para ERP</Link>
        <FerramentasDigitais />
      </MemoryRouter>,
    );
    conferirDestino('erp');
    await user.click(screen.getByRole('link', { name: 'Ir para comércio' }));
    conferirDestino('comercio-eletronico');
    await user.click(screen.getByRole('link', { name: 'Ir para ERP' }));
    conferirDestino('erp');

    const summary = document.getElementById('erp')?.querySelector('summary');
    expect(summary).not.toBeNull();
    await user.click(summary!);
    expect(document.getElementById('erp')).not.toHaveAttribute('open');
    await user.click(screen.getByRole('link', { name: 'Ir para ERP' }));
    conferirDestino('erp');
  });
});
