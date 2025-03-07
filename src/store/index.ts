import { configureStore } from "@reduxjs/toolkit"
import cartReducer from './reducers/cart'
import { restauranteApi } from "../services"

export const store = configureStore({
    reducer: {
        cart: cartReducer,
        [restauranteApi.reducerPath]: restauranteApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(restauranteApi.middleware),
})

export type RootReducer = ReturnType<typeof store.getState>


