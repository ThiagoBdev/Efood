
export interface Cardapio {
  foto: string
  preco: number
  id: number
  nome: string
  descricao: string
  porcao: string
}

export interface Restaurantes {
    id: number
    titulo: string
    destacado: boolean
    tipo: string
    avaliacao: number
    descricao: string
    capa: string
    cardapio: Cardapio[]
}

export const buscarRestaurantes = async (): Promise<Restaurantes[]> => {
    try {
      const resposta = await fetch("https://fake-api-tau.vercel.app/api/efood/restaurantes");
      if (!resposta.ok) {
        throw new Error("Erro ao buscar os dados");
      }
      return await resposta.json();
    } catch (erro) {
      console.error(erro);
      return [];
    }
};