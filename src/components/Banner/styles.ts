import styled from "styled-components";
import { cores } from "../../styles";




export const Container = styled.div<{backgroundUrl: string}>`
    background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${(props) => props.backgroundUrl});
    background-size: cover;
    background-repeat: no-repeat;
    width: 100%;
    max-height: 280px;
`

export const MiniDiv = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    max-width: 1200px;
    width: 100%;
    height: 280px;
    margin-left: 80px;
`

export const Categoria = styled.h3`
    color: ${cores.brancofundo};
    font-weight: 100;
    font-size: 32px;
    line-height: 37px;
    margin-top: 24px;
    margin-left: 160px;
`

export const NomeLoja = styled.h2`
    color: ${cores.brancofundo};
    font-weight: 900;
    font-size: 32px;
    line-height: 37px;
    margin-bottom: 32px;
    margin-left: 160px;
`