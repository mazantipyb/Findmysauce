import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import loginimage from "./assets/login.png";
import "./login.css";

const Login = ({ onLogin }) => {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onLogin(formData);
    navigate('/');
  };
  return (
    <div className="container">
      <div className="img-container">
        <img className="login-img" src={loginimage} alt="" />
      </div>
      <div className="form">
        <form onSubmit={handleSubmit}>
          <h2>Login</h2>
          <label htmlFor="">Username</label>
          <input
            type="text"
            placeholder="Enter your username"
            name="username"
            value={formData.username}
            onChange={handleChange}
            required
          />

          <label htmlFor="">Password</label>
          <input
            type="password"
            placeholder="Enter your password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />

          <button type="submit" className="login-btn">
            Login
          </button>
        </form>

        <p>
          Don&apos;t have an account? Sign up <Link to="/register">here</Link>
        </p>
      </div>
    </div>
  );
};

export default Login;