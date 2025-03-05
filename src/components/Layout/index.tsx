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
            {componenteheader || < Header />}
            {incluibanner && <Banner />}
            <Container>{children}</Container>
            <Footer />
        </>
    )
}

export default Layout