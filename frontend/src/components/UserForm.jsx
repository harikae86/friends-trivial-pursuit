import { useState } from "react";
import { Form, Input, InputWrapper, Button } from "./UserForm.styles";

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
    // <div className="user-form">
    <Form className="form" onSubmit={handleSubmit}>
      <h1>{header}</h1>
      <InputWrapper>
        <Input
          type="email"
          className="input"
          placeholder="email"
          value={email}
          onChange={handleEmailChange}
          disabled={loading}
        />
        <Input
          type="password"
          className="input"
          placeholder="password"
          value={password}
          onChange={handlePasswordChange}
          disabled={loading}
        />
        <Button type="submit" className="submit-btn" disabled={loading}>
          Submit
        </Button>
      </InputWrapper>
    </Form>
    // </div>
  );
};

export default UserForm;
