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