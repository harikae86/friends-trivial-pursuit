import { useState } from "react";
import { useNavigate } from "react-router-dom";
import UserForm from "./UserForm";

const signup = (email, password) => {
  let status = true;

  return fetch("/api/register", {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify({ email, password }),
  })
    .then((res) => {
      if (!res.ok) {
        status = false;
      }
      return res;
    })
    .then((res) => {
      return res.json();
    })
    .then((info) => {
      if (status) {
        return info;
      }
      throw info;
    });
};

const Registration = () => {
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSignUp = (email, password) => {
    setError(null);
    setLoading(true);
    signup(email, password)
      .then(() => {
        navigate("/");
      })
      .catch((err) => {
        setError(err);
        console.log(err);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <UserForm onSubmit={handleSignUp} loading={loading} header="Registration" />
  );
};

export default Registration;
