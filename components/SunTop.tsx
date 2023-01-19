
import { motion } from "framer-motion";
import Image from "next/image";

function SunTop() {
  return( 
    <motion.div 
      initial={{ opacity: 1,y: 100}}
      animate={{ opacity: 1,y: 0}} 
      transition={{ ease: "easeOut", duration: 2, delay:1 }}
      className="z-0 fixed  -bottom-48 -right-16" >
      <Image  src="/sun.svg" alt="sun image" width={260} height={260} objectFit="contain" />
    </motion.div>
    
  );
}

export default SunTop;
