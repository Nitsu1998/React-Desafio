import { useContext } from "react";
import { context } from "../context/UserContext";

export default function User() {
  const { user, deleteAccount } = useContext(context);

  return (
    <>
      {user?.displayName !== undefined ? (
        <div className="createdAccount">
          <h2>Account Information</h2>
          <p>Name: {user.displayName}</p>
          <p>Email: {user.email}</p>
          <p>Account created: {user.metadata.creationTime}</p>
          <button onClick={deleteAccount}>Delete Account</button>
        </div>
      ) : null}
    </>
  );
}
