import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import Footer from '../../components/Footer';

describe('Footer', () => {
  it('deve exibir o nome do guia e a descrição da cartilha', () => {
    render(<Footer />);

    expect(screen.getByText('Guia Digital MPE')).toBeTruthy();
    expect(
      screen.getByText(
        'Cartilha digital sobre transformação digital para micro e pequenas empresas.'
      )
    ).toBeTruthy();
  });
});
