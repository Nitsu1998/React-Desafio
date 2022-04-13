import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { context } from "../context/UserContext";

export default function SignIn() {
  const { signIn, forgotPassword } = useContext(context);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  
  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  const login = (e) => {
    e.preventDefault();
    signIn(email, password);
  };

  const forgot = () => {
    forgotPassword(email)
  };

  return (
      <div className="signContainer">
        <h2>Account Login</h2>
        <form onSubmit={login}>
          <div>
            <label>Email:</label>
            <input
              type="email"
              onChange={handleEmail}
              placeholder="rick&morty@email.com"
              value={email}
              required
            />
          </div>
          <div>
            <label>Password:</label>
            <input
              type="password"
              onChange={handlePassword}
              placeholder="*********"
              value={password}
              required
            />
            <p onClick={() => forgot()}>Forgot your password?</p>
          </div>
          <div>
            <button type="submit">Login</button>
            <p><Link to="/SignUp">Dont have an account?</Link></p>
          </div>
        </form>
      </div>
  );
}
