import React, {useEffect} from 'react';
import { useLocation } from "react-router-dom";

function ScrollTop() {

    const {pathName} = useLocation();

    useEffect(() => {
        window.scroll({
            top:0,
            left:0
        });
    }, [pathName]);
        
 
    return (
        null
    );
};

export default ScrollTop;
