import React from "react";

interface Props {
  items: string[];
  children?: React.ReactNode;
}

const Todos: React.FC<Props> = ({ items, children }) => {
  return (
    <ul>
      {items.map((item) => (
        <li>{item}</li>
      ))}
      {children}
    </ul>
  );
};

export default Todos;
