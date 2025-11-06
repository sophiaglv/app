export interface Plantacao {
  id: number;
  cultura: string;
  propriedade: {
    id: number;
    nomePropriedade?: string;
  };
  descricao: string;
  tamanho: number;
  umidadeIdeal: number;
  temperaturaIdeal: number;
}