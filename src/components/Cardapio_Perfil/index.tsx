import { Card, Container, Paragrafo, Subcontainer, Titulo, Botao, Imagem } from "./styles"
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { buscarRestaurantes, Restaurantes } from "../../api/restaurantes";

const ListagemCardapio = () => {

    const { id } = useParams<{id: string}>();
    const [restaurante, setRestaurante] = useState<Restaurantes | null>(null)

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
        <Container>
            {restaurante.cardapio && restaurante.cardapio.length > 0 ? (
                restaurante.cardapio.map((item) => (
                    <Subcontainer key={item.id}>
                        <Card>
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
    );
}
export default ListagemCardapio