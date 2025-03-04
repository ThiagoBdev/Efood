import styled from "styled-components";
import { cores } from "../../styles";
import { Link } from "react-router-dom";

export const ButtonContainer = styled.button`
    background-color: ${cores.rosa};
    color: ${cores.rosaletras};
    font-size: 14px;
    font-weight: 700;
    line-height: 16px;
    border: none;
    cursor: pointer;
    text-align: center;
    padding: 6px;
`

export const ButtonLink = styled(Link)`
    background-color: ${cores.rosa};
    color: ${cores.rosaletras};
    font-size: 14px;
    font-weight: 700;
    line-height: 16px;
    border: none;
    cursor: pointer;
    text-align: center;
    padding: 6px;
`