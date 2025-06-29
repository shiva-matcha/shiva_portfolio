// import React, { useRef } from 'react';
// import Header from './components/Header';
// import emailjs from '@emailjs/browser';
// import Hero from './components/Hero';
// import About from './components/About';
// import Footer from './components/Footer';
// import { motion } from 'framer-motion';
// import './index.css';

// export default function App() {
//   const form = useRef<HTMLFormElement>(null);

//   const sendEmail = (e: React.FormEvent < HTMLFormElement >) => {
//     e.preventDefault();

//     if (!form.current) return;

//     emailjs
//       .sendForm(
//         'service_49re9uf',        // ✅ Your EmailJS service ID
//         'template_ti6lwwu',       // ✅ Your EmailJS template ID
//         form.current,
//         '4qugzKU3pt4a0QMCb'       // ✅ Your EmailJS public API key
//       )
//       .then(
//         () => {
//           alert("✅ Message sent successfully!");
//           form.current?.reset();
//         },
//         (error) => {
//           alert("❌ Failed to send message: " + error.text);
//         }
//       );
//   };

//   return (
//     // <div className="bg-[#f5f5f5] text-gray-900">
//     //   {/* Hero Section */}
//     //   <Hero />
//     //   <Header />

//     //   {/* About Section */}
//     //   <About />

//     //   {/* Quote */}
//     //   <motion.div 
//     //     initial={{ opacity: 0, y: 20 }} 
//     //     animate={{ opacity: 1, y: 0 }} 
//     //     transition={{ delay: 1, duration: 1 }}
//     //     className="text-center mt-8 text-sm text-gray-600 max-w-lg mx-auto"
//     //   >
//     //     <p>“I will help you make a design with creativity”</p>
//     //   </motion.div>

//     //   {/* Skills */}
//     //   <div className="px-6 py-16 bg-white text-center">
//     //     <h2 className="text-3xl font-bold mb-6">Skills</h2>
//     //     <div className="max-w-3xl mx-auto space-y-4">
//     //       {['JavaScript', 'Java', 'UI/UX Design', 'Tailwind CSS', 'Figma'].map(skill => (
//     //         <div key={skill} className="text-left">
//     //           <p className="font-medium">{skill}</p>
//     //           <div className="w-full bg-gray-200 rounded-full h-3">
//     //             <div className="bg-black h-3 rounded-full" style={{ width: `${Math.floor(Math.random() * 30) + 70}%` }}></div>
//     //           </div>
//     //         </div>
//     //       ))}
//     //     </div>
//     //   </div>

//       {/* Projects */}
//       <div className="px-6 py-16 bg-gray-100 text-center">
//         <h2 className="text-3xl font-bold mb-6">Projects</h2>
//         <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
//           {[
//             { title: 'Creative Landing Page', desc: 'A modern animated landing page built with React and Tailwind.' },
//             { title: 'E-Commerce UI', desc: 'An elegant and responsive interface for an online store.' },
//             { title: 'Portfolio Website', desc: 'Personal brand website with smooth scroll and animation.' }
//           ].map(project => (
//             <div key={project.title} className="bg-white shadow-md p-6 rounded-xl hover:shadow-xl transition-shadow">
//               <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
//               <p className="text-sm text-gray-600">{project.desc}</p>
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* Blog */}
//       <div className="px-6 py-16 bg-white text-center">
//         <h2 className="text-3xl font-bold mb-6">Blog & Tips</h2>
//         <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
//           {[
//             { title: 'Why Minimalism Works', desc: 'Learn how minimal design increases user engagement.' },
//             { title: 'Top 5 UI Trends in 2025', desc: 'Stay ahead with the latest design styles.' },
//             { title: 'Building a Brand Identity', desc: 'Tips on making your portfolio stand out.' }
//           ].map(post => (
//             <div key={post.title} className="bg-gray-50 shadow p-6 rounded-xl">
//               <h3 className="text-xl font-semibold mb-2">{post.title}</h3>
//               <p className="text-sm text-gray-600">{post.desc}</p>
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* Contact */}
//       <div id="contact" className="px-6 py-16 bg-gray-900 text-white text-center">
//         <h2 className="text-3xl font-bold mb-6">Get In Touch</h2>
//         <p className="mb-6">Interested in working together or have a question?</p>
//         <form ref={form} onSubmit={sendEmail} className="max-w-lg mx-auto space-y-4">
//           <input type="text" name="user_name" placeholder="Your Name" required className="w-full px-4 py-2 rounded bg-white text-black" />
//           <input type="email" name="user_email" placeholder="Your Email" required className="w-full px-4 py-2 rounded bg-white text-black" />
//           <textarea name="message" placeholder="Your Message" className="w-full px-4 py-2 rounded bg-white text-black h-32" required />
//           <button type="submit" className="w-full bg-white text-black px-4 py-2 rounded hover:bg-gray-300">
//             Send Message
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// }



