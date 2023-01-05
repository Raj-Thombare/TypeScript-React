import React from "react";
import TodoItem from "./TodoItem";

interface Props {
  items: string[];
  children?: React.ReactNode;
}

const Todos: React.FC<Props> = ({ items, children }) => {
  return (
    <ul>
      {items.map((item) => (
        <TodoItem item={item} />
      ))}
      {children}
    </ul>
  );
};

export default Todos;
