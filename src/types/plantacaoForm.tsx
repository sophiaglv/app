export interface PlantacaoForm {
  id?: Number | string;
  cultura: string;
  descricao: string;
  tamanho: number | string;
  umidadeIdeal: number | string;
  temperaturaIdeal: number | string;
  idPropriedade: number | string | any;
}