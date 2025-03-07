import { useParams } from "react-router-dom";
import { useGetRestaurantesQuery } from "../../services";
import { Categoria, Container, NomeLoja } from "./styles";

const Banner = () => {
    const { id } = useParams<{ id: string }>(); 
    const { data: restaurantes, isLoading } = useGetRestaurantesQuery();

    if (isLoading) {
        return <p>Carregando...</p>;
    }

    if (!restaurantes || restaurantes.length === 0) {
        return <p>Nenhum restaurante encontrado.</p>;
    }

    if (!id) {
        return <p>ID do restaurante não encontrado.</p>;
    }

    const restaurante = restaurantes.find((r) => r.id === parseInt(id));

    if (!restaurante) {
        return <p>Restaurante não encontrado.</p>;
    }

    return (
        <Container backgroundUrl={restaurante.capa}>
            <Categoria>{restaurante.tipo}</Categoria>
            <NomeLoja>{restaurante?.titulo}</NomeLoja>
        </Container>
    );
};

export default Banner;
