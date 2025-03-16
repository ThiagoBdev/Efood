import * as S from "./styles"
import { useParams } from "react-router-dom"
import { useState } from "react"
import fechar from "../../assets/images/fechar.png"
import { useGetRestaurantePorIdQuery } from "../../services"
import { useDispatch } from "react-redux"
import { add, open } from "../../store/reducers/cart"

const ListagemCardapio = () => {
    const { id } = useParams<{ id: string }>()
    const { data: restaurante, isLoading } = useGetRestaurantePorIdQuery(id!)
    const [modalEstaAberta, setModalEstaAberta] = useState(false)
    const [itemSelecionado, setItemSelecionado] = useState<any>(null)
    const dispatch = useDispatch()

    const addToCart = () => {
        if (itemSelecionado) {
            dispatch(add(itemSelecionado))
            dispatch(open())
        }
    }

    if (isLoading) return <div>Carregando...</div>
    if (!restaurante) return <div>Restaurante não encontrado</div>

    return (
        <>
            <S.Container>
                {restaurante.cardapio.map((item) => (
                    <S.Subcontainer key={item.id}>
                        <S.Card onClick={() => { setItemSelecionado(item); setModalEstaAberta(true) }}>
                            <S.Imagem src={item.foto} alt={item.nome} />
                            <S.Titulo>{item.nome}</S.Titulo>
                            <S.Paragrafo>{item.descricao.slice(0, 129)}...</S.Paragrafo>
                            <S.Botao>Adicionar ao carrinho</S.Botao>
                        </S.Card>
                    </S.Subcontainer>
                ))}
            </S.Container>

            {modalEstaAberta && (
                <S.Modal className="visivel">
                    <S.ContainerModal>
                        <S.Imagemfechar src={fechar} alt="fechar" onClick={() => setModalEstaAberta(false)} />
                        <S.SubModal>
                            {itemSelecionado && (
                                <>
                                    <S.ImagemComida src={itemSelecionado.foto} alt="Imagem comida" />
                                    <S.Conteudo>
                                        <S.TituloModal>{itemSelecionado.nome}</S.TituloModal>
                                        <S.DescricaoModal>{itemSelecionado.descricao}</S.DescricaoModal>
                                        <S.DescricaoModal>Serve: {itemSelecionado.porcao}</S.DescricaoModal>
                                        <S.BotaoModal onClick={() => { setModalEstaAberta(false); addToCart(); }}>
                                            Adicionar ao carrinho - R${itemSelecionado.preco}
                                        </S.BotaoModal>

                                    </S.Conteudo>
                                </>
                            )}
                        </S.SubModal>
                    </S.ContainerModal>
                    <div className="overlay"></div>
                </S.Modal>
            )}
        </>
    )
}

export default ListagemCardapio
