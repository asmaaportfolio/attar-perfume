/* eslint-disable no-unused-vars */
import React from "react";
import { motion } from "framer-motion";
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";

const Footer = () => {
  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, type: "spring", stiffness: 120 } }
  };

  const iconVariants = {
    hidden: { opacity: 0, scale: 0.5 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.6, type: "spring", stiffness: 120 } }
  };

  return (
    <footer className="bg-gradient-to-r from-black via-gray-900 to-black text-white pt-12 font-[Cairo]">
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-10 place-items-center text-center">

     
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={itemVariants}
        >
          <h2 className="text-4xl font-bold mb-4 text-red-300">عطر الشرق</h2>
          <p className="text-gray-400 leading-relaxed max-w-xs">
            نقدم أفخم وأجود أنواع العطور التي تضيف لمسة من الفخامة والرقي لحياتك اليومية.
          </p>
        </motion.div>

     
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={itemVariants}
        >
          <h3 className="text-2xl font-semibold mb-4 text-red-300 pb-2">
            روابط سريعة
          </h3>
          <ul className="space-y-3 text-gray-300">
            <motion.li variants={itemVariants}><a href="#home" className="hover:text-red-300 transition">الرئيسية</a></motion.li>
            <motion.li variants={itemVariants}><a href="#products" className="hover:text-red-300 transition">منتجاتنا</a></motion.li>
            <motion.li variants={itemVariants}><a href="#about" className="hover:text-red-300 transition">من نحن</a></motion.li>
            <motion.li variants={itemVariants}><a href="#contact" className="hover:text-red-300 transition">تواصل معنا</a></motion.li>
          </ul>
        </motion.div>

       
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.h3
            variants={itemVariants}
            className="text-2xl font-semibold mb-4 text-red-300 pb-2"
          >
            تابعنا
          </motion.h3>
          <div className="flex flex-col items-center gap-3 text-gray-300 text-2xl">
            <motion.a href="#" variants={iconVariants} className="hover:text-red-300 transition"><FaFacebookF /></motion.a>
            <motion.a href="#" variants={iconVariants} className="hover:text-red-300 transition"><FaTwitter /></motion.a>
            <motion.a href="#" variants={iconVariants} className="hover:text-red-300 transition"><FaInstagram /></motion.a>
            <motion.a href="#" variants={iconVariants} className="hover:text-red-300 transition"><FaYoutube /></motion.a>
          </div>
        </motion.div>

      </div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={itemVariants}
        className="text-center text-gray-400 mt-10 border-t border-gray-800 py-4 text-sm"
      >
        © {new Date().getFullYear()} جميع الحقوق محفوظة | تصميم بواسطة{" "}
        <span className="text-red-300 font-semibold">أسماء قنديل</span>
      </motion.div>
    </footer>
  );
};

export default Footer;


