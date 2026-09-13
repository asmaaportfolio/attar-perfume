/* eslint-disable no-unused-vars */
import React from "react";
import { motion } from "framer-motion";

const Contact = () => {
  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 1 } }
  };

  return (
    <section className="py-12" id="contact">
      <div className="max-w-4xl mx-auto px-4">
        <motion.h2
          className="text-3xl font-bold text-center mb-4 text-black"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          تواصل معنا
        </motion.h2>

        <motion.p
          className="text-center text-black mb-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          إذا كان لديك أي استفسار أو ملاحظات، لا تتردد في مراسلتنا.
        </motion.p>

        <motion.div
          className="flex justify-center"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          <form className="w-full max-w-lg bg-white/20 backdrop-blur-lg shadow-lg rounded-xl p-6 space-y-4 border border-white/30">
            <motion.input
              type="text"
              placeholder="الاسم"
              className="w-full border border-gray-300/30 rounded-lg px-4 py-2 focus:outline-none focus:ring focus:ring-blue-300 bg-white/40 placeholder-gray-700"
              whileFocus={{ scale: 1.02 }}
            />
            <motion.input
              type="email"
              placeholder="البريد الإلكتروني"
              className="w-full border border-gray-300/30 rounded-lg px-4 py-2 focus:outline-none focus:ring focus:ring-blue-300 bg-white/40 placeholder-gray-700"
              whileFocus={{ scale: 1.02 }}
            />
            <motion.textarea
              rows="5"
              placeholder="رسالتك"
              className="w-full border border-gray-300/30 rounded-lg px-4 py-2 focus:outline-none focus:ring focus:ring-blue-300 bg-white/40 placeholder-gray-700"
              whileFocus={{ scale: 1.02 }}
            ></motion.textarea>
            <motion.button
              type="submit"
              className="w-full bg-black text-white py-2 rounded-lg hover:bg-red-300 cursor-pointer transition"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              إرسال
            </motion.button>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;


