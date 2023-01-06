import { useRef, useContext } from "react";
import { TodosContext } from "../store/todos-context";

import classes from "./NewTodo.module.css";

const NewTodo: React.FC = () => {
  const { addTodo } = useContext(TodosContext);

  const todoTextInputRef = useRef<HTMLInputElement>(null);

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    // ? - if it's null give null when it becomes value give value
    const enteredText = todoTextInputRef.current!.value;
    // ! - assuarance for value that will never be null

    if (enteredText.trim().length === 0) {
      // throw error
      return;
    }

    addTodo(enteredText);
  };

  return (
    <form onSubmit={handleSubmit} className={classes.form}>
      <label htmlFor="text">Todo Text </label>
      <input type="text" id="text" ref={todoTextInputRef} />
      <button>Add Todo</button>
    </form>
  );
};

export default NewTodo;
