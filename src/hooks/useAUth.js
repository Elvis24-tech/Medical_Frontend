import api from "../api/axios";

export const useAuth = () => {
  const login = async (data) => {
    const res = await api.post("auth/login/", data);
    if (res.data.access) {
      localStorage.setItem("access", res.data.access);
    }
    localStorage.setItem("user", JSON.stringify(res.data.user));

    return res.data;
  };

  const logout = () => {
    localStorage.removeItem("access");
    localStorage.removeItem("user");
  };

  return { login, logout };
};