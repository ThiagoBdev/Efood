import { createSlice, PayloadAction } from "@reduxjs/toolkit"

type Item = {
    id: number
    nome: string
    preco: number
    foto: string
    descricao: string
    porcao: string
}

type CartState = {
    items: Item[] // Agora o carrinho aceita vários itens
    isOpen: boolean
}

const initialState: CartState = {
    items: [],
    isOpen: false
}

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        add: (state, action: PayloadAction<Item>) => {
            const itemExiste = state.items.find((item) => item.id === action.payload.id)

            if (!itemExiste) {
                state.items.push(action.payload) // Agora ele adiciona ao invés de substituir
            }
        },
        remove: (state, action: PayloadAction<number>) => {
            state.items = state.items.filter((item) => item.id !== action.payload)
        },
        open: (state) => {
            state.isOpen = true
        },
        close: (state) => {
            state.isOpen = false
        }
    }
})

export const { add, close, open, remove } = cartSlice.actions
export default cartSlice.reducer
