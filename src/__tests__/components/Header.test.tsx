import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router';
import Header from '../../components/Header';

describe('Header', () => {
  it('deve exibir a marca e o menu principal', () => {
    render(
      <BrowserRouter>
        <Header />
      </BrowserRouter>
    );

    expect(screen.getByText('Guia Digital MPE')).toBeTruthy();
    expect(
      screen.getByRole('navigation', { name: 'Menu principal' })
    ).toBeTruthy();
  });
});
