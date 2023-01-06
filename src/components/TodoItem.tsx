import React from "react";
import { Item } from "../models/todo";
import classes from "./TodoItem.module.css";

const TodoItem: React.FC<{
  item: Item;
  onRemoveTodo: (id: number) => void;
}> = ({ item, onRemoveTodo }) => {
  return (
    <li className={classes.item} onClick={() => onRemoveTodo(item.id)}>
      {item.name}
    </li>
  );
};

export default TodoItem;
