import "./App.css";
import { useState } from "react";
import LoginPage from "./pages/login/Login";
import HomePage from "./pages/home/home";
import NewTaskModal from "./components/newTask/newTaskModal";

function App() {
  const [page, setPage] = useState("login");
  const [modalState, setModalState] = useState(false);
  const [user, setUser] = useState(false);

  switch (page) {
    case "login":
      return (
        <div className="App">
          <LoginPage setPage={setPage} setUser={setUser}/>
        </div>
      );
    case "home":
      return (
        <div className="App">
          <HomePage setModalState={setModalState}/>
          <NewTaskModal modalState={modalState} setModalState={setModalState} user={user}/>
        </div>
      )
    case "signup":
      break;
  }
}

export default App;
