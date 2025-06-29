import React, { useEffect, useRef } from 'react';
import Typed from 'typed.js';

const Hero = () => {
  const typedRef = useRef(null);

  useEffect(() => {
    const typed = new Typed(typedRef.current, {
      strings: [
        'MCA Graduate',
        'Spring Boot Developer',
        'Problem Solver',
        'Creative Thinker',
      ],
      typeSpeed: 50,
      backSpeed: 30,
      backDelay: 1500,
      loop: true,
    });

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <section className="text-center py-16">
      <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-6">
        I am a <span ref={typedRef} className="text-blue-600" />
      </h1>
      <p className="text-lg text-gray-600">
        A Java Backend Fresher actively looking for exciting opportunities to kickstart my tech career.
      </p>
    </section>
  );
};

export default Hero;
