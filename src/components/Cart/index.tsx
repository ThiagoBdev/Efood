import * as S from "./styles"
import pizzaPequena from "../../assets/images/pizzaPequena.png"
import iconeLixeira from "../../assets/images/iconeLixeira.png"

const Cart = () => (
    <S.CartContainer>
        <S.Overlay />
        <S.Sidebar>
            <S.ContainerList>
                <S.ContainerItem>
                    <S.SubContainer>
                        <S.ImagemComida src={pizzaPequena} alt="ImagemdoProduto" />
                        <S.infos>
                            <S.Titulo>Pizza Marguerita</S.Titulo>
                            <p>R$ 60,90</p>
                            <S.ImagemIcone src={iconeLixeira} alt="iconeRemover" />
                        </S.infos>
                    </S.SubContainer>
                </S.ContainerItem>
                <S.ContainerItem>
                    <S.SubContainer>
                        <S.ImagemComida src={pizzaPequena} alt="" />
                        <S.infos>
                            <S.Titulo>Pizza Marguerita</S.Titulo>
                            <p>R$ 60,90</p>
                            <S.ImagemIcone src={iconeLixeira} alt="" />
                        </S.infos>
                    </S.SubContainer>
                </S.ContainerItem>
                <S.ContainerItem>
                    <S.SubContainer>
                        <S.ImagemComida src={pizzaPequena} alt="" />
                        <S.infos>
                            <S.Titulo>Pizza Marguerita</S.Titulo>
                            <p>R$ 60,90</p>
                            <S.ImagemIcone src={iconeLixeira} alt="" />
                        </S.infos>
                    </S.SubContainer>
                </S.ContainerItem>
            </S.ContainerList>
            <S.ContainerValor>
                <S.Paragrafo>Valor total</S.Paragrafo>
                <S.ValorTotal>R$182,70</S.ValorTotal>
            </S.ContainerValor>
                <S.Botao>Continuar com a entrega</S.Botao>
        </S.Sidebar>
    </S.CartContainer>
)

export default Cart