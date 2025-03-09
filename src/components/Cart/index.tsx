import * as S from "./styles"
import { RootReducer } from "../../store"
import { useDispatch, useSelector } from "react-redux"
import { close, remove } from "../../store/reducers/cart"
import { useGetRestaurantePorIdQuery } from "../../services"
import { useParams } from "react-router-dom"
import { useState } from "react"

const Cart = () => {
    const { id } = useParams<{ id: string }>()
    const { data: restaurante, isLoading } = useGetRestaurantePorIdQuery(id!)
    const { isOpen, items } = useSelector((state: RootReducer) => state.cart)
    const dispatch = useDispatch()
    const [step, setStep] = useState("cart")

    const stepsFlow = {
        cart: { next: "delivery", prev: null },
        delivery: { next: "payment", prev: "cart" },
        payment: { next: "confirmation", prev: "delivery" },
        confirmation: { next:"cart", prev: null }
    }

    

    const CloseCart = () => {
        dispatch(close())
    }

    if (isLoading) {
        return <p>Carregando...</p>
    }

    if (!restaurante) {
        return <div>Restaurante não encontrado</div>
    }

    const removeItem = (id: number) => {
        dispatch(remove(id))
    }

    return (
        <>
            {step === "cart" && (
                <S.CartContainer className={isOpen ? "is-open" : ""}>
                    <S.Overlay onClick={CloseCart} />
                    <S.Sidebar>
                        <S.ContainerList>
                            {items.length > 0 ? (
                                items.map((item) => (
                                    <S.ContainerItem key={item.id}>
                                        <S.SubContainer>
                                            <S.ImagemComida src={item.foto} alt={item.nome} />
                                            <S.infos>
                                                <S.Titulo>{item.nome}</S.Titulo>
                                                <S.Preco>R${item.preco.toFixed(2)}</S.Preco>
                                                <S.IconeRemover onClick={() => removeItem(item.id)} type="button" /> {/*✔ Corrigido type="submit" para type="button" no S.IconeRemover (para evitar envio de formulário acidental).*/}
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
                        <S.Botao onClick={() => setStep(stepsFlow.cart.next)}>Continuar com a entrega</S.Botao>
                    </S.Sidebar>
                </S.CartContainer>
            )}

            {step === "delivery" && (
                <S.CartContainer className={isOpen ? "is-open" : ""}>
                    <S.Overlay onClick={CloseCart} />
                        <S.Sidebar>
                            <S.Wrapper>
                                <S.Forms>
                                    <S.Titulo id="titulo-entrega">Entrega</S.Titulo>
                                        <S.InputGroup>
                                            <label>Quem irá receber</label>
                                            <input type="text" />
                                        </S.InputGroup>
                                        <S.InputGroup>
                                            <label>Endereço</label>
                                            <input type="text" />
                                        </S.InputGroup>
                                        <S.InputGroup>
                                            <label>Cidade</label>
                                            <input type="text" />
                                        </S.InputGroup>
                                        <S.Row>
                                            <S.InputGroup>
                                                <label>CEP</label>
                                                <input type="number" />
                                            </S.InputGroup>
                                            <S.InputGroup>
                                                <label>Numero</label>
                                                <input type="number" />
                                            </S.InputGroup>
                                        </S.Row>
                                        <S.InputGroup>
                                            <label>Complemento (opcional)</label>
                                            <input type="text" />
                                        </S.InputGroup>
                                        <S.Botao id="btn-next" onClick={() => setStep(stepsFlow.delivery.next)} type="submit">Continuar com o pagamento</S.Botao>
                                </S.Forms>
                                <S.Botao onClick={() => setStep(stepsFlow.delivery.prev)}>Voltar para o carrinho</S.Botao>
                            </S.Wrapper>
                        </S.Sidebar>
                </S.CartContainer>
            )}
            {step === "payment" && (
                <S.CartContainer className={isOpen ? "is-open" : ""}>
                    <S.Overlay onClick={CloseCart} />
                        <S.Sidebar>
                            <S.Wrapper>
                                <S.Paragrafo id="paragrafo-payment">
                                    Pagamento - Valor a pagar {" "}
                                    <S.ValorTotal>
                                        R$ {items.reduce((total, item) => total + item.preco, 0).toFixed(2)}
                                    </S.ValorTotal>
                                </S.Paragrafo>
                                <S.Forms>
                                    <S.InputGroup>
                                        <label>Nome no cartão</label>
                                        <input type="text" />
                                    </S.InputGroup>
                                    <S.Row>
                                        <S.InputGroup>
                                            <label>Numero do cartão</label>
                                            <input type="number" />
                                        </S.InputGroup>
                                        <S.InputGroup id="cvv-payment">
                                            <label>CVV</label>
                                            <input type="number" />
                                        </S.InputGroup>
                                    </S.Row>
                                    <S.Row>
                                        <S.InputGroup>
                                            <label>Mes de vencimento</label>
                                            <input type="number" />
                                        </S.InputGroup>
                                        <S.InputGroup>
                                            <label>Ano de vencimento</label>
                                            <input type="number" />
                                        </S.InputGroup>
                                    </S.Row>
                                    <S.Botao id="btn-next" onClick={() => setStep(stepsFlow.payment.next)} type="submit">Finalizar o pagamento</S.Botao>
                                </S.Forms>
                                <S.Botao onClick={() => setStep(stepsFlow.payment.prev)}>Voltar para a edição de Endereço</S.Botao>
                            </S.Wrapper>
                        </S.Sidebar>
                </S.CartContainer>
            )}

            {step === "confirmation" && (
                <S.CartContainer className={isOpen ? "is-open" : ""}>
                    <S.Overlay onClick={CloseCart} />
                        <S.Sidebar>
                            <S.Wrapper>
                                <S.Titulo id="titulo-confirmacao">Pedido realizado - {"2"}</S.Titulo>
                                    <S.miniWrapper>
                                        <S.Paragrafo className="space">Estamos felizes em informar que seu pedido já está em processo de preparação e, em breve, será entregue no endereço fornecido.</S.Paragrafo>
                                        <S.Paragrafo className="space">Gostaríamos de ressaltar que nossos entregadores não estão autorizados a realizar cobranças extras. </S.Paragrafo>
                                        <S.Paragrafo className="space">Lembre-se da importância de higienizar as mãos após o recebimento do pedido, garantindo assim sua segurança e bem-estar durante a refeição.</S.Paragrafo>
                                        <S.Paragrafo className="space">Esperamos que desfrute de uma deliciosa e agradável experiência gastronômica. Bom apetite!</S.Paragrafo>
                                        <S.Botao onClick={() => {setStep(stepsFlow.confirmation.next); CloseCart()}}>Concluir</S.Botao>
                                    </S.miniWrapper>
                            </S.Wrapper>
                        </S.Sidebar>
                </S.CartContainer>
            )}
        </>
        
    );
}


export default Cart
