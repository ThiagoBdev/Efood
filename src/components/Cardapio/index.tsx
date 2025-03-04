import * as S from "./styles"
import sushi from "../../assets/images/sushi.png"
import massa from "../../assets/images/massa.png"
import estrela from "../../assets/images/estrelaAmarela.png"
import Button from "../Button"


const ListadeRestaurantes = () => (
    <S.Container>
        <S.Card>
            <S.Imagem style={{ backgroundImage: `url(${sushi})` }}>
                <S.Destaque>Destaque da semana</S.Destaque>
                <S.MiniCard>Japonesa</S.MiniCard>
            </S.Imagem>
            <S.Sub_Container>
                <S.MiniContainer>
                    <div>
                        <S.Titulo>Hioki Sushi</S.Titulo>
                    </div>
                    <S.MiniDiv>
                        <S.Nota>4.9</S.Nota>
                        <S.Imagemestrela src={estrela} alt="estrela"></S.Imagemestrela>
                    </S.MiniDiv>
                </S.MiniContainer>
                <S.Descricao>Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis
                frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega 
                rápida, embalagens cuidadosas e qualidade garantida.
                Experimente o Japão sem sair do lar com nosso delivery!</S.Descricao>
                <Button type="link" to="/Perfil" title="Clique para ver o cardapio">Saiba mais</Button>
            </S.Sub_Container>
        </S.Card>
        <S.Card>
            <S.Imagem style={{ backgroundImage: `url(${massa})` }}>
                <S.MiniCard>Italiana</S.MiniCard>
            </S.Imagem>
            <S.Sub_Container>
                <S.MiniContainer>
                    <div>
                        <S.Titulo>La Dolce Vita Trattoria</S.Titulo>
                    </div>
                    <S.MiniDiv>
                        <S.Nota>4.6</S.Nota>
                        <S.Imagemestrela src={estrela} alt="estrela"></S.Imagemestrela>
                    </S.MiniDiv>
                </S.MiniContainer>
                <S.Descricao>A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!</S.Descricao>
                <Button type="link" to="/Perfil" title="Clique para ver o cardapio">Saiba mais</Button>
            </S.Sub_Container>
        </S.Card>
        <S.Card>
            <S.Imagem style={{ backgroundImage: `url(${massa})` }}>
                <S.MiniCard>Italiana</S.MiniCard>
            </S.Imagem>
            <S.Sub_Container>
                <S.MiniContainer>
                    <div>
                        <S.Titulo>La Dolce Vita Trattoria</S.Titulo>
                    </div>
                    <S.MiniDiv>
                        <S.Nota>4.6</S.Nota>
                        <S.Imagemestrela src={estrela} alt="estrela"></S.Imagemestrela>
                    </S.MiniDiv>
                </S.MiniContainer>
                <S.Descricao>A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!</S.Descricao>
                <Button type="link" to="/Perfil" title="Clique para ver o cardapio">Saiba mais</Button>
            </S.Sub_Container>
        </S.Card>

        <S.Card>
            <S.Imagem style={{ backgroundImage: `url(${massa})` }}>
                <S.MiniCard>Italiana</S.MiniCard>
            </S.Imagem>
            <S.Sub_Container>
                <S.MiniContainer>
                    <div>
                        <S.Titulo>La Dolce Vita Trattoria</S.Titulo>
                    </div>
                    <S.MiniDiv>
                        <S.Nota>4.6</S.Nota>
                        <S.Imagemestrela src={estrela} alt="estrela"></S.Imagemestrela>
                    </S.MiniDiv>
                </S.MiniContainer>
                <S.Descricao>A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!</S.Descricao>
                <Button type="link" to="/Perfil" title="Clique para ver o cardapio">Saiba mais</Button>
            </S.Sub_Container>
        </S.Card>

        <S.Card>
            <S.Imagem style={{ backgroundImage: `url(${massa})` }}>
                <S.MiniCard>Italiana</S.MiniCard>
            </S.Imagem>
            <S.Sub_Container>
                <S.MiniContainer>
                    <div>
                        <S.Titulo>La Dolce Vita Trattoria</S.Titulo>
                    </div>
                    <S.MiniDiv>
                        <S.Nota>4.6</S.Nota>
                        <S.Imagemestrela src={estrela} alt="estrela"></S.Imagemestrela>
                    </S.MiniDiv>
                </S.MiniContainer>
                <S.Descricao>A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!</S.Descricao>
                <Button type="link" to="/Perfil" title="Clique para ver o cardapio">Saiba mais</Button>
            </S.Sub_Container>
        </S.Card>

        <S.Card>
            <S.Imagem style={{ backgroundImage: `url(${massa})` }}>
                <S.MiniCard>Italiana</S.MiniCard>
            </S.Imagem>
            <S.Sub_Container>
                <S.MiniContainer>
                    <div>
                        <S.Titulo>La Dolce Vita Trattoria</S.Titulo>
                    </div>
                    <S.MiniDiv>
                        <S.Nota>4.6</S.Nota>
                        <S.Imagemestrela src={estrela} alt="estrela"></S.Imagemestrela>
                    </S.MiniDiv>
                </S.MiniContainer>
                <S.Descricao>A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!</S.Descricao>
                <Button type="link" to="/Perfil" title="Clique para ver o cardapio">Saiba mais</Button>
            </S.Sub_Container>
        </S.Card>
    </S.Container>
)

export default ListadeRestaurantes