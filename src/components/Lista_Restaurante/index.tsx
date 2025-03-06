import * as S from "./styles"
import estrela from "../../assets/images/estrelaAmarela.png"
import Button from "../Button"
import { useEffect, useState } from "react"
import { buscarRestaurantes, Restaurantes } from "../../api/restaurantes"


const ListadeRestaurantes = () => {

    const [restaurantes, setRestaurantes] = useState<Restaurantes[]>([])

    useEffect(() => {
        const carregarDados = async () => {
            const dados = await buscarRestaurantes()
            setRestaurantes(dados)
        }
        carregarDados()
    }, [])

    const getdescricao = (descricao: string) => {
        if (descricao.length > 95) {
            return descricao.slice(0, 269) + "..."
        }
        return descricao
    }


    return (
        <>
            <S.Container>
                {restaurantes.map((restaurante, index) => (
                    <S.Card key={restaurante.id}>
                        <S.Imagem style={{ backgroundImage: `url(${restaurante.capa})` }}>
                            <S.Destaque style={{display: restaurante.destacado && index === 0 ? "" : 'none'}}>Destaque da semana</S.Destaque>
                            <S.MiniCard>{restaurante.tipo}</S.MiniCard>
                        </S.Imagem>
                        <S.Sub_Container>
                            <S.MiniContainer>
                                <div>
                                    <S.Titulo>{restaurante.titulo}</S.Titulo>
                                </div>
                                <S.MiniDiv>
                                    <S.Nota>{restaurante.avaliacao}</S.Nota>
                                    <S.Imagemestrela src={estrela} alt="estrela"></S.Imagemestrela>
                                </S.MiniDiv>
                            </S.MiniContainer>
                            <S.Descricao>{getdescricao(restaurante.descricao)}</S.Descricao>
                            <Button type="link" to={`/perfil/${restaurante.id}`}title="Clique para ver o cardápio">
                                Saiba mais
                            </Button>
                        </S.Sub_Container>
                    </S.Card>
                ))}
            </S.Container>
        </>
    )

}



export default ListadeRestaurantes