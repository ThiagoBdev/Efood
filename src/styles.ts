import styled, { createGlobalStyle } from "styled-components"

export const cores = {
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
        background-color: ${cores.brancofundo};
        color: ${cores.rosa};
    }
`

export const Container = styled.div`
    max-width: 1366px;
    width: 100%;
    margin: 0 auto;
`

