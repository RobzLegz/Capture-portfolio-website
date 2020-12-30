import React from 'react';
import {motion} from "framer-motion";
import {pageAnimation} from "../animation";

function ContactUs() {
    return (
        <motion.div variants={pageAnimation} initial="hidden" animate="show" exit="exit" style={{background:"fff"}}>
            <h1>Contact us</h1>
        </motion.div>
    );
};

export default ContactUs;
