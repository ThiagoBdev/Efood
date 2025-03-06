import { useRestaurante } from "../../Hooks"
import { Categoria, Container, NomeLoja } from "./styles"


const Banner = () => {
    const restaurante = useRestaurante()

    if (!restaurante) {
        return <p>Carregando...</p>;
    }

    return (
        <Container backgroundUrl={restaurante.capa}>
            <Categoria>{restaurante.tipo}</Categoria>
            <NomeLoja>{restaurante?.titulo}</NomeLoja>
        </Container>
    )
}



export default Banner