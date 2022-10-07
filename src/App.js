import React from "react";
import { RouterProvider } from "react-router-dom";
import { router } from "./routes/route";
import Header from "./components/Header";

function App() {
  return (
    <div>
      <Header />
      <RouterProvider router={router} />;
    </div>
  );
}

export default App;
