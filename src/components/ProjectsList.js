// ProjectsList.js
import React from 'react';

const projects = [
  {
    name: 'Formulário de Pesquisa',
    imageSrc: 'https://drive.google.com/uc?export=view&id=1uH8BQp0A7mo9kWHhty5wZFKsgYa0Xx9_',
    githubLink: 'https://github.com/johndriguess/formulario',
  },
  {
    name: 'Página de Produto',
    imageSrc: 'https://drive.google.com/uc?id=1Xz1CgG9rMZe6gjTg4VIbAJ3IQEm_r2a6',
    githubLink: 'https://github.com/johndriguess/cubosmagikos',
  },
  
];

const ProjectsList = () => {
  return (
    <section section id="projects" className="projects bg-gradient-to-b from-cyan-600 to-cyan-800 h-screen">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      <div className="col-span-full text-center mb-8">
        <h2 className="text-black text-3xl">Esses são alguns meus Projetos</h2>
      </div>
      {projects.map((project, index) => (
        <div key={index} className="border border-white p-4 rounded cursor-pointer transition duration-300 transform hover:scale-105">
          <a href={project.githubLink} target="_blank" rel="noreferrer">
            <img src={project.imageSrc} alt={project.name} className="mb-2 w-full h-40 object-cover rounded" />
            <p className="text-white text-lg font-semibold">{project.name}</p>
          </a>
        </div>
      ))}
    </div>
        
    </section>
    
  );
};


export default ProjectsList;
