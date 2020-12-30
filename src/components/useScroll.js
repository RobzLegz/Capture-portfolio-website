import { useInView } from "react-intersection-observer";
import { useAnimation } from "framer-motion";

export const useScroll = () => {
    const contrls = useAnimation();
    const [element, view] = useInView({threshold:0.5});

    if(view){
        contrls.start("show");
    }else{
        contrls.start("hidden");
    }
    return[element,contrls];
}