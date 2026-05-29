import {
  createContext,
  useEffect,
  useState,
} from "react";

import { loginUser } from "../api/auth";

export const AuthContext =
  createContext();

export const AuthProvider = ({
  children,
}) => {
  const [user, setUser] =
    useState(null);

  const [loading, setLoading] =
    useState(true);

  useEffect(() => {
    const storedUser =
      localStorage.getItem("user");

    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }

    setLoading(false);
  }, []);

  const login = async (data) => {
    const response =
      await loginUser(data);

    localStorage.setItem(
      "access",
      response.access
    );

    localStorage.setItem(
      "refresh",
      response.refresh
    );

    localStorage.setItem(
      "user",
      JSON.stringify(response.user)
    );

    setUser(response.user);

    return response.user;
  };

  const logout = () => {
    localStorage.removeItem(
      "access"
    );

    localStorage.removeItem(
      "refresh"
    );

    localStorage.removeItem(
      "user"
    );

    setUser(null);
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        setUser,
        loading,
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};