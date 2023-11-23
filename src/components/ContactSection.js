// ContactSection.js
import React from 'react';

const ContactSection = () => {
  return (
    <section id="contacts" className="contacts bg-gradient-to-b from-cyan-800 to-cyan-950 h-screen flex flex-col justify-center items-center">
      <div id="contact-header" className="flex flex-col items-center">
        <img className='mb-4' src='https://raw.githubusercontent.com/developedbyed/react-portofolio-with-tailwind/main/public/consulting.png' alt='Consulting'></img>
        <h2 className="text-white text-3xl">Vamos trabalhar juntos...</h2>
        <p id="contacts-p" className="text-white text-2xl italic text-m">Não gostaria de entrar para tomar uma xícara de café?</p>
      </div>
      <div id="contact-links" className="mt-20">
        <h2 className="text-white text-lg text-center mb-4">Contato:</h2>
        <div className="inline-block">
          <a href="https://github.com/johndriguess" id="profile-link" target="_blank" className="text-purple-800 hover:underline" rel="noreferrer">Github - John</a>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
