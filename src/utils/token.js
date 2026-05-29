export const getToken = () => {
  return localStorage.getItem("access");
};

export const setToken = (token) => {
  localStorage.setItem("access", token);
};

export const clearToken = () => {
  localStorage.removeItem("access");
};