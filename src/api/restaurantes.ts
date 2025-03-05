export interface Restaurantes {
    id: number
    titulo: string
    destacado: boolean
    tipo: string
    avaliacao: number
    descricao: string
    capa: string
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