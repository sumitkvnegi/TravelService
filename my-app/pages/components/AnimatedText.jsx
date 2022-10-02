import React from "react";
import {motion} from "framer-motion";

const AnimatedText = ({text}) => {
    const letters = Array.from(text);

    const container = {
        hidden: {opacity:0},
        visible: (i=1)=>({
            opacity:1,
            transition: {staggerChildren: 0.03, delayChildren: 0.04 * i}
        }),
    };

    const child = {
        visible: {
            opacity:1,
            x:0,
            transition: {
                type:"spring",
                damping:12,
                stiffness:100,
            }
        },
        hidden:{
            opacity:0,
            x:20,
            transition: {
                type:"spring",
                damping:12,
                stiffness:100,
            }
        }
    };

  return (
        <motion.div className='overflow-hidden flex pb-2' variants={container} initial="hidden" animate="visible">
        {letters.map((letter, index)=> 
    (<motion.span variants={child} key={index}>
        {letter === " " ? "\u00A0" :letter}
    </motion.span>))}</motion.div>
  )
}

export default AnimatedText


/* 0.03
letter === " " ? "\u00A0" :letter
*/