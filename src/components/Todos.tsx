import React from "react";
import { isTemplateSpan } from "typescript";

// interface Props {
//   items: {
//     id: number;
//     name: string;
//   };
// }

interface Item {
  id: number;
  name: string;
}

const Todos: React.FC<{ items: Item[] }> = (props) => {
  return (
    <ul>
      {props.items.map((item) => (
        <li>{item.name}</li>
      ))}
    </ul>
  );
};

export default Todos;
