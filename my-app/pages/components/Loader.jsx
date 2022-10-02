import {motion} from "framer-motion";

const loaderVariants = {
    animationOne:{
        x: [-40, 40],
        y: [0, -60],
        transition:{
            x:{
                yoyo: Infinity,
                duration: 0.5
            },
            y:{
                yoyo: Infinity,
                duration: 0.25,
                ease: 'easeOut' 
            }
        }
    }
}
const Loader = () => {
  return (
    <div className="w-full h-screen flex items-center justify-center">
    <motion.div className="w-[30px] h-[30px] m-auto rounded-full bg-[#4285f4]" variants={loaderVariants}
    animate="animationOne"
    >
    </motion.div>
    </div>
  )
}

export default Loader