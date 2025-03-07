import styled from "styled-components"
import { cores } from "../../styles"
import remover from "../../assets/images/iconeLixeira.png"

export const Overlay = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: #000;
    opacity: 0.8;
`

export const CartContainer = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: none;
    justify-content: flex-end;
    &.is-open{
        display: flex;
    }
`

export const Sidebar = styled.aside`
    background-color: ${cores.rosa};
    max-width: 360px;
    width: 100%;
    height: 100%;
    z-index: 1;
`

export const ContainerList = styled.ul`
    max-width: 360px;
    width: 100%;
    margin-top: 32px;
`


export const ContainerItem = styled.li`
    display: flex;
    align-items: center;
    max-width: 344px;
    width: 100%;
    max-height: 100px;
    height: 100%;
    background-color: ${cores.rosaletras};
    margin-top: 16px;
    margin-left: 8px;
`

export const SubContainer = styled.div`
    display: flex;
    margin-top: 8px;
    margin-left: 8px;
`

export const ImagemComida = styled.img`
    max-width: 80px;
    max-height: 80px;
`
export const IconeRemover = styled.button`
    background-color: transparent;
    background-image: url(${remover});
    width: 16px;
    height: 16px;
    margin-top: 20px;
    margin-left: 230px;
    cursor: pointer;
    border: none;
`

export const infos = styled.div`
    margin-left: 8px;
`

export const Titulo = styled.h3`
    color: ${cores.rosa};
    font-size: 18px;
    font-weight: 900;
    line-height: 100%;
    margin-bottom: 16px;
`

export const Preco = styled.p`
    color: ${cores.rosa};
    font-size: 14px;
    font-weight: 400;
    line-height: 22px;
`

export const ContainerValor = styled.div`
    display: flex;
    justify-content: space-between;
    max-width: 344px;
    width: 100%;
    color: ${cores.rosaletras};
    margin: 40px 8px 16px 8px;
`

export const Paragrafo =  styled.p`
    color: ${cores.rosaletras};
    font-size: 14px;
    font-weight: 700;
    line-height: 100%;
`

export const ValorTotal =  styled.span`
    color: ${cores.rosaletras};
    font-size: 14px;
    font-weight: 700;
    line-height: 100%;
`

export const Botao = styled.button`
    background-color: ${cores.rosaletras};
    color: ${cores.rosa};
    max-width: 344px;
    width: 100%;
    font-size: 14px;
    font-weight: 700;
    line-height: 100%;
    margin: 0px 8px;
    border: none;
    max-height: 24px;
    height: 100%;
    cursor: pointer;
`