// import React, { useRef } from 'react';
// import Header from './components/Header';
// import Footer from './components/Footer';
// import Hero from './components/Hero';
// import About from './components/About';
// import emailjs from '@emailjs/browser';
// import { motion } from 'framer-motion';
// import './index.css';

// export default function App() {
//   const form = useRef<HTMLFormElement>(null);

//   const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
//     e.preventDefault();

//     if (!form.current) return;

//     emailjs
//       .sendForm(
//         'service_49re9uf',
//         'template_ti6lwwu',
//         form.current,
//         '4qugzKU3pt4a0QMCb'
//       )
//       .then(
//         () => {
//           alert("✅ Message sent successfully!");
//           form.current?.reset();
//         },
//         (error) => {
//           alert("❌ Failed to send message: " + error.text);
//         }
//       );
//   };

//   return (
//     <div className="bg-[#f5f5f5] text-gray-900">
//       <Header />
//       <main className="pt-20">

//         <section id="hero">
//           <Hero />
//         </section>

//         <section id="about">
//           <About />
//         </section>

//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ delay: 1, duration: 1 }}
//           className="text-center mt-8 text-sm text-gray-600 max-w-lg mx-auto"
//         >
//           <p>“I will help you make a design with creativity”</p>
//         </motion.div>

//         <section id="skills">
//           <div className="px-6 py-16 bg-white text-center">
//             <h2 className="text-3xl font-bold mb-6">Skills</h2>
//             <div className="max-w-3xl mx-auto space-y-4">
//               {['JavaScript', 'Java', 'UI/UX Design', 'Tailwind CSS', 'Figma'].map(skill => {
//                 const randomWidth = Math.floor(Math.random() * 30) + 70;
//                 return (
//                   <div key={skill} className="text-left">
//                     <p className="font-medium">{skill}</p>
//                     <div className="w-full bg-gray-200 rounded-full h-3">
//                       <div
//                         className="bg-black h-3 rounded-full"
//                         style={{ width: `${randomWidth}%` }}
//                       ></div>
//                     </div>
//                   </div>
//                 );
//               })}
//             </div>
//           </div>
//         </section>

//         <section id="resume">
//           <div className="px-6 py-16 bg-white text-center">
//             <h2 className="text-3xl font-bold mb-6">Resume</h2>
//             <a
//               href="/Shiva-Resume.pdf"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="text-blue-600 underline hover:text-blue-800"
//             >
//               View My Resume
//             </a>
//           </div>
//         </section>

//         <section id="projects">
//           <div className="px-6 py-16 bg-gray-100 text-center">
//             <h2 className="text-3xl font-bold mb-6">Projects</h2>
//             <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
//               {[
//                 { title: 'Creative Landing Page', desc: 'A modern animated landing page built with React and Tailwind.' },
//                 { title: 'E-Commerce UI', desc: 'An elegant and responsive interface for an online store.' },
//                 { title: 'Portfolio Website', desc: 'Personal brand website with smooth scroll and animation.' }
//               ].map(project => (
//                 <div key={project.title} className="bg-white shadow-md p-6 rounded-xl hover:shadow-xl transition-shadow">
//                   <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
//                   <p className="text-sm text-gray-600">{project.desc}</p>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </section>

