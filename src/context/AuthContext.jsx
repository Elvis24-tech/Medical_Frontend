import { createContext, useState } from "react";
import { loginUser } from "../api/auth";

export const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);

  const login = async (email, password) => {
    const res = await loginUser({ email, password });

    setUser(res.data.user);
    localStorage.setItem("access", res.data.access);
    localStorage.setItem("refresh", res.data.refresh);
  };

  return (
    <AuthContext.Provider value={{ user, login }}>
      {children}
    </AuthContext.Provider>
  );
}