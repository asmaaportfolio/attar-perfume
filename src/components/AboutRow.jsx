/* eslint-disable no-unused-vars */
import React from 'react';
import { motion } from "framer-motion";

const AboutRow = ({ image, title, text, icons, reverse }) => {
  const rowVariants = {
    hidden: { opacity: 0, x: reverse ? 100 : -100 },
    visible: { 
      opacity: 1, 
      x: 0, 
      transition: { duration: 0.8, type: "spring", stiffness: 120 } 
    }
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.8, delay: 0.3 } }
  };

  const textVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, delay: 0.5 } }
  };

  return (
    <motion.div
      className={`flex flex-col gap-6 lg:flex-row ${reverse ? 'lg:flex-row-reverse' : ''} items-center mb-20`}
      variants={rowVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      <motion.div 
        className="w-full lg:w-1/2 flex justify-center relative"
        variants={imageVariants}
      >
        <div className="absolute top-6 left-6 rounded-tl-[80px] rounded-br-[80px] -z-10"></div>
        <img
          src={image}
          alt="About"
          className="w-[320px] h-auto rounded-tl-[80px] rounded-br-[80px] shadow-xl z-10"
        />
      </motion.div>

      <motion.div
        className={`w-full lg:w-1/2 flex flex-col gap-5 px-4 text-center items-center`}
        variants={textVariants}
      >
        <h2 className="text-2xl font-bold">{title}</h2>
        <p className="text-gray-700 leading-relaxed">{text}</p>

        <div className="flex gap-4 text-2xl text-red-500">
          {icons.map((icon, index) => (
            <span key={index}>{icon}</span>
          ))}
        </div>

        <button className="bg-black text-white py-2 px-6 rounded-full cursor-pointer hover:bg-red-400 transition">
          تواصل معنا
        </button>
      </motion.div>
    </motion.div>
  );
};

export default AboutRow;







