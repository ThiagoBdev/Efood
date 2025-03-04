import logo from "../../assets/images/fundoheader.svg"
import { Container, Imagem, LinkCarrinho, Paragrafo } from "./styles"

const Header_Perfil = () => (
    <Container>
        <Paragrafo>Restaurantes</Paragrafo>
        <Imagem src={logo} alt="" />
        <LinkCarrinho href="#">0 produto(s) no carrinho</LinkCarrinho>
    </Container>
)

export default Header_Perfil