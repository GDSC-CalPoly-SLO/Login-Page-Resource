import "./Login.css";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../firebaseAppInit.js";
import { useState } from "react";

export default function LoginPage({ setPage }) {
  const [email, setEmail] = useState("");
  const [pswd, setPassword] = useState("");
  const [name, setName] = useState("");
  const [signup, setSignUp] = useState(false);

  const handleSignIn = async () => {
    if (!signup) {
      try {
        await signInWithEmailAndPassword(auth, email, pswd);
        setPage("home");
      } catch (error) {
        alert(error);
      }
    } else {
      try {
        await createUserWithEmailAndPassword(auth, email, pswd);
        setPage("home");
      } catch {
        alert("Did not work");
      }
    }
  };

  return (
    <div className="LoginInForm">
      {signup ? <h1>Tasks Sign up</h1> : <h1>Tasks Login</h1>}
      {signup ? (
        <input
          onChange={(e) => {
            setName(e.target.value);
          }}
          className="Name"
          type="text"
          placeholder="Display Name"
        />
      ) : null}
      <input
        onChange={(e) => {
          console.log(e.target.value);
          setEmail(e.target.value);
        }}
        type="email"
        placeholder="Email"
        className="Email"
      />
      <input
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Password"
        type="password"
        className="pswd"
      />
      <button
        onClick={() => {
          handleSignIn();
        }}
        type="button"
        className="button"
      >
        Log Into Tasks
      </button>
      <div
        onClick={() => {
          setSignUp(true);
        }}
      >
        Click Me To Sign Up
      </div>
    </div>
  );
}
