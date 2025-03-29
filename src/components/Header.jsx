import React from 'react';
import { FaLaptopCode } from 'react-icons/fa';

const Header = () => {
  return (
    <header className="bg-gradient-to-r from-purple-500 to-blue-500 text-white p-5 shadow-lg flex items-center justify-between">
      <div className="flex items-center">
        <FaLaptopCode className="text-3xl mr-2" />
        <h1 className="text-3xl font-bold">Drag & Drop Builder</h1>
      </div>
      <nav className="space-x-4">
        <button className="px-4 py-2 bg-white text-blue-500 rounded-lg hover:bg-blue-100 transition">
          Save
        </button>
        <button className="px-4 py-2 bg-white text-red-500 rounded-lg hover:bg-red-100 transition">
          Reset
        </button>
      </nav>
    </header>
  );
};

export default Header;
