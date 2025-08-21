import React from 'react';
// import heroImg from '../assets/hero_demo_img.png'; // adjust path as needed

const HeroSection = () => {
  return (

    <div className="mt-10 ml-10 mr-10 border border-gray-300 rounded h-[233px]">
      <section className="bg-light text-dark py-5 h-full flex items-center justify-center">
        <div className="container text-center">
        <img src="/hero_demo_img.png" alt="Hero" className="mx-auto max-w-full h-auto" />
        </div>
      </section>
    </div>
  );
};

export default HeroSection;