//         <section id="blog">
//           <div className="px-6 py-16 bg-white text-center">
//             <h2 className="text-3xl font-bold mb-6">Blog & Tips</h2>
//             <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
//               {[
//                 { title: 'Why Minimalism Works', desc: 'Learn how minimal design increases user engagement.' },
//                 { title: 'Top 5 UI Trends in 2025', desc: 'Stay ahead with the latest design styles.' },
//                 { title: 'Building a Brand Identity', desc: 'Tips on making your portfolio stand out.' }
//               ].map(post => (
//                 <div key={post.title} className="bg-gray-50 shadow p-6 rounded-xl">
//                   <h3 className="text-xl font-semibold mb-2">{post.title}</h3>
//                   <p className="text-sm text-gray-600">{post.desc}</p>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </section>

//         <section id="contact">
//           <div className="px-6 py-16 bg-gray-900 text-white text-center">
//             <h2 className="text-3xl font-bold mb-6">Get In Touch</h2>
//             <p className="mb-6">Interested in working together or have a question?</p>
//             <form ref={form} onSubmit={sendEmail} className="max-w-lg mx-auto space-y-4">
//               <input
//                 type="text"
//                 name="user_name"
//                 placeholder="Your Name"
//                 required
//                 className="w-full px-4 py-2 rounded bg-white text-black"
//               />
//               <input
//                 type="email"
//                 name="user_email"
//                 placeholder="Your Email"
//                 required
//                 className="w-full px-4 py-2 rounded bg-white text-black"
//               />
//               <textarea
//                 name="message"
//                 placeholder="Your Message"
//                 className="w-full px-4 py-2 rounded bg-white text-black h-32"
//                 required
//               />
//               <button type="submit" className="w-full bg-white text-black px-4 py-2 rounded hover:bg-gray-300">
//                 Send Message
//               </button>
//             </form>
//           </div>
//         </section>

//       </main>
//       <Footer />
//     </div>
//   );
// }



// Version 3

// import React, { useRef } from 'react';
// import Header from './components/Header';
// import Footer from './components/Footer';
// import Hero from './components/Hero';
// import About from './components/About';
// import emailjs from '@emailjs/browser';
// import { motion } from 'framer-motion';
// import './index.css';

// export default function App() {
//   const form = useRef<HTMLFormElement>(null);

//   const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
//     e.preventDefault();

//     if (!form.current) return;

//     emailjs
//       .sendForm(
//         'service_49re9uf',
//         'template_ti6lwwu',
//         form.current,
//         '4qugzKU3pt4a0QMCb'
//       )
//       .then(
//         () => {
//           alert("✅ Message sent successfully!");
//           form.current?.reset();
//         },
//         (error) => {
//           alert("❌ Failed to send message: " + error.text);
//         }
//       );
//   };

//   return (
//     <div className="bg-[#f5f5f5] text-gray-900">
//       <Header />
//       <main className="pt-10">
//         <section id="hero">
//           <Hero />
//         </section>

//         <section id="about">
//           <About />
//         </section>

//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ delay: 1, duration: 1 }}
//           className="text-center mt-8 text-sm text-gray-600 max-w-lg mx-auto"
//         >
//           <p>
//             “I will help you make a design with creativity”
//           </p>
//         </motion.div>

//         <section id="skills">
//           <div className="px-6 py-16 bg-white text-center">
//             <h2 className="text-3xl font-bold mb-6">Skills</h2>
//             <div className="max-w-3xl mx-auto space-y-4">
//               {["JavaScript", "Java", "UI/UX Design", "Tailwind CSS", "Figma"].map(
//                 (skill) => {
//                   const randomWidth = Math.floor(Math.random() * 30) + 70;
//                   return (
//                     <div key={skill} className="text-left">
//                       <p className="font-medium">{skill}</p>
//                       <div className="w-full bg-gray-200 rounded-full h-3">
//                         <div
//                           className="bg-black h-3 rounded-full"
//                           style={{ width: `${randomWidth}%` }}
//                         ></div>
//                       </div>
//                     </div>
//                   );
//                 }
//               )}
//             </div>
//           </div>
//         </section>

