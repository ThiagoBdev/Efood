import { Container } from "../../styles"
import Banner from "../Banner"
import Footer from "../Footer"
import Header from "../Header"


type LayoutProps = {
    children: React.ReactNode
    componenteheader?: React.ReactNode
    incluibanner?: boolean
}


const Layout = ({children, componenteheader, incluibanner}: LayoutProps) => {
    return (
        <>  
            <Container>
                {componenteheader || < Header />}
                {incluibanner && <Banner />}
                {children}
                <Footer />
            </Container>
        </>
    )
}

export default Layout