import React from 'react';
import styled from "styled-components";
import {Link} from "react-router-dom";

function Nav() {
    return (
        
        <StyledNav>
            <h1><Link id="logo" to="/">Capture</Link></h1>
            <ul>
                <li>
                    <Link to="/">1. About Us</Link>
                </li>
                <li>
                    <Link to="/work">2. Our Work</Link>
                </li>
                <li>
                    <Link to="/contact">3. Contact Us</Link>
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
    position:sticky;
    top:0;
    z-index:3;
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
