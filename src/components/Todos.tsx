import React from "react";

const Todos: React.FC<{ items: string[] }> = ({ items }) => {
  return (
    <ul>
      {items.map((item) => (
        <li>{item}</li>
      ))}
    </ul>
  );
};

export default Todos;
