export interface Produto {
  id: number
  nome: string
  descricao: string
  foto: string
  preco: number
  porcao: string
}

export interface Restaurante {
  id: number
  titulo: string
  destacado: boolean
  tipo: string
  avaliacao: number
  descricao: string
  capa: string
  cardapio: Produto[]
}
