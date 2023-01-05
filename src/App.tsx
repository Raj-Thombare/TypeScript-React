import React from "react";
import Todos from "./components/Todos";

function App() {
  const itemsArray = [
    { id: 1, name: "Learn TypeScript" },
    { id: 2, name: "Learn Next.js" },
  ];

  return (
    <div>
      <Todos items={itemsArray} />
    </div>
  );
}

export default App;
