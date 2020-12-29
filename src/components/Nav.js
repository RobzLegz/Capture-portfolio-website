import React from 'react';
import styled from "styled-components";

function Nav() {
    return (
        
        <StyledNav>
            <h1><a id="logo" href="#">Capture</a></h1>
            <ul>
                <li>
                    <a href="#">1. About Us</a>
                </li>
                <li>
                    <a href="#">2. Our Work</a>
                </li>
                <li>
                    <a href="#">3. Contact Us</a>
                </li>
            </ul>
        </StyledNav>
        
    );
};

const StyledNav = styled.nav`
    min-height:10vh;
    display:flex;
    margin:auto;
    justify-content:space-between;
    align-items: center;
    padding: 1rem 10rem;
    background: #282828;
    a{
        color:#fff;
        text-decoration:none;
    }
    ul{
        display:flex;
        list-style:none;
    }
    h1{
        font-size:1.5rem;
        font-family: 'Lobster', sans-serif;
    }
    li{
        padding-left:10rem;
        position:relative;
    }
    #logo{
        font-size:1.5rem;
        font-size:1.5rem;
        font-family: 'Lobster', sans-serif;
        font-weight:lighter;
    }
`;

export default Nav;
