import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import LoginPage from "./pages/Login";

function App() {
  const [page, setPage] = useState("login");

  switch (page) {
    case "login":
      return (
        <div className="App">
          <LoginPage setPage={setPage} />
        </div>
      );
    case "home":
      return (
        <h1>
        The Home Page
      </h1>
      )
    case "signup":
      break;
  }
}

export default App;
