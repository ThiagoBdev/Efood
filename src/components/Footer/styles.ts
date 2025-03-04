import styled from "styled-components";
import fundo from "../../assets/images/logoinicio.svg"

export const Container = styled.footer`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-image: url(${fundo});
    width: 100%;
    height: 298px;
    margin-top: 120px;
`

export const RedeSociais = styled.div`
    margin-top: 32px;
    margin-bottom: 80px;
`

export const Paragrafo = styled.p`
    max-width: 600px;
    text-align: center;
    word-wrap: break-word;
`