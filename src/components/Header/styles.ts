import styled from "styled-components";
import fundo from "../../assets/images/logoinicio.svg"

const Hero = styled.header`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    position: relative;
    width: 100%;
    max-height: 384px;
    height: 384px;
    background-image: url(${fundo});

    img{
        margin-bottom: 140px;
        max-width: 125px;

    }
    
    h1{
        max-width: 539px;
        height: 84px;
        font-size: 36px;
        text-align: center;
    }

`

export default Hero