export interface PlantacaoForm {
  id?: Number | String;
  cultura: string;
  descricao: string;
  tamanho: number | string;
  umidadeIdeal: number | string;
  temperaturaIdeal: number | string;
  idPropriedade: number | string | any;
}