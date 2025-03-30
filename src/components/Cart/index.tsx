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
    const [stepv, setStepv] = useState(1);

    const [purchase, { data }] = usePurchaseMutation();

    const validationSchemas = {
        delivery: Yup.object({
            nameReceiver: Yup.string().min(4, "O Nome precisa ter pelo menos 4 caracteres").required("O campo é obrigatório"),
            addressReceiver: Yup.string().min(4, "O endereço precisa ter no mínimo 4 caracteres").required("O campo é obrigatório"),
            cityReceiver: Yup.string().min(3, "O Nome da cidade deve ter pelo menos 3 caracteres").required("O campo é obrigatório"),
            cep: Yup.string().matches(/^\d{5}-\d{3}$/, "Formato de CEP inválido").required("O campo é obrigatório"),
            houseNumber: Yup.number().typeError("O número da casa deve ser um número válido").required("O número da casa é obrigatório"),
            complement: Yup.string(),
        }),
        payment: Yup.object({
            nameCard: Yup.string().min(4, "O Nome precisa ter pelo menos 4 caracteres").required("O campo é obrigatório"),
            numberCard: Yup.string().matches(/^[0-9]{13,19}$/, "O número do cartão precisa ter entre 13 e 19 dígitos").required("O campo é obrigatório"),
            cvv: Yup.string().matches(/^[0-9]{3,4}$/, "O CVV deve ter 3 ou 4 dígitos").required("O campo é obrigatório"),
            expireMonth: Yup.number().min(1, "O mês deve ser entre 01 e 12").max(12, "O mês deve ser entre 01 e 12").required("O campo é obrigatório"),
            expireYear: Yup.number().min(new Date().getFullYear(), "O ano não pode ser menor que o ano atual").required("O campo é obrigatório"),
        })
    };


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
        validationSchema: validationSchemas[step as keyof typeof validationSchemas] || Yup.object({}),
        onSubmit: (values) => {

            purchase({
                delivery: {
                    receiver: values.nameReceiver,
                    address: {
                        description: values.addressReceiver,
                        city: values.cityReceiver,
                        zipCode: values.cep,
                        number: Number(values.houseNumber),
                        complement: values.complement || ""
                    }
                },
                payment: {
                    card: {
                        name: values.nameCard,
                        number: values.numberCard,
                        code: Number(values.cvv),
                        expires: {
                            month: Number(values.expireMonth),
                            year: Number(values.expireYear)
                        }
                    }
                },
                products: items.map((item) => ({
                    id: item.id,
                    price: item.preco
                }))
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

    const checkInputHasError = (fieldName: string) => {
        const isTouched = fieldName in form.touched
        const isInvalid = fieldName in form.errors
        const hasError = isTouched && isInvalid

        return hasError
    }

    const handleNextStep = async () => {
        const validationSchema = validationSchemas[step as keyof typeof validationSchemas];

        if (validationSchema) {
            try {
                await validationSchema.validate(form.values, { abortEarly: false });
                setStep(stepsFlow[step as keyof typeof validationSchemas].next);
            } catch (error) {
                alert("Preencha todos os campos corretamente.");
            }
        } else {
            setStep(stepsFlow[step as keyof typeof validationSchemas].next);
        }
    };

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
                                                    <S.IconeRemover onClick={() => removeItem(item.id)} type="button" />
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
                            <S.Botao onClick={() => {
                                if (items.length === 0) {
                                    alert("O carrinho está vazio. Adicione itens antes de continuar.");
                                    return;
                                }
                                setStep(stepsFlow.cart.next);
                            }}>Continuar com a entrega</S.Botao>
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
                                    <input type="text" id="nameReceiver" name="nameReceiver" value={form.values.nameReceiver} onChange={form.handleChange} onBlur={form.handleBlur} className={checkInputHasError("nameReceiver") ? "error" : ""} />
                                </S.InputGroup>
                                <S.InputGroup>
                                    <label htmlFor="addressReceiver">Endereço</label>
                                    <input type="text" id="addressReceiver" name="addressReceiver" value={form.values.addressReceiver} onChange={form.handleChange} onBlur={form.handleBlur} className={checkInputHasError("addressReceiver") ? "error" : ""} />

                                </S.InputGroup>
                                <S.InputGroup>
                                    <label htmlFor="cityReceiver" >Cidade</label>
                                    <input  id="cityReceiver" type="text" name="cityReceiver" value={form.values.cityReceiver} onChange={form.handleChange} onBlur={form.handleBlur} className={checkInputHasError("cityReceiver") ? "error" : ""} />

                                </S.InputGroup>
                                <S.Row>
                                    <S.InputGroup>
                                        <label htmlFor="cep">CEP</label>
                                        <input placeholder="00000-000" id="cep" type="text" name="cep" value={form.values.cep} onChange={form.handleChange} onBlur={form.handleBlur} className={checkInputHasError("cep") ? "error" : ""} />

                                    </S.InputGroup>
                                    <S.InputGroup>
                                        <label htmlFor="houseNumber">Numero</label>
                                        <input placeholder="000" id="houseNumber" type="text" name="houseNumber" value={form.values.houseNumber} onChange={(e) => form.setFieldValue("houseNumber", Number(e.target.value))} onBlur={form.handleBlur} className={checkInputHasError("houseNumber") ? "error" : ""} />

                                    </S.InputGroup>
                                </S.Row>
                                <S.InputGroup>
                                    <label htmlFor="complement">Complemento (opcional)</label>
                                    <input id="complement" type="text" name="complement" value={form.values.complement} onChange={form.handleChange} onBlur={form.handleBlur} className={checkInputHasError("complement") ? "error" : ""} />

                                </S.InputGroup>
                                <S.Botao
                                    id="btn-next"
                                    onClick={async () => {

                                        if (form.isValid && form.dirty) {
                                            const validationSchema = validationSchemas[step as keyof typeof validationSchemas];


                                            if (validationSchema) {
                                                try {

                                                    await validationSchema.validate(form.values, { abortEarly: false });
                                                    setStep(stepsFlow[step].next);  
                                                } catch (error) {
                                                    alert("Preencha todos os campos corretamente.");
                                                }
                                            }
                                        } else {
                                            alert("Por favor, preencha todos os campos obrigatórios.");
                                        }

                                        form.submitForm();
                                    }}
                                    type="button"
                                >
                                    Continuar com o pagamento
                                </S.Botao>



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
                                    <input id="nameCard" type="text" name="nameCard" value={form.values.nameCard} onChange={form.handleChange} onBlur={form.handleBlur} className={checkInputHasError("nameCard") ? "error" : ""} />

                                </S.InputGroup>
                                <S.Row>
                                    <S.InputGroup>
                                        <label htmlFor="numberCard">Numero do cartão</label>
                                        <input placeholder="Minimo de 13 numeros" id="numberCard" type="text" name="numberCard" value={form.values.numberCard} onChange={form.handleChange} onBlur={form.handleBlur} className={checkInputHasError("numberCard") ? "error" : ""} />

                                    </S.InputGroup>
                                    <S.InputGroup id="cvv-payment">
                                        <label htmlFor="cvv">CVV</label>
                                        <input placeholder="000" id="cvv" type="text" name="cvv" value={form.values.cvv} onChange={form.handleChange} onBlur={form.handleBlur} className={checkInputHasError("cvv") ? "error" : ""} />

                                    </S.InputGroup>
                                </S.Row>
                                <S.Row>
                                    <S.InputGroup>
                                        <label htmlFor="expireMonth">Mes de vencimento</label>
                                        <input placeholder="00" id="expireMonth" type="text" name="expireMonth" value={form.values.expireMonth} onChange={form.handleChange} onBlur={form.handleBlur} className={checkInputHasError("expireMonth") ? "error" : ""} />

                                    </S.InputGroup>
                                    <S.InputGroup>
                                        <label htmlFor="expireYear">Ano de vencimento</label>
                                        <input placeholder="0000" id="expireYear" type="text" name="expireYear" value={form.values.expireYear} onChange={form.handleChange} onBlur={form.handleBlur} className={checkInputHasError("expireYear") ? "error" : ""} />

                                    </S.InputGroup>
                                </S.Row>
                                <S.Botao
                                    id="btn-next"
                                    onClick={async () => {

                                        const validationSchema = validationSchemas[step as keyof typeof validationSchemas];

                                        if (validationSchema) {
                                            try {

                                                await validationSchema.validate(form.values, { abortEarly: false });


                                                setStep(stepsFlow.payment.next);
                                                form.handleSubmit(); 
                                            } catch (error) {

                                                alert("Preencha todos os campos corretamente.");
                                            }
                                        } else {

                                            setStep(stepsFlow.payment.next);
                                            form.handleSubmit(); 
                                        }
                                    }}
                                    type="button"
                                >
                                    Finalizar o pagamento
                                </S.Botao>

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
                                <S.Titulo id="titulo-confirmacao">Pedido realizado - {data ? data.orderId : "Carregando..."}</S.Titulo>
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
