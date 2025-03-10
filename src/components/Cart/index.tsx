import * as S from "./styles"
import { RootReducer } from "../../store"
import { useDispatch, useSelector } from "react-redux"
import { close, remove } from "../../store/reducers/cart"
import { useGetRestaurantePorIdQuery, usePurchaseMutation } from "../../services"
import { useParams } from "react-router-dom"
import { useState } from "react"
import { useFormik } from "formik"
import * as Yup from "yup"

const Cart = () => {
    const { id } = useParams<{ id: string }>()
    const { data: restaurante, isLoading } = useGetRestaurantePorIdQuery(id!)
    const { isOpen, items } = useSelector((state: RootReducer) => state.cart)
    const dispatch = useDispatch()
    const [step, setStep] = useState("cart")
    const [purchase, {  data }] = usePurchaseMutation()

    const form = useFormik({
        initialValues: {
            nameReceiver: "",
            addressReceiver: "",
            cityReceiver: "",
            cep: "",
            houseNumber: "",
            complement: "",
            nameCard: "",
            numberCard: "",
            cvv: "",
            expireMonth: "",
            expireYear: "",
        },
        validationSchema: Yup.object({
            nameReceiver: Yup.string().min(4, "O Nome precisa ter pelo menos 4 caracteres").required("O campo é obrigatorio"),
            addressReceiver: Yup.string().min(4, "O endereço precisa ter no minimo 4 caracteres").required("O campo é obrigatorio"),
            cityReceiver: Yup.string().min(3, "O Nome da cidade deve ter pelo menos 3 caracteres").required("O campo é obrigatorio"),
            cep: Yup.string().min(8, "O cep precisa ter pelo menos 8 caracteres").required("O campo é obrigatorio"),
            houseNumber: Yup.string().required("O campo é obrigatorio"),
            complement: Yup.string(),
            nameCard: Yup.string().min(4, "O Nome precisa ter pelo menos 4 caracteres").required("O campo é obrigatorio"),
            numberCard: Yup.string().min(13, "O Numero do cartão precisa ter pelo menos 13 caracteres").required("O campo é obrigatorio"),
            cvv: Yup.string().min(3, "O Cvv precisa ter pelo menos 3 caracteres").required("O campo é obrigatorio"),
            expireMonth: Yup.string().min(2, "O Mês precisa ter pelo menos 2 caracteres").required("O campo é obrigatorio"),
            expireYear: Yup.string().min(4, "O Ano precisa ter pelo menos 4 caracteres").required("O campo é obrigatorio"),
        }),
        onSubmit: (values) => {
            purchase({
                delivery: {
                    receiver: values.nameReceiver,
                    address: {
                        description: values.addressReceiver,
                        city: values.cityReceiver,
                        zipCode: values.cep,
                        number: Number(values.houseNumber),
                        complement: values.complement
                    }
                },
                    payment: {
                        card: {
                            name: values.nameCard,
                            number: values.numberCard,
                            code: Number(values.cvv),
                            expires:{
                                month: Number(values.expireMonth),
                                year: Number(values.expireYear)
                            }
                        }
                    },
                    products: [{
                        id: 1,
                        price: 20
                    }]
            })

        }
    })

    const stepsFlow = {
        cart: { next: "delivery", prev: null },
        delivery: { next: "payment", prev: "cart" },
        payment: { next: "confirmation", prev: "delivery" },
        confirmation: { next: "cart", prev: null }
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

    const getErrorMessage = (fieldName: string, message?: string) => {
        const isTouched = fieldName in form.touched
        const isInvalid = fieldName in form.errors

        if (isTouched && isInvalid) return message
        return ""
    }

    return (
        <>
            <form onSubmit={form.handleSubmit}>
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

                                <S.Titulo id="titulo-entrega">Entrega</S.Titulo>
                                <S.InputGroup>
                                    <label htmlFor="nameReceiver">Quem irá receber</label>
                                    <input type="text" id="nameReceiver" name="nameReceiver" value={form.values.nameReceiver} onChange={form.handleChange} onBlur={form.handleBlur} />
                                    <small>{getErrorMessage("nameReceiver", form.errors.nameReceiver)}</small>
                                </S.InputGroup>
                                <S.InputGroup>
                                    <label htmlFor="addressReceiver">Endereço</label>
                                    <input type="text" id="addressReceiver" name="addressReceiver" value={form.values.addressReceiver} onChange={form.handleChange} onBlur={form.handleBlur} />
                                    <small>{getErrorMessage("addressReceiver", form.errors.addressReceiver)}</small>
                                </S.InputGroup>
                                <S.InputGroup>
                                    <label htmlFor="cityReceiver" >Cidade</label>
                                    <input id="cityReceiver" type="text" name="cityReceiver" value={form.values.cityReceiver} onChange={form.handleChange} onBlur={form.handleBlur} />
                                    <small>{getErrorMessage("cityReceiver", form.errors.cityReceiver)}</small>
                                </S.InputGroup>
                                <S.Row>
                                    <S.InputGroup>
                                        <label htmlFor="cep">CEP</label>
                                        <input id="cep" type="text" name="cep" value={form.values.cep} onChange={form.handleChange} onBlur={form.handleBlur} />
                                        <small>{getErrorMessage("cep", form.errors.cep)}</small>
                                    </S.InputGroup>
                                    <S.InputGroup>
                                        <label htmlFor="houseNumber">Numero</label>
                                        <input id="houseNumber" type="text" name="houseNumber" value={form.values.houseNumber} onChange={form.handleChange} onBlur={form.handleBlur} />
                                        <small>{getErrorMessage("houseNumber", form.errors.houseNumber)}</small>
                                    </S.InputGroup>
                                </S.Row>
                                <S.InputGroup>
                                    <label htmlFor="complement">Complemento (opcional)</label>
                                    <input id="complement" type="text" name="complement" value={form.values.complement} onChange={form.handleChange} onBlur={form.handleBlur} />
                                    <small>{getErrorMessage("complement", form.errors.complement)}</small>
                                </S.InputGroup>
                                <S.Botao id="btn-next" onClick={() => setStep(stepsFlow.delivery.next)} type="button">Continuar com o pagamento</S.Botao>

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

                                <S.InputGroup>
                                    <label htmlFor="nameCard">Nome no cartão</label>
                                    <input id="nameCard" type="text" name="nameCard" value={form.values.nameCard} onChange={form.handleChange} onBlur={form.handleBlur} />
                                    <small>{getErrorMessage("nameCard", form.errors.nameCard)}</small>
                                </S.InputGroup>
                                <S.Row>
                                    <S.InputGroup>
                                        <label htmlFor="numberCard">Numero do cartão</label>
                                        <input id="numberCard" type="text" name="numberCard" value={form.values.numberCard} onChange={form.handleChange} onBlur={form.handleBlur} />
                                        <small>{getErrorMessage("numberCard", form.errors.numberCard)}</small>
                                    </S.InputGroup>
                                    <S.InputGroup id="cvv-payment">
                                        <label htmlFor="cvv">CVV</label>
                                        <input id="cvv" type="text" name="cvv" value={form.values.cvv} onChange={form.handleChange} onBlur={form.handleBlur} />
                                        <small>{getErrorMessage("cvv", form.errors.cvv)}</small>
                                    </S.InputGroup>
                                </S.Row>
                                <S.Row>
                                    <S.InputGroup>
                                        <label htmlFor="expireMonth">Mes de vencimento</label>
                                        <input id="expireMonth" type="text" name="expireMonth" value={form.values.expireMonth} onChange={form.handleChange} onBlur={form.handleBlur} />
                                        <small>{getErrorMessage("expireMonth", form.errors.expireMonth)}</small>
                                    </S.InputGroup>
                                    <S.InputGroup>
                                        <label htmlFor="expireYear">Ano de vencimento</label>
                                        <input id="expireYear" type="text" name="expireYear" value={form.values.expireYear} onChange={form.handleChange} onBlur={form.handleBlur} />
                                        <small>{getErrorMessage("expireYear", form.errors.expireYear)}</small>
                                    </S.InputGroup>
                                </S.Row>
                                <S.Botao id="btn-next" onClick={() =>{ setStep(stepsFlow.payment.next); form.handleSubmit()}} type="button">Finalizar o pagamento</S.Botao>

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
                                <S.Titulo id="titulo-confirmacao">Pedido realizado - {data?.orderId}</S.Titulo>
                                <S.miniWrapper>
                                    <S.Paragrafo className="space">Estamos felizes em informar que seu pedido já está em processo de preparação e, em breve, será entregue no endereço fornecido.</S.Paragrafo>
                                    <S.Paragrafo className="space">Gostaríamos de ressaltar que nossos entregadores não estão autorizados a realizar cobranças extras. </S.Paragrafo>
                                    <S.Paragrafo className="space">Lembre-se da importância de higienizar as mãos após o recebimento do pedido, garantindo assim sua segurança e bem-estar durante a refeição.</S.Paragrafo>
                                    <S.Paragrafo className="space">Esperamos que desfrute de uma deliciosa e agradável experiência gastronômica. Bom apetite!</S.Paragrafo>
                                    <S.Botao type="button" onClick={() => {
                                        setStep(stepsFlow.confirmation.next);
                                        CloseCart();
                                    }}>
                                        Concluir
                                    </S.Botao>
                                </S.miniWrapper>
                            </S.Wrapper>
                        </S.Sidebar>
                    </S.CartContainer>
                )}
            </form>
        </>

    );
}


export default Cart
