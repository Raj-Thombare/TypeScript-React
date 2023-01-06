import { useContext } from "react";
import TodoItem from "./TodoItem";
import { TodosContext } from "../store/todos-context";
import classes from "./Todos.module.css";

const Todos: React.FC = () => {
  const { removeTodo, items } = useContext(TodosContext);

  return (
    <ul className={classes.todos}>
      {items.map((item) => (
        <TodoItem key={item.id} item={item} onRemoveTodo={removeTodo} />
      ))}
    </ul>
  );
};

export default Todos;
