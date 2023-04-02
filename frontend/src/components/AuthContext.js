import { createContext, useState } from "react";



const AuthContext = createContext();



export const AuthProvider = ({ children }) => {

  const [username, setUsername] = useState(localStorage.getItem("username") || "");
  const [password, setPassword] = useState(localStorage.getItem("password") || "");
  const logout = () => {
    
    setUsername(null);
    setPassword(null);
    

  };
  return (
    <AuthContext.Provider value={{ username, setUsername, password, setPassword, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;

