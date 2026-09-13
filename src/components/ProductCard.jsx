/* eslint-disable no-unused-vars */
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-regular-svg-icons';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { motion } from "framer-motion";

const ProductCard = ({ product }) => {

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.8, type: "spring", stiffness: 120 } 
    }
  };


  const imageVariants = {
    hover: { scale: 1.05, transition: { duration: 0.5 } }
  };

  return (
    <motion.div
      tabIndex={0}
      className="relative group cursor-pointer rounded-xl overflow-hidden shadow-md focus:outline-none"
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
     
      <motion.img
        src={product.image}
        alt={product.name}
        className="w-full h-64 object-cover"
        variants={imageVariants}
        whileHover="hover"
        whileFocus="hover"
      />

    
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/60 to-transparent transform translate-y-full group-hover:translate-y-0 group-focus:translate-y-0 transition-transform duration-800 ease-in-out"></div>

    
      <div className="absolute bottom-6 left-0 right-0 p-4 opacity-0 group-hover:opacity-100 group-focus:opacity-100 translate-y-4 group-hover:translate-y-0 group-focus:translate-y-0 text-white text-center transition-all duration-500">
        <h2 className="text-lg text-amber-50 font-bold mb-1">{product.name}</h2>
        <p className="text-red-400 font-bold mb-3">{product.price}</p>
        <div className="flex justify-center gap-6 text-2xl">
          <button className="hover:text-red-500 text-red-400 transition-colors duration-300 cursor-pointer">
            <FontAwesomeIcon icon={faHeart} />
          </button>
          <button className="hover:text-red-400 text-red-400 transition-colors duration-300 cursor-pointer">
            <FontAwesomeIcon icon={faShoppingCart} />
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default ProductCard;





