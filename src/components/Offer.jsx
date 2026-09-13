/* eslint-disable no-unused-vars */
import React from 'react';
import { motion } from "framer-motion";
import offer from '../assets/offer.png';
import offer1 from '../assets/offer1.png';
import offer2 from '../assets/offer2.png';

const offers = [
  { id: 1, img: offer, title: "50% " },
  { id: 2, img: offer1, title: "50% " },
  { id: 3, img: offer2, title: "50% " },
];

const Offer = () => {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.8 },
    visible: { 
      opacity: 1, 
      y: 0, 
      scale: 1, 
      transition: { duration: 0.6, type: "spring", stiffness: 120 } 
    },
    hover: {
      scale: 1.05,
      y: -5,
      boxShadow: "0px 15px 25px rgba(0,0,0,0.2)",
      transition: { duration: 0.3, type: "spring", stiffness: 300 }
    }
  };

  return (
    <motion.div
      className="py-26 pt-22"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"  
      viewport={{ once: true, amount: 0.3 }}  
    >
      <h2 className="text-3xl font-bold text-center mb-10">عروض وخصومات</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4 max-w-6xl mx-auto">
        {offers.map((offerItem) => (
          <motion.div
            key={offerItem.id}
            className="flex items-center bg-red-50 rounded-lg shadow-md p-4 cursor-pointer"
            variants={cardVariants}
            whileHover="hover"
            initial="hidden"   
            whileInView="visible" 
            viewport={{ once: true, amount: 0.5 }}
          >
            <img
              src={offerItem.img}
              alt={`عرض ${offerItem.id}`}
              className="w-24 h-24 object-contain aspect-square rounded-md ml-4"
            />
            <div className="flex flex-col items-start text-right space-y-2 m-auto">
              <h2 className="text-xl font-bold text-red-600">{offerItem.title} <span className='text-black'>خصم</span></h2>
              <button className="bg-black text-white px-4 py-2 rounded-lg hover:bg-red-400 transition cursor-pointer">
                اشترِ الآن
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}

export default Offer;



