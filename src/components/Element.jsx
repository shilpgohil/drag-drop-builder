import React from 'react';
import { useDrag } from 'react-dnd';

const Element = ({ id, type, content }) => {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: 'ELEMENT',
    item: { id, type, content },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  }));

  return (
    <div
      ref={drag}
      className={`p-4 border rounded-lg shadow-lg bg-white hover:bg-blue-50 transition-transform transform hover:scale-105 ${
        isDragging ? 'opacity-50' : ''
      }`}
    >
      {content}
    </div>
  );
};

export default Element;
