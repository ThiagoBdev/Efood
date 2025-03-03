import styled from "styled-components";
import fundo from "../../assets/images/logoinicio.svg"

const Hero = styled.header`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    position: relative;
    height: 384px;
    background-image: url(${fundo});

    img{ 
        position: absolute;
        max-width: 125px;
        top: 40px;
        left: 621px;
    }
    
    h1{
        position: absolute;
        max-width: 539px;
        height: 84px;
        top: 236px;
        left: 414px;
        font-size: 36px;
        text-align: center;
    }

`

export default Hero