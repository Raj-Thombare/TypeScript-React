import TodoItem from "./TodoItem";
import { Item } from "../models/todo";
import classes from "./Todos.module.css";

interface Props {
  items: Item[];
  // children?: React.ReactNode;
}

const Todos: React.FC<Props> = ({ items }) => {
  return (
    <ul className={classes.todos}>
      {items.map((item) => (
        <TodoItem key={item.id} text={item.name} />
      ))}
    </ul>
  );
};

export default Todos;
