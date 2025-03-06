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

`