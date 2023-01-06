import React, { useState } from "react";
import { Item } from "../models/todo";

type TodosContextObj {
    items: Item[];
    addTodo: (text: string) => void;
    removeTodo: (id: number) => void;
}

const TodosContext = React.createContext<TodosContextObj>({
  items: [],
  addTodo: (text: string) => {},
  removeTodo: (id: number) => {},
});

const TodosContextProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
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

  const contextValue:TodosContextObj = {
    items: todos,
    addTodo: addTodoHandler,
    removeTodo: removeTodoHandler,
  };

  return (
    <TodosContext.Provider value={contextValue}>
      {children}
    </TodosContext.Provider>
  );
};

export default TodosContextProvider;
