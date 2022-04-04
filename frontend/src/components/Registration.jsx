import React from "react";

const Registration = () => {
  return (
    <form>
      <label htmlFor="email">Email</label>
      <input type="email" />
      <label htmlFor="password">Password</label>
      <input type="password" />
      <button>Register</button>
    </form>
  );
};

export default Registration;
