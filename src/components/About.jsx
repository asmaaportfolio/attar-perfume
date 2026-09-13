import React from 'react';
import AboutRow from '../components/AboutRow';
import img1 from '../assets/about1.jpg';
import img2 from '../assets/about2.jpg';

const About = () => {
  return (
<div className="p-22">
  <h2 className='text-center pt-4 text-2xl font-bold'>نبذه عنا</h2>

    <section className="px-6 py-16 max-w-6xl mx-auto">
      
      
      <AboutRow
        image={img1}
        title="من نحن"
        text="نحن متجر يهتم بتقديم عطور فاخرة تجمع بين الأناقة والأصالة."
        icons={["🛍️", "🚚", "💬"]}
        reverse={false}
      />

      <AboutRow
        image={img2}
        title="تواصل معنا"
        text="نسعد دائمًا باستقبال استفساراتكم عبر وسائل التواصل المختلفة."
        icons={["📧", "📞", "💬"]}
        reverse={true}
      />

    </section>
    </div>
  );
};

export default About;
