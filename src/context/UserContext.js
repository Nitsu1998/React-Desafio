import { createContext, useState } from "react";
import { auth } from "../firebase/Firebase";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, updateProfile, onAuthStateChanged, deleteUser, sendPasswordResetEmail } from "firebase/auth";
import { toast } from "react-toastify";
export const context = createContext();
const { Provider } = context;

export default function UserContextProvider({ children }) {
  const [user, setUser] = useState({});

  onAuthStateChanged(auth, (currentUser) => {
    setTimeout(() => {
      setUser(currentUser);
    }, 1000);
  });

  const signUp = (name, email, password) => {
    createUserWithEmailAndPassword(auth, email, password)
      .then(() => {
        setInfo(name);
      })
      .catch((error) => {
        if (error.code === "auth/email-already-in-use") {
          toast.error("Email already in use", { autoClose: 3000 });
        } else if (error.code === "auth/weak-password") {
          toast.error(
            "The password is very weak, it must have at least 6 characters",
            { autoClose: 3000 }
          );
        } else if (error.code === "auth/invalid-email") {
          toast.error("Invalid email", { autoClose: 3000 });
        } else {
          toast.error(error.code, { autoClose: 3000 });
        }
      });
  };

  const signIn = (email, password) => {
    signInWithEmailAndPassword(auth, email, password)
      .then(() => {
      })
      .catch((error) => {
        error.code === "auth/user-not-found"
          ? toast.error("User not found", { autoClose: 3000 })
          : toast.error("Incorrect password", { autoClose: 3000 });
      });
  };

  const logOut = () => {
    signOut(auth)
  };

  const setInfo = (name) => {
    updateProfile(auth.currentUser, {
      displayName: name,
    })
  };

  const deleteAccount = () => {
    deleteUser(auth.currentUser)
    .then(() => {
        toast.success("Account Deleted", { autoClose: 3000 });
      }).catch(() => {
        toast.error("Log back in to delete account", { autoClose: 3000 });
        logOut()
      });
  }

  const forgotPassword = (email) => {
    sendPasswordResetEmail(auth, email)
    .then( () => {
      toast.success(`An email was sent to ${email}`, { autoClose: 3000 });
    })
    .catch( () => {
      toast.error("User not found", { autoClose: 3000 });
    })
  }

  const UserContext = {
    signUp,
    signIn,
    logOut,
    setInfo,
    deleteAccount,
    forgotPassword,
    user,
  };

  return (
      <Provider value={UserContext}>{children}</Provider>
  );
}
