import React from "react";

interface Props {
  item: string;
}

const TodoItem: React.FC<Props> = ({ item }) => {
  return <div>{item}</div>;
};

export default TodoItem;
