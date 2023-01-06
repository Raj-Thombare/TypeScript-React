import { useState } from "react";
import Todos from "./components/Todos";
import NewTodo from "./components/NewTodo";

const App = () => {
  const [todos, setTodos] = useState<string[]>([]);

  const dummy_todos = [
    { id: 1, name: "Learn TypeScript" },
    { id: 2, name: "Learn Next.js" },
  ];

  const addTodoHandler = (todoText: string) => {
    const newTodo = todoText;
    // const uid = Math.floor(Math.random() * 100);

    // setTodos(newTodo);
  };

  return (
    <div>
      <NewTodo onAddTodo={addTodoHandler} />
      <Todos items={dummy_todos} />
    </div>
  );
};

export default App;
