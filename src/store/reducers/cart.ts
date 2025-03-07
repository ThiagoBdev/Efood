import { createSlice, PayloadAction} from "@reduxjs/toolkit"
import { Restaurantes } from "../../api/restaurantes"

type CartState = {
    items: Restaurantes[]
}

const initialState: CartState = {
    items: []
}

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        add: (state, action: PayloadAction<Restaurantes>) => {
            state.items.push(action.payload)
        }
    }
})

export const { add } = cartSlice.actions
export default cartSlice.reducer