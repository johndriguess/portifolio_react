import React from 'react';

const ContactSection = () => {
  return (
    <section id="contacts" className="contacts bg-gray-800 w-full h-80 flex flex-col justify-center items-center">
      <div id="contact-header">
        <h2 className="text-white text-3xl">Vamos trabalhar juntos...</h2>
        <p id="contacts-p" className="text-white text-2xl italic">Não gostaria de entrar para tomar uma xícara de café?</p>
      </div>
      <div id="contact-links" className="mt-20">
        <h2 className="text-white text-lg text-center mb-4">Contatos dos Colaboradores:</h2>
        <div className="inline-block">
          <a href="https://github.com/johndriguess" id="profile-link" target="_blank" className="text-purple-800 hover:underline" rel="noreferrer">Github - John</a>
        </div>
        <div className="inline-block">
          <a href="https://github.com/LiviaNasc" id="profile-link-2" target="_blank" className="text-purple-800 hover:underline" rel="noreferrer">Github - Lívia</a>
        </div>
        <div className="inline-block">
          <a href="https://github.com/thinkmadu" id="profile-link-3" target="_blank" className="text-purple-800 hover:underline" rel="noreferrer">Github - Madu</a>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
