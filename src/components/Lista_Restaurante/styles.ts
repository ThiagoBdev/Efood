import styled from "styled-components"
import { cores } from "../../styles"


export const Container = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(3, auto);
    gap: 16px;
    max-width: 1024px;
    width: 100%;
    height: 1290px;
`

export const Card = styled.div`
    max-width: 472px;
    width: 100%;
    height: 398px;
`

export const Imagem = styled.div`
position: relative;
max-width: 472px;
width: 100%; 
height: 217px;
object-fit: cover;
`

export const Destaque = styled.span`
    position: absolute;
    right: 90px;
    background-color: ${cores.rosa};
    color: ${cores.rosaletras};
    max-width: 121px;
    width: 100%;
    height: 26px;
    font-size: 12px;
    text-align: center;
    padding-top: 5px;
    margin-top: 10px;
`

export const MiniCard = styled.span`
    position: absolute;
    right: 20px;
    background-color: ${cores.rosa};
    color: ${cores.rosaletras};
    max-width: 61px;
    width: 100%;
    height: 26px;
    font-size: 12px;
    text-align: center;
    padding-top: 5px;
    margin-top: 10px;
`

export const Sub_Container = styled.div`
    border-left: 1px solid ${cores.rosa};
    border-right: 1px solid ${cores.rosa};
    border-bottom: 1px solid ${cores.rosa};
    max-height: 186px;
    height: 100%;
    padding: 5px;
    padding-top: 8px;
`

export const MiniContainer = styled.div`
    max-width: 470px;
    width: 100%;
    height: 40px;
    display: flex;
    justify-content: space-between;
`

export const MiniDiv = styled.div`
    display: flex;
`
export const Titulo = styled.h2`
    margin: 0;
    font-weight: 700;
    font-size: 18px;
    line-height: 21px;
    padding-bottom: 16px;
    color: ${cores.rosa};
`

export const Descricao = styled.p`
    font-weight: 400;
    font-size: 14px;
    line-height: 22px;
    color: ${cores.rosa};
    padding-bottom: 16px;
`

export const Nota = styled.span`
    height: 21px;
    padding-right: 8px;
    padding-bottom: 8px;
    font-size: 18px;
    font-weight: 700;
    line-height: 21px;
`

export const Imagemestrela = styled.img`
    max-width: 21px;
    width: 100%;
    height: 21px;
`