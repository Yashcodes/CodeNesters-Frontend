import { initializeApp } from "firebase/app";
import { createContext, useContext, useEffect, useState } from "react";
import { GoogleAuthProvider, getAuth, onAuthStateChanged, signInWithPopup } from "firebase/auth";
// import { useNavigate } from "react-router-dom";

const FirebaseContext = createContext();

const firebaseConfig = {
  apiKey: "AIzaSyC1iQSDobb2gv0l9215RsTnxFplzxNjv88",
  authDomain: "codenesters-d5a05.firebaseapp.com",
  projectId: "codenesters-d5a05",
  storageBucket: "codenesters-d5a05.appspot.com",
  messagingSenderId: "670910158363",
  appId: "1:670910158363:web:ae7c711ca5ad3f3e06cabe",
  measurementId: "G-62VW1GV2NB",
};

export const useFirebase = () => useContext(FirebaseContext);

//! Firebase Instances
const firebaseApp = initializeApp(firebaseConfig);
const firebaseAuth = getAuth(firebaseApp);
const provider = new GoogleAuthProvider();

export const FirebaseProvider = (props) => {
  const [user, setUser] = useState(null);

//   const navigate = useNavigate();

  //! Checking if user is created or not on Auth State Change
  useEffect(() => {
    onAuthStateChanged(firebaseAuth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser(null);
      }
    });
  }, []);

  //! Sign In with Google
  const signInWithGoogle = async () => {
    try {
      const response = await signInWithPopup(firebaseAuth, provider);
      return response.user
    } catch (error) {
      console.log(error);
    }
  };

  //! Checking if user exists or not
  const isLoggedIn = user ? true : false;

  return (
    <FirebaseContext.Provider value={{ signInWithGoogle, isLoggedIn }}>
      {props.children}
    </FirebaseContext.Provider>
  );
};
