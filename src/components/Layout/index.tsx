import { Container } from "../../styles"
import Banner from "../Banner"
import Cart from "../Cart"
import Footer from "../Footer"
import Header from "../Header"


type LayoutProps = {
    children: React.ReactNode
    componenteheader?: React.ReactNode
    incluibanner?: boolean
    incluicart?: boolean
}


const Layout = ({children, componenteheader, incluibanner, incluicart}: LayoutProps) => {
    return (
        <>  
            <Container>
                {incluicart && <Cart />}
                {componenteheader || < Header />}
                {incluibanner && <Banner />}
                {children}
                <Footer />
            </Container>
        </>
    )
}

export default Layout