import "./App.css";
import HabitPage from "./pages/HabitPage";
import Details from "./pages/Details";
import useAuth from "./hooks/useAuth";
import { BrowserRouter, Route } from "react-router-dom";
import { useState } from "react";

function App() {
  const [user, logOut, signInGoogle] = useAuth();
  const [modal, setModal] = useState(false);

  if (user === null) {
    // 로그인 안함
    return <></>;
  } else if (user === false) {
    // 로그인 실패
    return <LoginPage />;
  } else {
    return <></>;
  }
}

const LoginPage = ({ signInGoogle }) => {
  return <></>;
};

export default App;
