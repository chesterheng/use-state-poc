import { useState } from "react";
import "./App.css";

function App() {
  const [input, setInput] = useState("");

  // fixed white screen problem with default values in object
  const [user, setUser] = useState({
    name: "john",
    email: "john@gmail.com",
    images: ["profile.png", "cover.png"],
  });

  const changeUser = () => {
    // update a specific object property
    setUser((prev) => ({ ...prev, name: input }));
  };
  
  return (
    <div>
      <h2>User:</h2>
      <input
        onChange={(e) => setInput(e.target.value)}
        placeholder="enter a new name"
      />
      <button onClick={changeUser}>Change username</button>
      <span>Username is: {user.name}</span>
      <span>Profile picture is: {user.images[1]}</span>
    </div>
  );
}

export default App;
