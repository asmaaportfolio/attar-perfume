/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faUser, faHeart } from '@fortawesome/free-solid-svg-icons';
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import logo from '../assets/logo.png';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <motion.div
      className="flex justify-between items-center pt-3 pb-3 px-8 bg-red-200 backdrop-blur-sm rounded-md shadow-md"
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8 }}
    >

      <div>
        <img className="w-22 drop-shadow-md rounded-full" src={logo} alt="Logo" />
      </div>


      <ul className={`
        flex-col lg:flex lg:flex-row
        items-center text-xl gap-6
        ${isMenuOpen ? 'block' : 'hidden'} lg:block
        absolute lg:static
        top-28 left-0
        w-1/2 lg:w-auto
        h-[50vh] lg:h-auto
        bg-white/50 lg:bg-transparent
        backdrop-blur-sm lg:backdrop-blur-0
        p-8 lg:p-0
        text-center lg:text-right
        rounded shadow lg:shadow-none
        z-10
      `}>
        <li className="mb-6 lg:mb-0 hover:text-red-300 transition">
          <Link to="/" onClick={() => navigate('/')}>الرئيسية</Link>
        </li>
        <li className="mb-6 lg:mb-0 hover:text-red-300 transition">
          <a href="#about">نبذة عنا</a>
        </li>
        <li className="mb-6 lg:mb-0 hover:text-red-300 transition">
          <a href="#products">منتجاتنا</a>
        </li>
        <li className="mb-6 lg:mb-0 hover:text-red-300 transition">
          <a href="#testimonials">آراء عملائنا</a>
        </li>
        <li className="mb-6 lg:mb-0 hover:text-red-300 transition">
          <a href="#contact">تواصل معنا</a>
        </li>
      </ul>

      <div className="flex items-center">
        <FontAwesomeIcon icon={faHeart} className="text-xl p-2 cursor-pointer" />
        
        <Link to="/login">
          <FontAwesomeIcon icon={faUser} className="text-xl p-2 cursor-pointer" />
        </Link>

     
        <div className="lg:hidden">
          <FontAwesomeIcon
            icon={faBars}
            className="text-xl p-2 cursor-pointer lg:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          />
        </div>
      </div>
    </motion.div>
  );
};

export default Navbar;

