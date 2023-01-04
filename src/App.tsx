import React from "react";
import Todos from "./components/Todos";

function App() {
  const itemsArray = ["Learn TypeScript", "Learn Next.js"];
  return (
    <div>
      <Todos items={itemsArray} />
    </div>
  );
}

export default App;
