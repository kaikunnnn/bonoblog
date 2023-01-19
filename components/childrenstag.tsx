
import { motion } from "framer-motion";

const variants= {
    hidden: {
        opacity: 0,
    },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.5,
        },
    },
}

const item = {
    hidden:{
        opacity:0,
        x:-50,
    },
    show:{
        opacity:1,
        x:0,
        transition:{
            duration:0.8,
        }

    }
}

function Childrentest() {
  return( 
    <motion.div 
        variants={variants}
        initial="hidden"
        animate="show"
        className="flex gap-4 flex-col" >
        <motion.div variants={item} className="p-4 w-full border-4 text-center">1</motion.div>
        <motion.div variants={item} className="p-4 w-full border-4 text-center">2</motion.div>
        <motion.div variants={item} className="p-4 w-full border-4 text-center">3</motion.div>
        <motion.div variants={item} className="p-4 w-full border-4 text-center">4</motion.div>
    </motion.div>
    
  );
}

export default Childrentest;
