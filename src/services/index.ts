import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

type Product = {
    id: number
    price: number
}

type PurchaseResponse = {
    orderId: string
}


type PurchasePayload = {
    products: Product[]
    delivery: {
        receiver: string
        address: {
            description: string
            city: string
            zipCode: string
            number: number
            complement?: string
        }
    },
    payment: {
        card: {
            name: string
            number: string
            code: number
            expires: {
                month:  number
                year: number
            }
        }
    }
}


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
        }),
        purchase: builder.mutation<PurchaseResponse,PurchasePayload>({
            query: (body) => ({
                url: "checkout", 
                method: "POST",
                body
            })
        })
    })
})

export const {useGetRestaurantesQuery, useGetRestaurantePorIdQuery, usePurchaseMutation} = restauranteApi