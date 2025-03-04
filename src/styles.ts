import styled, { createGlobalStyle } from "styled-components"

export const cores = {
    fundosite: "#FFF8F2",
    brancofundo:"#FFFFFF",
    rosa:"#E66767",
    rosaletras:"#FFEBD9"
}

export const GlobalCss = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: Roboto, sans-serif;
    }

    body {
        margin: 0;  
        padding: 0;
        background-color: ${cores.fundosite};
        color: ${cores.rosa};
        width: 100%;  
        height: 100%;
    }
`

export const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding-top: 80px;
    height: 100%;
    width: 100%;
    margin: 0 auto;
`

