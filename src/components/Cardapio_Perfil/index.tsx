import { Card, Container, Paragrafo, Subcontainer, Titulo, Botao, Imagem, Modal, ContainerModal, SubModal, Imagemfechar, ImagemComida, Conteudo, TituloModal, DescricaoModal, BotaoModal } from "./styles"
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
        
        <Container>
            {restaurante.cardapio && restaurante.cardapio.length > 0 ? (
                restaurante.cardapio.map((item) => (
                    <Subcontainer key={item.id}>
                        <Card onClick={() => {setItemselecionado(item); setModalEstaAberta(true)}}>
                            <Imagem src={item.foto} alt={item.nome} />
                            <Titulo>{item.nome}</Titulo>
                            <Paragrafo>{getdescricao(item.descricao)}</Paragrafo>
                            <Botao>Adicionar ao carrinho</Botao>
                        </Card>
                    </Subcontainer>
                ))
            ) : (
                <p>Esse restaurante ainda não tem cardápio disponível</p>
            )}
        </Container>
        <Modal className={modalEstaAberta ? "visivel" : ""}>
            <ContainerModal>
                <Imagemfechar src={fechar} alt="fechar" onClick={() => setModalEstaAberta(false)}/>
                <SubModal>
                    {itemselecionado&& (
                        <>
                            <ImagemComida src={itemselecionado.foto} alt="Imagemcomida" />
                            <Conteudo>
                                <TituloModal>{itemselecionado.nome}</TituloModal>
                                <DescricaoModal>{itemselecionado.descricao}</DescricaoModal>
                                <DescricaoModal>Serve: de {itemselecionado.porcao}</DescricaoModal>
                                <BotaoModal>Adicionar ao carrinho - R${itemselecionado.preco}</BotaoModal>
                            </Conteudo>
                        </>
                    )}
                </SubModal>
            </ContainerModal>
            <div className="overlay" ></div>
        </Modal>
        </>
    );
}
export default ListagemCardapio