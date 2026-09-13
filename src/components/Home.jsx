/* eslint-disable no-unused-vars */

import { motion } from "framer-motion";
import home2 from '../assets/home2.png';

const Home = () => {
  const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.3 } } 
  };

  const textVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 1 } }
  };

  const buttonVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.6, type: "spring", stiffness: 120 } }
  };
const imageVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.3 }
  }
};
  return (
    <motion.section 
      className='grid grid-cols-1 lg:grid-cols-2 items-center justify-center m-auto p-20 gap-y-18'
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.div className="text-center space-y-4 pt-4 pr-4" variants={textVariants}>
        <motion.h1 
          className="text-6xl font-bold text-center pt-8" 
          style={{ fontFamily: "'Reem Kufi', sans-serif" }}
          variants={textVariants}
        >
          عطر الشرق
        </motion.h1>
        <motion.p className="text-4xl text-gray-700" variants={textVariants}>
          عطر الجمال والفخامة
        </motion.p>
        <motion.h5 className="text-3xl text-gray-700" variants={textVariants}>
          كل ما يناسب ذوقك الرفيع
        </motion.h5>

        <div className="gap-2 flex justify-center mt-4">
          <motion.button 
            className="bg-red-400 hover:bg-black text-white py-2 px-4 cursor-pointer rounded-full shadow-md transition duration-300"
            variants={buttonVariants}
          >
            اكتشف المزيد
          </motion.button>
          <motion.button 
            className="bg-black hover:bg-red-400 text-white py-2 mr-1 cursor-pointer px-4 pr-3 rounded-2xl shadow-md transition duration-300"
            variants={buttonVariants}
          >
            مدونتنا
          </motion.button>
        </div>
      </motion.div>

      <motion.div variants={imageVariants}>
        <img src={home2} alt="" className='w-64 pt-10 m-auto' />
      </motion.div>
    </motion.section>
  )
}

export default Home;
