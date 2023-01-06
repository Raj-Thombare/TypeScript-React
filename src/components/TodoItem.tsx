import React from "react";

import classes from "./TodoItem.module.css";

const TodoItem: React.FC<{ text: string }> = ({ text }) => {
  return <li className={classes.item}>{text}</li>;
};

export default TodoItem;
