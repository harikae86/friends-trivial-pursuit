import { useState } from "react";

const UserForm = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { header, loading, onSubmit } = props;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email || password) {
      return onSubmit(email, password);
    }
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  return (
    <div className="user-form">
      <h1>{header}</h1>
      <form className="form" onSubmit={handleSubmit}>
        <input
          type="email"
          className="input"
          placeholder="email"
          value={email}
          onChange={handleEmailChange}
          disabled={loading}
        />
        <input
          type="password"
          className="input"
          placeholder="password"
          value={password}
          onChange={handlePasswordChange}
          disabled={loading}
        />
        <div>
          <button type="submit" className="submit-btn" disabled={loading}>
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default UserForm;
