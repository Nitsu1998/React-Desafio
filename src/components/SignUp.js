import { useState } from "react";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { context } from "../context/UserContext";

export default function SignUp() {
  const { signUp } = useContext(context);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleName = (e) => {
    setName(e.target.value);
  };

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleConfirmPassword = (e) => {
    setConfirmPassword(e.target.value);
  };

  const registration = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      return toast.error("Passwords do not match", { autoClose: 2000 });
    } else {
      signUp(name, email, password);
    }
  };

  return (
    <div className="signContainer">
      <h2>Account Registration</h2>
      <form onSubmit={registration}>
        <div>
          <label>Name:</label>
          <input
            type="text"
            placeholder="Rick Sanchez"
            onChange={handleName}
            value={name}
            required
          />
        </div>
        <div>
          <label>Email:</label>
          <input
            type="email"
            placeholder="rick&morty@email.com"
            onChange={handleEmail}
            value={email}
            required
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            placeholder="*********"
            onChange={handlePassword}
            value={password}
            required
          />
        </div>
        <div>
          <label>Confirm Password:</label>
          <input
            type="password"
            placeholder="*********"
            onChange={handleConfirmPassword}
            value={confirmPassword}
            required
          />
        </div>
        <div>
          <button type="submit">Register</button>
          <p>
            <Link to="/SignIn">Already have an account?</Link>
          </p>
        </div>
      </form>
    </div>
  );
}
