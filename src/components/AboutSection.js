import React from 'react';
import home1 from "../img/home1.png";
import styled from "styled-components";
import { About, Description, Image, Hide } from "../styles";

function AboutSection() {
    return (
        <About className="about">
            <Description className="description">
                <div className="title">
                    <Hide className="hide">
                        <h2>We work to make</h2>
                    </Hide>
                    <Hide className="hide">
                        <h2>your <span>dreams</span> come</h2>
                    </Hide>
                    <Hide className="hide">
                        <h2>true.</h2>
                    </Hide>
                </div>
                <p>
                    Contact us for any photography or videography ideas that you have. We have professionals with amazing skills.
                </p>
                <button>Contact us</button>
            </Description>
            <Image className="image">
                <img src={home1} alt="guy with a camera"/>
            </Image>
        </About>
    );
}

export default AboutSection;
