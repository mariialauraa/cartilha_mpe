import { describe, it, expect } from 'vitest';
import { obterClassificacao } from '../../utils/classificacao';

describe('obterClassificacao', () => {
  describe('Uso inicial (pontos <= 3)', () => {
    it('U1.1: deve retornar "Uso inicial" com 0 pontos', () => {
      const resultado = obterClassificacao(0);
      expect(resultado.texto).toBe('Uso inicial');
      expect(resultado.classe).toBe('atencao');
      expect(resultado.descricao).toBe(
        'Sua empresa ainda utiliza pouco essa ferramenta digital.'
      );
    });

    it('U1.2: deve retornar "Uso inicial" com 3 pontos (limite inferior)', () => {
      const resultado = obterClassificacao(3);
      expect(resultado.texto).toBe('Uso inicial');
      expect(resultado.classe).toBe('atencao');
      expect(resultado.descricao).toBe(
        'Sua empresa ainda utiliza pouco essa ferramenta digital.'
      );
    });

    it('U1.2a: deve retornar "Uso inicial" com qualquer valor entre 0-3', () => {
      [0, 1, 2, 3].forEach((pontos) => {
        const resultado = obterClassificacao(pontos);
        expect(resultado.classe).toBe('atencao');
      });
    });
  });

  describe('Uso moderado (4 <= pontos <= 6)', () => {
    it('U1.3: deve retornar "Uso moderado" com 4 pontos', () => {
      const resultado = obterClassificacao(4);
      expect(resultado.texto).toBe('Uso moderado');
      expect(resultado.classe).toBe('melhoria');
      expect(resultado.descricao).toBe(
        'Sua empresa utiliza essa ferramenta, mas ainda pode ampliar seu uso.'
      );
    });

    it('U1.4: deve retornar "Uso moderado" com 6 pontos (limite superior)', () => {
      const resultado = obterClassificacao(6);
      expect(resultado.texto).toBe('Uso moderado');
      expect(resultado.classe).toBe('melhoria');
      expect(resultado.descricao).toBe(
        'Sua empresa utiliza essa ferramenta, mas ainda pode ampliar seu uso.'
      );
    });

    it('U1.3a: deve retornar "Uso moderado" para qualquer valor entre 4-6', () => {
      [4, 5, 6].forEach((pontos) => {
        const resultado = obterClassificacao(pontos);
        expect(resultado.classe).toBe('melhoria');
      });
    });
  });

  describe('Uso frequente (pontos > 6)', () => {
    it('U1.5: deve retornar "Uso frequente" com 7 pontos', () => {
      const resultado = obterClassificacao(7);
      expect(resultado.texto).toBe('Uso frequente');
      expect(resultado.classe).toBe('frequente');
      expect(resultado.descricao).toBe(
        'Sua empresa já utiliza essa ferramenta com frequência.'
      );
    });

    it('U1.6: deve retornar "Uso frequente" com 9 pontos (máximo)', () => {
      const resultado = obterClassificacao(9);
      expect(resultado.texto).toBe('Uso frequente');
      expect(resultado.classe).toBe('frequente');
      expect(resultado.descricao).toBe(
        'Sua empresa já utiliza essa ferramenta com frequência.'
      );
    });

    it('U1.5a: deve retornar "Uso frequente" para qualquer valor > 6', () => {
      [7, 8, 9].forEach((pontos) => {
        const resultado = obterClassificacao(pontos);
        expect(resultado.classe).toBe('frequente');
      });
    });
  });

  describe('Propriedades retornadas', () => {
    it('deve sempre retornar um objeto com texto, classe e descricao', () => {
      const resultado = obterClassificacao(5);
      expect(resultado).toHaveProperty('texto');
      expect(resultado).toHaveProperty('classe');
      expect(resultado).toHaveProperty('descricao');
      expect(typeof resultado.texto).toBe('string');
      expect(typeof resultado.classe).toBe('string');
      expect(typeof resultado.descricao).toBe('string');
    });

    it('deve ter descrições não vazias', () => {
      [0, 3, 5, 9].forEach((pontos) => {
        const resultado = obterClassificacao(pontos);
        expect(resultado.descricao.length).toBeGreaterThan(0);
      });
    });
  });
});
