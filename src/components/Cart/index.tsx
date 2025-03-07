import * as S from "./styles"
import { RootReducer } from "../../store"
import { useDispatch, useSelector } from "react-redux"
import { close } from "../../store/reducers/cart"
import { useGetRestaurantePorIdQuery } from "../../services"
import { useParams } from "react-router-dom"

const Cart = () => {
    const { id } = useParams<{ id: string }>()
    const { data: restaurante, isLoading } = useGetRestaurantePorIdQuery(id!)
    const { isOpen, items } = useSelector((state: RootReducer) => state.cart)
    const dispatch = useDispatch()

    const CloseCart = () => {
        dispatch(close())
    }

    if (isLoading) {
        return <p>Carregando...</p>
    }

    if (!restaurante) {
        return <div>Restaurante não encontrado</div>
    }

    return (
        <S.CartContainer className={isOpen ? "is-open" : ""}>
            <S.Overlay onClick={CloseCart} />
            <S.Sidebar>
                <S.ContainerList>
                    {items.length > 0 ? (
                        items.map((item) => (
                            <S.ContainerItem key={item.id}>
                                <S.SubContainer>
                                    <S.ImagemComida src={item.foto} />
                                    <S.infos>
                                        <S.Titulo>{item.nome}</S.Titulo>
                                        <S.Preco>R${item.preco.toFixed(2)}</S.Preco>
                                        <S.IconeRemover type="submit" />
                                    </S.infos>
                                </S.SubContainer>
                            </S.ContainerItem>
                        ))
                    ) : (
                        <p>Nenhum item no carrinho</p>
                    )}
                </S.ContainerList>
                <S.ContainerValor>
                    <S.Paragrafo>Valor total</S.Paragrafo>
                    <S.ValorTotal>
                        R${items.reduce((total, item) => total + item.preco, 0).toFixed(2)}
                    </S.ValorTotal>
                </S.ContainerValor>
                <S.Botao>Continuar com a entrega</S.Botao>
            </S.Sidebar>
        </S.CartContainer>
    )
}

export default Cart
