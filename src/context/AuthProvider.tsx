import { createContext, useContext, useState } from "react";
import { AuthProps, AuthProviderProps } from "../type/Type";

const AuthContext = createContext<AuthProps | undefined>(undefined);

export const AuthProvider = ({ children }: AuthProviderProps) => {

  

  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);

  const login = () => setIsAuthenticated(true);

  const logout = () => setIsAuthenticated(false);

  const authContextValue: AuthProps = {
    isAuthenticated,
    login,
    logout,
  };

  return (
    <AuthContext.Provider value={authContextValue}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("Error accessing auth context");
  }
  return context;
};
