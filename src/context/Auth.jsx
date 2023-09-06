import { createContext, useContext, useEffect, useState } from "react";

const AuthContext = createContext();

const AuthProvider = (props) => {
  const [auth, setAuth] = useState({
    user: null,
    authToken: "",
  });

  useEffect(() => {
    const userData = localStorage.getItem("auth");

    if (userData) {
      const data = JSON.parse(userData);

      setAuth({
        ...auth,
        user: data.user,
        authToken: data.authToken,
      });
    }
    //eslint-disable-next-line
  }, []);

  return (
    <AuthContext.Provider value={[auth, setAuth]}>
      {props.children}
    </AuthContext.Provider>
  );
};

const useAuth = () => useContext(AuthContext);

export { useAuth, AuthProvider };
