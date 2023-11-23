import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-purple-800 fixed top-0 left-0 w-full flex justify-end">
      <ul className="flex flex-row">
        <li>
          <a href="#welcome-section" className="text-white text-lg px-4 py-2">Sobre</a>
        </li>
        <li>
          <a href="#projects" className="text-white text-lg px-4 py-2">Trabalhos</a>
        </li>
        <li>
          <a href="#contacts" className="text-white text-lg px-4 py-2">Contato</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
