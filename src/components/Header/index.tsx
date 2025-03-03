import Hero from "./styles"
import logo from "../../assets/images/fundoheader.svg"
const Header = () => (
    <Hero>
        <img src={logo} alt="logo" />
        <h1>Viva experiências gastronômicas no conforto da sua casa</h1>
    </Hero>
)

export default Header