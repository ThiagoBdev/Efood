import { Container, Paragrafo, RedeSociais } from "./styles"
import logo from "../../assets/images/fundoheader.svg"
import instagram from "../../assets/images/instagram.png"
import twitter from "../../assets/images/twitter.png"
import facebook from "../../assets/images/facebook.png"


const Footer = () => (
    <Container>
        <img src={logo} alt="logo" />
        <RedeSociais>
            <img src={instagram} alt="instagram" />
            <img src={facebook} alt="facebook" />
            <img src={twitter} alt="twitter" />
        </RedeSociais>
        <Paragrafo>
        A efood é uma plataforma para divulgação de estabelecimentos, a responsabilidade pela entrega, qualidade
        dos produtos é toda do estabelecimento contratado. 
        </Paragrafo>
    </Container>
)

export default Footer