import {
  createContext,
  useContext,
  useState,
  useCallback,
  useMemo,
} from "react";
import { Navigate } from "react-router-dom";
import { AuthProps, AuthProviderProps } from "../type/Type";

const AuthContext = createContext<AuthProps | undefined>(undefined);

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);

  const login = useCallback(() => setIsAuthenticated(true), []);

  const logout = useCallback(() => setIsAuthenticated(false), []);

  const authContextValue = useMemo<AuthProps>(
    () => ({
      isAuthenticated,
      login,
      logout,
    }),
    [isAuthenticated, login, logout]
  );

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
