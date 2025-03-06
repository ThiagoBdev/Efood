import * as S  from "./styles"
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { buscarRestaurantes, Restaurantes } from "../../api/restaurantes";
import fechar from "../../assets/images/fechar.png"

const ListagemCardapio = () => {

    const { id } = useParams<{id: string}>();
    const [restaurante, setRestaurante] = useState<Restaurantes | null>(null)
    const [modalEstaAberta, setModalEstaAberta] = useState(false)
    const [itemselecionado, setItemselecionado] = useState<any>(null);
    useEffect(() => {
        if (id) {
        const carregarRestaurante = async () => {
            const restaurantes = await buscarRestaurantes(); 
            const restauranteEncontrado = restaurantes.find(
            (rest) => rest.id.toString() === id 
            );
            setRestaurante(restauranteEncontrado || null); 
        };
            carregarRestaurante(); 
        }
    }, [id])

    if(!restaurante) {
        return <div>Carregando...</div>
    }

    const getdescricao = (descricao: string) => {
        if (descricao.length > 95) {
            return descricao.slice(0, 129) + "..."
        }
        return descricao
    }

    return (
        <>
        
        <S.Container>
            {restaurante.cardapio && restaurante.cardapio.length > 0 ? (
                restaurante.cardapio.map((item) => (
                    <S.Subcontainer key={item.id}>
                        <S.Card onClick={() => {setItemselecionado(item); setModalEstaAberta(true)}}>
                            <S.Imagem src={item.foto} alt={item.nome} />
                            <S.Titulo>{item.nome}</S.Titulo>
                            <S.Paragrafo>{getdescricao(item.descricao)}</S.Paragrafo>
                            <S.Botao>Adicionar ao carrinho</S.Botao>
                        </S.Card>
                    </S.Subcontainer>
                ))
            ) : (
                <p>Esse restaurante ainda não tem cardápio disponível</p>
            )}
        </S.Container>
        <S.Modal className={modalEstaAberta ? "visivel" : ""}>
            <S.ContainerModal>
                <S.Imagemfechar src={fechar} alt="fechar" onClick={() => setModalEstaAberta(false)}/>
                <S.SubModal>
                    {itemselecionado&& (
                        <>
                            <S.ImagemComida src={itemselecionado.foto} alt="Imagemcomida" />
                            <S.Conteudo>
                                <S.TituloModal>{itemselecionado.nome}</S.TituloModal>
                                <S.DescricaoModal>{itemselecionado.descricao}</S.DescricaoModal>
                                <S.DescricaoModal>Serve: de {itemselecionado.porcao}</S.DescricaoModal>
                                <S.BotaoModal>Adicionar ao carrinho - R${itemselecionado.preco}</S.BotaoModal>
                            </S.Conteudo>
                        </>
                    )}
                </S.SubModal>
            </S.ContainerModal>
            <div className="overlay" ></div>
        </S.Modal>
        </>
    );
}
export default ListagemCardapio