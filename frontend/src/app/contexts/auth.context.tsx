"use client";
import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useReducer,
  useState,
  ReactNode,
} from "react";

interface AuthState {
  isAuthenticated: boolean;
  user: {
    id: number | null;
    name: string | null;
    email: string | null;
    role: "admin" | "nurse" | "doctor" | null;
    verified: boolean | null;
    userProfile: object | null;
  } | null;
  isLoading: boolean;
}

type AuthAction =
  | { type: "LOGIN"; 
      payload: {
        id: number;
        name: string | null;
        email: string | null;
        role: "admin" | "nurse" | "doctor" | null;
        verified: boolean | null;
        userProfile: object;
      } 
    }
  | { type: "LOGOUT" }
  | { type: "SET_LOADING"; payload: boolean };

const initialState: AuthState = {
  isAuthenticated: false,
  user: {
    id: null,
    name: null,
    email: null,
    role: null,
    verified: null,
    userProfile: null
  },
  isLoading: false,
};

const authReducer = (state: AuthState, action: AuthAction): AuthState => {
  switch (action.type) {
    case "LOGIN":
      return {  
        isAuthenticated: true, 
        user: action.payload,
        isLoading: false
      };
    case "LOGOUT":
      return { 
        isAuthenticated: false, 
        user: null,
        isLoading: false
      };
      case "SET_LOADING":
        return { 
          ...state, 
          isLoading: action.payload 
      };
      default:
        return state;
  }
};

const AuthContext = createContext<{
  state: AuthState;
  dispatch: React.Dispatch<AuthAction>;
} | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(authReducer, initialState);
  const [isLoaded, setIsLoaded] = useState(false); // Track client-side loading

  useEffect(() => {
    const storedState = localStorage.getItem("authState");
    if (storedState) {
      const parsedState = JSON.parse(storedState);
      dispatch({ type: "LOGIN", payload: parsedState.user });
    }
    setIsLoaded(true); 
  }, []);

  useEffect(() => {
    if (isLoaded) {
      const stateToStore = {
        isAuthenticated: state.isAuthenticated,
        user: state.user,
      };
      localStorage.setItem("authState", JSON.stringify(stateToStore));
      // sync with cookie for middleware
      document.cookie = `authState=${JSON.stringify(stateToStore)}; path=/; max-age=604800`; // 7 days
    }
  }, [state.isAuthenticated, state.user, isLoaded]);

  const contextValue = useMemo(() => ({ state, dispatch }), [state]);
  
  if (!isLoaded) {
    return <div>Loading...</div>;
  }

  return (
    <AuthContext.Provider value={contextValue}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }

  return context;
}