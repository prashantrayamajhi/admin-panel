import React, { useState } from "react";
import Axios from "../../api/server";
import { useNavigate } from "react-router-dom";
import Loader from "../Loader/Loader";
import "./Login.scss";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [err, setErr] = useState("");

  const navigate = useNavigate();

  const onFormSubmit = async (e) => {
    setIsLoading(true);
    e.preventDefault();
    const data = { email, password };
    try {
      const res = await Axios.post("/api/v1/auth/login", data);
      if (res.status === 200) {
        localStorage.setItem("role", res.data.role);
        localStorage.setItem("accessToken", res.data.accessToken);
        localStorage.setItem("email", res.data.email);
        localStorage.setItem("id", res.data.id);
        localStorage.setItem("firstname", res.data.firstname);
        localStorage.setItem("lastname", res.data.lastname);
        navigate("/");
      }
    } catch (err) {
      setIsLoading(false);
      setErr(err.response.data.err);
    }
  };

  const handleInputChange = (setState, value) => {
    setState(value);
  };

  const displayBtn = () => {
    if (isLoading) {
      return <Loader />;
    } else {
      return <button type="submit">Login</button>;
    }
  };
  return (
    <>
      <div className="login-wrapper">
        <h2>Admin Login</h2>
        <form onSubmit={onFormSubmit}>
          {err && (
            <div className="err-wrapper">
              <p>{err}</p>
            </div>
          )}
          <div className="input-wrapper">
            <label htmlFor="email">Email Address</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => {
                handleInputChange(setEmail, e.target.value);
              }}
            />
          </div>
          <div className="input-wrapper">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => {
                handleInputChange(setPassword, e.target.value);
              }}
            />
          </div>
          {displayBtn()}
        </form>
      </div>
    </>
  );
};

export default Login;
