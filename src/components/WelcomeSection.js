// WelcomeSection.js
import React from 'react';

const WelcomeSection = () => {
  return (
    <section id="welcome-section" className="welcome-section bg-gradient-to-b from-cyan-500 to-cyan-600 h-screen flex flex-col justify-center items-center">
      <img className="rounded-full" src="adicionar imagem" alt="Johnatan Rodrigues"></img>
      <h1 className="text-black text-4xl font-bold mb-2">
        Olá, sou Johnatan Rodrigues!
      </h1>
      <p className="text-purple-800 text-2xl font-light italic mb-4">
        Estudante de Ciência da Computação
      </p>
      
      <p className="mt-4 text-gray-600">
        Trabalhando com: Flutter, HTML, CSS, JavaScript e React.
      </p>
      <p className="mt-4 text-gray-600">
        Apaixonado por desenvolvimento web e resolução de problemas. Procurando oportunidades para aprender e crescer na área.
      </p>
    </section>
  );
};

export default WelcomeSection;
