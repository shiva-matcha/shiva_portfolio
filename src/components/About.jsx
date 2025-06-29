// File: src/components/About.tsx
import React from 'react';
import { motion } from 'framer-motion';
import { Download } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="bg-[#f5f5f5] py-20 px-4">
      <div className="max-w-6xl mx-auto bg-white rounded-3xl shadow-xl p-10 md:p-16 flex flex-col md:flex-row items-center gap-10">
        
        {/* Left: Image */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4 }}
          className="w-full md:w-1/2 flex justify-center"
        >
          <img 
            src="/rahul.png" 
            alt="Rahul" 
            className="w-72 md:w-96 rounded-3xl object-cover bg-transparent"
          />
        </motion.div>

        {/* Right: Text + Resume + Tech Logos */}
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="w-full md:w-1/2 text-center md:text-left space-y-4"
        >
          <h2 className="text-4xl font-bold">About Me</h2>
          <p className="text-lg text-gray-700">
            Hey there! I’m <span className="font-semibold text-black">Shiva</span>,— a backend-focused developer passionate about crafting reliable, scalable, and high-performance systems that power modern web applications. With a strong foundation in Java, Spring Boot, and RESTful APIs, 
            I specialize in building the logic and infrastructure behind seamless digital experiences.

          </p>
          <p className="text-md text-gray-600">
            I’ve evolved into a full-stack developer, combining my backend expertise with modern frontend technologies like React, Tailwind CSS to bring ideas to life from end to end.

          </p>
          <p>Let’s build something great together! 🚀</p>

          {/* Download Resume Button */}
          <a 
            href="/Siva_Sunil_Kumar_Software_Engineer.pdf" 
            download="Siva_Sunil_Kumar_Software_Engineer.pdf"
            className="inline-flex items-center bg-black text-white px-5 py-2 rounded-xl hover:bg-gray-800 transition"
          >
            <Download className="w-5 h-5 mr-2" />
            Download Resume
          </a>

          {/* Animated Tech Logos with Links */}
          <div className="flex flex-wrap gap-4 pt-6 justify-center md:justify-start">
            {[
              {
                src: '/leetcode.svg',
                alt: 'React',
                link: 'https://leetcode.com/u/shiva_129/'
              },
              {
                src: '/linkedin.svg',
                alt: 'LinkedIn',
                link: 'https://www.linkedin.com/in/siva-sunil-kumar-macha/'
              },
              // {
              //   src: '/framer.png',
              //   alt: 'Framer Motion',
              //   //link: 'https://www.framer.com/motion/'
              // },
              {
                src: '/java.svg',
                alt: 'Java',
                //link: 'https://www.java.com/'
              },
              {
                src: '/github.svg',
                alt: 'GitHub',
                //link: 'https://github.com/yourusername'
              }
            ].map((tech) => (
              <a
                key={tech.alt}
                href={tech.link}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:scale-110 transition-transform"
              >
                <motion.img
                  src={tech.src}
                  alt={tech.alt}
                  className="w-10 h-10"
                  whileHover={{ scale: 1, rotate: 5 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                />
              </a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
