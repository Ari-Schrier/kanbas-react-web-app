import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import * as client from "./client";
export default function Signup() {
  const [error, setError] = useState("");
  const [user, setUser] = useState({ username: "", password: "" });
  const navigate = useNavigate();
  const signup = async () => {
    try {
      await client.signup(user);
      navigate("/Kanbas/Account/Profile");
    } catch (err:any) {
      setError(err.response.data.message);
    }
  };
  return (
    <div className="row justify-content-center">
    <div className="col-3" />
    <div className="col-6">
      <h1>Signup</h1><br />
      {error && <div>{error}</div>}
      <input className="form-control" value={user.username} onChange={(e) => setUser({
          ...user, username: e.target.value })} /> <br />
      <input type="password" className="form-control" value={user.password} onChange={(e) => setUser({
          ...user, password: e.target.value })} /> <br />
      <button className="btn btn-success" onClick={signup}> Signup </button>
      </div>
      <div className="col-3" />
    </div>
  );
}
