import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { User } from "./client";
import * as client from "./client";
export default function Signin() {
  const [credentials, setCredentials] = useState<User>({ _id: "",
    username: "", password: "", firstName: "", lastName: "", role: "USER"
  });
  const navigate = useNavigate();
  const signin = async () => {
    await client.signin(credentials);
    navigate("/Kanbas/Account/Profile");
  };
  return (
    <div className="row">
      <div className="col-3"></div>
      <div className="col-4">
      <h1>Sign In</h1>
      <input className="form-control" value={credentials.username} onChange={(e) =>
        setCredentials({ ...credentials, username: e.target.value })}/>
      <input type="password" className="form-control" value={credentials.password} onChange={(e) =>
        setCredentials({ ...credentials, password: e.target.value })}/>
      <button className="btn btn-primary" onClick={signin}> Sign in </button>
      <button className="btn btn-success" onClick={()=>navigate("/Kanbas/Account/Signup")}>Sign Up</button>
      </div>
      <div className="col-5"></div>
    </div>
  );
}
