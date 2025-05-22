import React, { useState } from 'react';
import Gallery from './components/Gallery';
import Details from './components/Details';
import ThemeToggle from './components/ThemeToggle';
import './styles/main.css';
import './styles/light.css';
import './styles/dark.css';

// Importando imagens
import char1 from './images/char1.jpg';
import char2 from './images/char2.jpg';
import char3 from './images/char3.jpg';
import char4 from './images/char4.jpg';
import char5 from './images/char5.jpg';
import char6 from './images/char6.jpg';

const App = () => {
  const [selectedCharacter, setSelectedCharacter] = useState(null);
  const [darkMode, setDarkMode] = useState(false);

  const characters = [
    {
      id: 1,
      name: 'Personagem 1',
      image: char1,
      description: 'Descrição detalhada do Personagem 1. Ele é corajoso e determinado.'
    },
    {
      id: 2,
      name: 'Personagem 2',
      image: char2,
      description: 'Descrição detalhada do Personagem 2. Ela é inteligente e perspicaz.'
    },
    {
      id: 3,
      name: 'Seu sirigueijo',
      image: char3,
      description: 'Descrição detalhada do Personagem 3. Ele é misterioso e reservado.'
    },
    {
      id: 4,
      name: 'Gary',
      image: char4,
      description: 'Descrição detalhada do Personagem 4. Ela é divertida e energética.'
    },
    {
      id: 5,
      name: 'Sandy',
      image: char5,
      description: 'Descrição detalhada do Personagem 5. Ele é sábio e experiente.'
    },
    {
      id: 6,
      name: 'Bob Esponja',
      image: char6,
      description: 'Descrição detalhada do Personagem 6. Ela é forte e protetora.'
    }
  ];

  const toggleTheme = () => {
    setDarkMode(!darkMode);
    document.body.className = darkMode ? 'light-theme' : 'dark-theme';
  };

  return (
    <div className={`app ${darkMode ? 'dark-theme' : 'light-theme'}`}>
      <ThemeToggle darkMode={darkMode} toggleTheme={toggleTheme} />
      <h1>Galeria de Personagens</h1>
      <Gallery 
        characters={characters} 
        onCharacterClick={setSelectedCharacter} 
      />
      <Details 
        character={selectedCharacter} 
        onClose={() => setSelectedCharacter(null)} 
      />
    </div>
  );
};

export default App;