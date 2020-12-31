import {createGlobalStyle} from "styled-components";

const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    body{
        background: #1b1b1b;
        font-family: 'Inter', sans-serif;
        overflow-x:hidden;
    }
    button{
        font-weight: bold;
        font-size: 1.1rem;
        cursor: pointer;
        border: 3px solid #23d997;
        background: transparent;
        color: #fff;
        transition: all 0.5s ease;
        padding: 1rem;
        &:hover{
            background-color: #23d997;
            color: #fff;
        }
        font-family: 'Inter', sans-serif;
    }
    h2{
        font-weight: lighter;
        font-size: 4rem;
    }
    h3{
        color:#fff;
    }
    p{
        padding: 3rem 0rem;
        color: #ccc;
        font-size: 1.4rem;
        line-height: 150%;
    }
    h4{
        font-weight:bold;
        color: #23d997;
        font-size:2rem;
    }
    span{
        font-weight:bold;
        color: #23d997;
    }
    a{
        font-size: 1.1rem;
    }
    html{
        @media(max-width:1700px){
            font-size:75%;
        }
    }
`;

export default GlobalStyle;