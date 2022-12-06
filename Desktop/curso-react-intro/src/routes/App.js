import React from "react";
import Home from "../pages/Home";

import { TodoProvider } from "../context/TodoContext";

function App() {  
  return (
    <>
      <TodoProvider>
        <Home></Home>
      </TodoProvider>
    </>    
  );
}

export default App;