/* eslint-disable no-unused-vars */
import { useState } from "react";
import { FaUser, FaLock } from "react-icons/fa";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { motion } from "framer-motion";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ email, password });
  };

  const formVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 1 } }
  };

  return (
    <div
      className="flex items-center justify-center min-h-screen"
      style={{ backgroundImage: `url('/home.png')` }}
    >
      <motion.form
        onSubmit={handleSubmit}
        className="p-8 rounded-2xl shadow-xl w-full max-w-sm bg-white/40"
        variants={formVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="flex flex-col items-center mb-6">
          <div className="w-16 h-16 bg-indigo-100 text-black flex items-center justify-center rounded-full text-3xl shadow-md">
            <FaUser />
          </div>
          <h2 className="text-2xl font-bold mt-3 text-gray-800">تسجيل الدخول</h2>
        </div>

        {/* Email Input */}
        <div className="relative mb-4">
          <FaUser className="absolute left-3 top-3 text-black text-lg" />
          <input
            type="email"
            placeholder="البريد الإلكتروني"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-3 pl-10 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
            required
          />
        </div>

        {/* Password Input */}
        <div className="relative mb-4">
          <FaLock className="absolute left-3 top-3 text-black text-lg" />
          <input
            type={showPassword ? "text" : "password"}
            placeholder="كلمة المرور"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-3 pl-10 pr-10 border border-black rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            required
          />
          <div
            className="absolute right-3 top-3 cursor-pointer text-black"
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? <AiFillEyeInvisible /> : <AiFillEye />}
          </div>
        </div>

        {/* Submit Button */}
        <motion.button
          type="submit"
          className="w-full bg-black cursor-pointer text-white py-3 rounded-lg hover:bg-red-300 transition duration-300 shadow-md"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          دخول
        </motion.button>

        {/* Links */}
        <div className="flex justify-between items-center mt-4 text-sm">
          <a href="#" className="text-blue-600 hover:underline">
            نسيت كلمة المرور؟
          </a>
          <a href="#" className="text-blue-600 hover:underline">
            إنشاء حساب
          </a>
        </div>
      </motion.form>
    </div>
  );
}
