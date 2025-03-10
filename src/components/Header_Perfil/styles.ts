import styled from "styled-components";
import fundo from "../../assets/images/logoinicio.svg"
import { cores } from "../../styles";

export const Container = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-around;
    background-image: url(${fundo});
    width: 100%;
    height: 186px;
    
`

export const MiniDiv = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-around;
    max-width: 1200px;
    width: 100%;
`

export const Paragrafo = styled.p`
    font-weight: 900;
    font-size: 18px;
    line-height: 21px;
    align: center;
`

export const Imagem = styled.img`
    margin-left: 100px;
`

export const CartButton = styled.a`
    color: ${cores.rosa};
    font-weight: 900;
    font-size: 18px;
    line-height: 21px;
    align: center;
    text-decoration: none;
    cursor: pointer;
`