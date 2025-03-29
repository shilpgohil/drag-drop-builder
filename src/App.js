import React, { useState, useEffect } from 'react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import Sidebar from './components/Sidebar';
import Canvas from './components/Canvas';
import Header from './components/Header';
import Footer from './components/Footer';
import './styles/tailwind.css';

const App = () => {
  const [elements, setElements] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    try {
      // Simulating data fetch or initialization
      setElements([]);
    } catch (err) {
      setError('Failed to load initial elements.');
    }
  }, []);

  const handleDrop = (item) => {
    try {
      if (!item || !item.content) {
        throw new Error('Invalid item dropped.');
      }
      setElements((prev) => [...prev, item]);
    } catch (err) {
      setError('Error dropping element.');
    }
  };

  return (
    <DndProvider backend={HTML5Backend}>
      <div className="min-h-screen bg-gradient-to-br from-[#1e3a8a] to-[#9333ea] text-white">
        
        <Header />
        
        <div className="flex">
          <Sidebar />
          <div className="flex-1 p-8">
            {error && (
              <div className="bg-red-500 text-white p-4 rounded-md mb-4">
                {error}
              </div>
            )}
            <Canvas elements={elements} onDrop={handleDrop} />
          </div>
        </div>

        <Footer />
      </div>
    </DndProvider>
  );
};

export default App;
