import React from 'react';
import home1 from "../img/home1.png";
import {motion} from "framer-motion";
import { About, Description, Image, Hide } from "../styles";

function AboutSection() {

    

    return (
        <About className="about">
            <Description className="description">
                <motion.div>
                    <Hide className="hide">
                        <motion.h2>
                            We work to make
                        </motion.h2>
                    </Hide>
                    <Hide className="hide">
                        <motion.h2>your <span>dreams</span> come</motion.h2>
                    </Hide>
                    <Hide className="hide">
                        <motion.h2>true.</motion.h2>
                    </Hide>
                </motion.div>
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
