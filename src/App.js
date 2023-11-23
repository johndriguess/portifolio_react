import React from 'react';
import Navbar from './components/NavBar';
import WelcomeSection from './components/WelcomeSection';
import ContactSection from './components/ContactSection';

const App = () => {
  return (
    <div>
      <Navbar />
      <WelcomeSection />
      {/* Seção de Projetos aqui */}
      <ContactSection />
    </div>
  );
};

export default App;
