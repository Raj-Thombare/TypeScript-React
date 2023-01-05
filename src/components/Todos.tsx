import { Item } from "../Interfaces";
import TodoItem from "./TodoItem";

interface Props {
  items: Item[];
  children?: React.ReactNode;
}

const Todos: React.FC<Props> = (props) => {
  return (
    <ul>
      {props.items.map((item) => (
        <TodoItem item={item} />
      ))}
      {props.children}
    </ul>
  );
};

export default Todos;
