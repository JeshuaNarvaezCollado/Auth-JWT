import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
import rigoImageUrl from "../../img/rigo-baby.jpg";
import { useHistory } from "react-router-dom";
import "../../styles/home.css";
import { Link } from "react-router-dom";
import { Router } from "@reach/router";

export const Login = () => {
  const { store, actions } = useContext(Context);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // LOG OUT !!
  const handleOut = () => {
    actions.signout();
  };

  // LOG IN !!
  console.log("this is your token", store.token);
  const handleClick = () => {
    actions.login(email, password).then();
  };
  return (
    <div className="text-center mt-5">
      <h1>Login</h1>
      {store.token && store.token !== "" && store.token !== undefined ? (
        <div>
          "You are logged in" + {store.token}
          <button className="btn btn-primary" onClick={handleOut}>
            SIGN OUT
          </button>
        </div>
      ) : (
        <div>
          <input
            type="text"
            placeholder="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button className="btn btn-primary" onClick={handleClick}>
            LOGIN
          </button>
        </div>
      )}
    </div>
  );
};