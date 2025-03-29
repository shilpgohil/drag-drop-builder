import React from 'react';
import Element from './Element';
import { FaFont, FaRegImage, FaRegSquare, FaRegKeyboard } from 'react-icons/fa';

const Sidebar = () => {
  return (
    <div className="w-72 bg-gradient-to-b from-blue-500 to-purple-500 shadow-lg text-white rounded-lg p-6">
      <h2 className="text-2xl font-bold mb-4">Elements</h2>
      <div className="space-y-4">
        <Element id="1" type="text" content={<div className="flex items-center"><FaFont className="mr-2" /> Text</div>} />
        <Element id="2" type="image" content={<div className="flex items-center"><FaRegImage className="mr-2" /> Image</div>} />
        <Element id="3" type="button" content={<div className="flex items-center"><FaRegSquare className="mr-2" /> Button</div>} />
        <Element id="4" type="input" content={<div className="flex items-center"><FaRegKeyboard className="mr-2" /> Input</div>} />
      </div>
    </div>
  );
};

export default Sidebar;
