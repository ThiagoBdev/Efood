import styled from "styled-components";
import massa from "../../assets/images/massa2.png"
import { cores } from "../../styles";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${massa});
    background-size: cover;
    background-repeat: no-repeat;
    width: 100%;
    height: 280px;
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