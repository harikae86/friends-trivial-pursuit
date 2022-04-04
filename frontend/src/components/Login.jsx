import React from "react";

const Login = () => {
  return (
    <>
      <form>
        <label htmlFor="email">Email</label>
        <input type="email" />
        <label htmlFor="password">Password</label>
        <input type="password" />
        <button>Login</button>
      </form>
    </>
  );
};

export default Login;
