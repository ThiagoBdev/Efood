import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

export interface Cardapio {
    foto: string
    preco: number
    id: number
    nome: string
    descricao: string
    porcao: string
}

export interface Restaurantes {
    foto: string 
    id: number
    titulo: string
    destacado: boolean
    tipo: string
    avaliacao: number
    descricao: string
    capa: string
    cardapio: Cardapio[]
}

export const restauranteApi = createApi({
    reducerPath: "restauranteApi",
    baseQuery: fetchBaseQuery({
        baseUrl: "https://fake-api-tau.vercel.app/api/efood"
    }),
    endpoints: (builder) => ({
        getRestaurantes : builder.query<Restaurantes[], void>({
            query: () => "restaurantes",
        }),
        getRestaurantePorId: builder.query<Restaurantes, string>({
            query: (id) => `restaurantes/${id}`
        })
    })
})

export const {useGetRestaurantesQuery, useGetRestaurantePorIdQuery} = restauranteApi