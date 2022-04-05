import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import UserForm from "../UserForm";
import { userContext } from "./UserContext";

const apiLogin = (email, password) => {
  return fetch("/api/login", {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify({ email, password }),
  }).then((res) => {
    if (res.ok) {
      return res.json();
    }
    throw new Error("Wrong credentials");
  });
};

const Login = () => {
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const { login } = useContext(userContext);
  const navigate = useNavigate();

  const handleLogin = (email, password) => {
    setError(null);
    setLoading(true);
    apiLogin(email, password)
      .then((user) => {
        login(user);
        navigate("/");
      })
      .catch((error) => {
        setError(error);
        console.log(error);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <>
      {error ? <p>{error.message ?? "Unkown error"}</p> : null}
      <UserForm onSubmit={handleLogin} loading={loading} header="Login" />
    </>
  );
};

export default Login;
