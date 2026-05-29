export const getAccessToken = () => {
    return localStorage.getItem(
      "access"
    );
  };
  
  export const getRefreshToken =
    () => {
      return localStorage.getItem(
        "refresh"
      );
    };
  
  export const clearTokens = () => {
    localStorage.removeItem(
      "access"
    );
  
    localStorage.removeItem(
      "refresh"
    );
  };

export const setToken = (token) => {
    localStorage.setItem("token", token);
  };
  
  export const getToken = () => {
    return localStorage.getItem("token");
  };
  
  export const removeToken = () => {
    localStorage.removeItem("token");
  };