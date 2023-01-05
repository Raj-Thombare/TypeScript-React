import React from "react";
import { Item } from "../Interfaces";

const TodoItem: React.FC<{ item: Item }> = ({ item }) => {
  console.log(item);
  return (
    <div>
      {item.id}

      <h2>{item.name}</h2>
    </div>
  );
};

export default TodoItem;
