// App.js
import React from 'react';
import Navbar from './components/Navbar';
import WelcomeSection from './components/WelcomeSection';
import ProjectsList from './components/ProjectsList';
import ContactSection from './components/ContactSection';

const App = () => {
  return (
    <div>
      <Navbar />
      <WelcomeSection />
      <ProjectsList />
      <ContactSection />
    </div>
  );
};

export default App;
