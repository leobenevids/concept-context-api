import React from "react";
import { useAuth } from "./Providers/Auth";
import Profile from "./Components/Profile";
import Login from "./Components/Login";

function App() {
  const { user, setUser } = useAuth();
  console.log(user);

  return (
    <>
      <div>
        <h1>Olá {user.name}</h1>
        <input
          type="text"
          onChange={(e) => setUser({ name: e.target.value })}
        />
      </div>
      <Profile />
      <Login />
    </>
  );
}

export default App;
