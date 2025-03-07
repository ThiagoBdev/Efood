import logo from "../../assets/images/fundoheader.svg"
import { Container, Imagem, CartButton, Paragrafo } from "./styles"
import {open} from "../../store/reducers/cart"
import { useDispatch, useSelector } from "react-redux"
import { RootReducer } from "../../store"



const HeaderPerfil = () => {

    const dispatch = useDispatch()
    const {items} = useSelector((state: RootReducer) => state.cart)

    const openCart = () => {
        dispatch(open())
    }

    return (
        <Container>
            <Paragrafo>Restaurantes</Paragrafo>
            <Imagem src={logo} alt="" />
            <CartButton onClick={openCart}> {items.length} produto(s) no carrinho</CartButton>
        </Container>
    )
}



export default HeaderPerfil