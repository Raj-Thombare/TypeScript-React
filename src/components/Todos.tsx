import { Item } from "../models/todo";
import TodoItem from "./TodoItem";

interface Props {
  items: Item[];
  children?: React.ReactNode;
}

const Todos: React.FC<Props> = ({ items }) => {
  return (
    <ul>
      {items.map((item) => (
        <TodoItem item={item} />
      ))}
    </ul>
  );
};

export default Todos;