//         <section id="resume">
//           <div className="px-6 py-16 bg-white text-center">
//             <h2 className="text-3xl font-bold mb-6">Resume</h2>
//             <a
//               href="/Shiva-Resume.pdf"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="text-blue-600 underline hover:text-blue-800"
//             >
//               View My Resume
//             </a>
//           </div>
//         </section>

//         <section id="projects">
//           <div className="px-6 py-16 bg-gray-100 text-center">
//             <h2 className="text-3xl font-bold mb-6">Projects</h2>
//             <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
//               {[
//                 {
//                   title: "Creative Landing Page",
//                   desc: "A modern animated landing page built with React and Tailwind.",
//                 },
//                 {
//                   title: "E-Commerce UI",
//                   desc: "An elegant and responsive interface for an online store.",
//                 },
//                 {
//                   title: "Portfolio Website",
//                   desc: "Personal brand website with smooth scroll and animation.",
//                 },
//               ].map((project) => (
//                 <div
//                   key={project.title}
//                   className="bg-white shadow-md p-6 rounded-xl hover:shadow-xl transition-shadow"
//                 >
//                   <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
//                   <p className="text-sm text-gray-600">{project.desc}</p>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </section>

//         <section id="blog">
//           <div className="px-6 py-16 bg-white text-center">
//             <h2 className="text-3xl font-bold mb-6">Blog & Tips</h2>
//             <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
//               {[
//                 {
//                   title: "Why Minimalism Works",
//                   desc: "Learn how minimal design increases user engagement.",
//                 },
//                 {
//                   title: "Top 5 UI Trends in 2025",
//                   desc: "Stay ahead with the latest design styles.",
//                 },
//                 {
//                   title: "Building a Brand Identity",
//                   desc: "Tips on making your portfolio stand out.",
//                 },
//               ].map((post) => (
//                 <div key={post.title} className="bg-gray-50 shadow p-6 rounded-xl">
//                   <h3 className="text-xl font-semibold mb-2">{post.title}</h3>
//                   <p className="text-sm text-gray-600">{post.desc}</p>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </section>

//         <section id="contact">
//           <div className="px-6 py-16 bg-gray-900 text-white text-center">
//             <h2 className="text-3xl font-bold mb-6">Get In Touch</h2>
//             <p className="mb-6">Interested in working together or have a question?</p>
//             <form ref={form} onSubmit={sendEmail} className="max-w-lg mx-auto space-y-4">
//               <input
//                 type="text"
//                 name="user_name"
//                 placeholder="Your Name"
//                 required
//                 className="w-full px-4 py-2 rounded bg-white text-black"
//               />
//               <input
//                 type="email"
//                 name="user_email"
//                 placeholder="Your Email"
//                 required
//                 className="w-full px-4 py-2 rounded bg-white text-black"
//               />
//               <textarea
//                 name="message"
//                 placeholder="Your Message"
//                 className="w-full px-4 py-2 rounded bg-white text-black h-32"
//                 required
//               />
//               <button
//                 type="submit"
//                 className="w-full bg-white text-black px-4 py-2 rounded hover:bg-gray-300"
//               >
//                 Send Message
//               </button>
//             </form>
//           </div>
//         </section>
//       </main>
//       <Footer />
//     </div>
//   );
// }


  
 
import React, { useRef } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Hero from './components/Hero';
import About from './components/About';
import emailjs from '@emailjs/browser';
import { motion } from 'framer-motion';
import './index.css';

