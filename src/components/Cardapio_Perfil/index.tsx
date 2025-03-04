import { Card, Container, Paragrafo, Subcontainer, Titulo, Botao } from "./styles"
import pizza from "../../assets/images/pizzamarguerita.png"

const ListagemCardapio = () => {
    return(
        <Container>
            <Subcontainer>
                <Card>
                    <img src={pizza} alt="" />
                    <Titulo>Pizza Marguerita</Titulo>
                    <Paragrafo>A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!</Paragrafo>
                    <Botao>Adiconar ao carrinho</Botao>
                </Card>
            </Subcontainer>
            <Subcontainer>
                <Card>
                    <img src={pizza} alt="" />
                    <Titulo>Pizza Marguerita</Titulo>
                    <Paragrafo>A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!</Paragrafo>
                    <Botao>Adiconar ao carrinho</Botao>
                </Card>
            </Subcontainer>
            <Subcontainer>
                <Card>
                    <img src={pizza} alt="" />
                    <Titulo>Pizza Marguerita</Titulo>
                    <Paragrafo>A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!</Paragrafo>
                    <Botao>Adiconar ao carrinho</Botao>
                </Card>
            </Subcontainer>
            <Subcontainer>
                <Card>
                    <img src={pizza} alt="" />
                    <Titulo>Pizza Marguerita</Titulo>
                    <Paragrafo>A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!</Paragrafo>
                    <Botao>Adiconar ao carrinho</Botao>
                </Card>
            </Subcontainer>
            <Subcontainer>
                <Card>
                    <img src={pizza} alt="" />
                    <Titulo>Pizza Marguerita</Titulo>
                    <Paragrafo>A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!</Paragrafo>
                    <Botao>Adiconar ao carrinho</Botao>
                </Card>
            </Subcontainer>
            <Subcontainer>
                <Card>
                    <img src={pizza} alt="" />
                    <Titulo>Pizza Marguerita</Titulo>
                    <Paragrafo>A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!</Paragrafo>
                    <Botao>Adiconar ao carrinho</Botao>
                </Card>
            </Subcontainer>
        </Container>
    )
}

export default ListagemCardapio