import TodoItem from "./TodoItem";
import { Item } from "../models/todo";
import classes from "./Todos.module.css";

interface Props {
  items: Item[];
  onRemoveTodo: (id: number) => void;
  // children?: React.ReactNode;
}

const Todos: React.FC<Props> = ({ items, onRemoveTodo }) => {
  return (
    <ul className={classes.todos}>
      {items.map((item) => (
        <TodoItem key={item.id} item={item} onRemoveTodo={onRemoveTodo} />
      ))}
    </ul>
  );
};

export default Todos;
