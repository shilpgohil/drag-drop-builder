import React from 'react';
import { useDrop } from 'react-dnd';

const Canvas = ({ elements, onDrop }) => {
  const [{ isOver }, drop] = useDrop(() => ({
    accept: 'ELEMENT',
    drop: (item) => onDrop(item),
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  }));

  return (
    <div
      ref={drop}
      className={`flex-1 min-h-[600px] bg-white shadow-lg border rounded-lg p-6 transition-all ${
        isOver ? 'bg-blue-100 scale-105' : 'bg-gray-50'
      }`}
    >
      {elements.length === 0 ? (
        <p className="text-center text-gray-400">Drag elements here...</p>
      ) : (
        elements.map((el, index) => (
          <div
            key={index}
            className="p-4 m-2 border rounded-lg bg-gradient-to-r from-green-400 to-blue-400 text-white shadow-md hover:scale-105 transition-transform"
          >
            {el.content}
          </div>
        ))
      )}
    </div>
  );
};

export default Canvas;
