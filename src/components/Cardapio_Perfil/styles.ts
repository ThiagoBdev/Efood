import styled from "styled-components";
import { cores } from "../../styles";


export const Container = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(2, 1fr);
    gap: 20px;
    max-width: 1024px;
    width: 100%;
`

export const Subcontainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    max-width: 320px;
    width: 100%;
    height: 338px;
    background-color: ${cores.rosa};
`

export const Card = styled.div`
    display: flex;
    flex-direction: column;
    align-item: center;
    justify-content: space-between;
    background-color: ${cores.rosa};
    max-width: 304px;
    width: 100%;
    max-height: 318px;
    height: 100%;
    cursor: pointer;
`
export const Imagem = styled.img`
    object-fit: cover;
    max-width: 305px;
    width: 100%;
    max-height: 167px;
    height: 100%;  
`
    
export const Titulo = styled.h1`
    color: ${cores.rosaletras};
    font-size: 16px;
    font-weight: 900;
    line-height: 18px;
`
export const Paragrafo = styled.p`
    color: ${cores.rosaletras};
    font-size: 14px;
    font-weight: 400;
    line-height: 22px;
`

export const Botao = styled.button`
    color: ${cores.rosa};
    border: none;
    background-color: ${cores.rosaletras};
    width: 100%;
    height: 24px;
    font-size: 14px;
    font-weight: 700;
    line-height: 16px;
    cursor: pointer;
`

export const Modal = styled.div`
    display: none;
    align-items: center;
    justify-content: center;
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;

    &.visivel{
        display: flex;
    }

    .overlay{
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0,0,0, 0.8)};
`

export const ContainerModal = styled.div`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    max-width: 1024px;
    width: 100%;
    max-height: 345px;
    height: 100%;
    background-color: ${cores.rosa};
    color: ${cores.brancofundo};
    z-index: 1;
`
export const Imagemfechar = styled.img`
    position: absolute;
    left: 1000px;
    bottom: 320px;
    cursor: pointer;
`

export const SubModal = styled.div`
    display: flex;
    max-width: 960px;
    width: 100%;
    max-height: 281px;
    height: 100%;
    background-color: ${cores.rosa};
`

export const ImagemComida = styled.img`
    object-fit: cover;
    max-width: 280px;
    width: 100%;
    max-height: 280px;
    height: 100%;
`

export const Conteudo = styled.div`
    margin-left: 24px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`

export const TituloModal = styled.h1`
    font-size: 18px;
    font-weight: 900;
    line-height: 100%;
`
export const DescricaoModal = styled.p`
    font-size: 14px;
    font-weight: 400;
    line-height: 22px;
`
export const BotaoModal = styled.button`
    max-width: 220px;
    width: 100%;
    max-height: 24px;
    height: 24px;
    font-size: 14px;
    font-weight: 700;
    border: none;
    background-color: ${cores.rosaletras};
    color: ${cores.rosa};
    cursor: pointer;
`