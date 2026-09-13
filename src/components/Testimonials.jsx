/* eslint-disable no-unused-vars */
import { useState, useEffect } from "react";
import { FaStar } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

const testimonialsData = [
  { id:1, name: "محمد أحمد", role: "عميل", image: "https://i.pravatar.cc/150?img=1",
    review: "خدمة ممتازة! تعامل راقي جدًا واهتمام بأدق التفاصيل. أنصح الجميع بالتجربة.", rating: 5 },
  { id:2, name: "سارة علي", role: "عميلة", image:"https://i.pravatar.cc/150?img=2" ,
    review: "التجربة كانت رائعة، والتوصيل كان سريع جدًا. سأتعامل معهم مرة أخرى بالتأكيد!", rating: 4 },
  { id:3, name: "أحمد مصطفى", role: "عميل", image: "https://i.pravatar.cc/150?img=3",
    review: "أفضل خدمة حصلت عليها منذ فترة طويلة. الجودة عالية والأسعار مناسبة.", rating: 5 },
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === testimonialsData.length - 1 ? 0 : prevIndex + 1
      );
    }, 4000);
    return () => clearInterval(interval); 
  }, []);

  const { name, role, image, review, rating } = testimonialsData[currentIndex];

  const cardVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.9 },
    visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.8 } },
    exit: { opacity: 0, y: -50, scale: 0.9, transition: { duration: 0.5 } },
  };

  return (
    <section className="py-16 ">
      <h2 className="text-3xl font-bold text-center mb-12">آراء عملائنا</h2>

      <div className="relative max-w-xl mx-auto">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            variants={cardVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="bg-white/20 backdrop-blur-lg border-2  rounded-2xl shadow-xl p-8 text-center"
          >
            <motion.img
              src={image}
              alt={name}
              className="w-28 h-28 rounded-full mx-auto mb-4 border-4 border-red-400"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.8 }}
            />

            <h3 className="text-xl font-semibold text-gray-800">{name}</h3>
            <p className="text-gray-600 mb-2">{role}</p>

            <div className="flex justify-center mb-4">
              {Array(rating)
                .fill()
                .map((_, i) => (
                  <FaStar key={i} className="text-yellow-400" />
                ))}
            </div>

            <p className="text-gray-700 italic">{review}</p>
          </motion.div>
        </AnimatePresence>

      
        <div className="flex justify-center gap-3 mt-8">
          {testimonialsData.map((_, index) => (
            <button
              key={index}
              className={`w-4 h-4 rounded-full ${
                index === currentIndex ? "bg-red-400" : "bg-gray-400"
              }`}
              onClick={() => setCurrentIndex(index)}
              aria-label={`انتقال للرأي ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
