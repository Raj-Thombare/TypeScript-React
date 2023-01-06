import { useState } from "react";
import Todos from "./components/Todos";
import NewTodo from "./components/NewTodo";
import { Item } from "./models/todo";

const App = () => {
  const [todos, setTodos] = useState<Item[]>([]);

  const dummy_todos = [
    { id: 1, name: "Learn TypeScript" },
    { id: 2, name: "Learn Next.js" },
  ];

  const addTodoHandler = (todoText: string) => {
    let newTodo = Object.create(dummy_todos);
    const uid = Math.floor(Math.random() * 100);

    newTodo.id = uid;
    newTodo.name = todoText;

    setTodos((prev) => {
      return prev.concat(newTodo);
    });
  };

  const removeTodoHandler = (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <div>
      <NewTodo onAddTodo={addTodoHandler} />
      <Todos items={todos} onRemoveTodo={removeTodoHandler} />
    </div>
  );
};

export default App;