export default function App() {
  const form = useRef<HTMLFormElement>(null);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!form.current) return;

    emailjs
      .sendForm(
        'service_49re9uf',
        'template_ti6lwwu',
        form.current,
        '4qugzKU3pt4a0QMCb'
      )
      .then(
        () => {
          alert("✅ Message sent successfully!");
          form.current?.reset();
        },
        (error) => {
          alert("❌ Failed to send message: " + error.text);
        }
      );
  };

  return (
    <div className="bg-[#f5f5f5] text-gray-900">
      <Header />
      <main className="pt-20">
        <section id="hero">
          <Hero />
        </section>

          {/* Image after Hero section} */}
        <section className="flex justify-center items-center py-1 bg-[#f5f5f5]">
          <img 
            src="/linkedin cover new.svg" 
            alt="Creative Display" 
            className="w-full max-w-4xl rounded-2xl shadow-lg object-cover"
          />
        </section> 




        <section id="about">
          <About />
        </section>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 1 }}
          className="text-center mt-8 text-sm text-gray-600 max-w-lg mx-auto"
        >
          <p>
            “I will help you make a design with creativity”
          </p>
        </motion.div>

        <section id="skills">
          <div className="px-6 py-16 bg-white text-center">
            <h2 className="text-4xl font-bold mb-12 text-gray-800">My Skills</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {[
                { name: 'JavaScript', level: '60%' },
                { name: 'Java', level: '90%' },
                { name: 'Manual Testing', level: '80%' },
                { name: 'REST API', level: '88%' },
                { name: 'GenAI', level: '82%' },
                { name: 'Spring Framwork', level: '87%' },
              ].map((skill, index) => (
                <motion.div
                  key={skill.name}
                  className="bg-gray-100 p-6 rounded-xl shadow hover:shadow-xl transition duration-500"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                >
                  <h3 className="text-xl font-semibold mb-2">{skill.name}</h3>
                  <div className="w-full bg-gray-300 rounded-full h-4">
                    <motion.div
                      className="bg-black h-4 rounded-full"
                      initial={{ width: 0 }}
                      whileInView={{ width: skill.level }}
                      transition={{ duration: 1 }}
                    ></motion.div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section id="resume">
          <div className="px-6 py-16 bg-white text-center">
            <h2 className="text-3xl font-bold mb-6">Resume</h2>
            <a
              href="/Siva_Sunil_Kumar_Software_Engineer.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 underline hover:text-blue-800"
            >
              View My Resume
            </a>
          </div>
        </section>

        <section id="projects">
          <div className="px-6 py-16 bg-gray-100 text-center">
            <h2 className="text-3xl font-bold mb-6">Projects</h2>
            <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {[
                {
                  title: "Creative Landing Page",
                  desc: "A modern animated landing page built with React and Tailwind.",
                },
                {
                  title: "E-Commerce UI",
                  desc: "An elegant and responsive interface for an online store.",
                },
                {
                  title: "Portfolio Website",
                  desc: "Personal brand website with smooth scroll and animation.",
                },
              ].map((project) => (
                <div
                  key={project.title}
                  className="bg-white shadow-md p-6 rounded-xl hover:shadow-xl transition-shadow"
                >
                  <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                  <p className="text-sm text-gray-600">{project.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="blog">
          <div className="px-6 py-16 bg-white text-center">
            <h2 className="text-3xl font-bold mb-6">Blog & Tips</h2>
            <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {[
                {
                  title: "Why Minimalism Works",
                  desc: "Learn how minimal design increases user engagement.",
                },
                {
                  title: "Top 5 UI Trends in 2025",
                  desc: "Stay ahead with the latest design styles.",
                },
                {
                  title: "Building a Brand Identity",
                  desc: "Tips on making your portfolio stand out.",
                },
              ].map((post) => (
                <div key={post.title} className="bg-gray-50 shadow p-6 rounded-xl">
                  <h3 className="text-xl font-semibold mb-2">{post.title}</h3>
                  <p className="text-sm text-gray-600">{post.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="contact">
          <div className="px-6 py-16 bg-gray-900 text-white text-center">
            <h2 className="text-3xl font-bold mb-6">Get In Touch</h2>
            <p className="mb-6">Interested in working together or have a question?</p>
            <form ref={form} onSubmit={sendEmail} className="max-w-lg mx-auto space-y-4">
              <input
                type="text"
                name="user_name"
                placeholder="Your Name"
                required
                className="w-full px-4 py-2 rounded bg-white text-black"
              />
              <input
                type="email"
                name="user_email"
                placeholder="Your Email"
                required
                className="w-full px-4 py-2 rounded bg-white text-black"
              />
              <textarea
                name="message"
                placeholder="Your Message"
                className="w-full px-4 py-2 rounded bg-white text-black h-32"
                required
              />
              <button
                type="submit"
                className="w-full bg-white text-black px-4 py-2 rounded hover:bg-gray-300"
              >
                Send Message
              </button>
            </form>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
