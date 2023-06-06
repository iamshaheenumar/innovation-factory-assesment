import { SESSION_KEY } from "@/constants/common";
import { ReactNode, createContext, useContext, useEffect, useState } from "react";

interface AuthContextData {
    userEmail: string;
    setUserSession: (email: string) => void
}

interface AuthProviderProps {
    children: ReactNode
}

const AuthContext = createContext<AuthContextData | null>(null);

const AuthProvider = ({ children }: AuthProviderProps) => {
    const [userEmail, setUserEmail] = useState("");

    useEffect(() => {
        const session = sessionStorage.getItem(SESSION_KEY)
        if (session) setUserEmail(session)
    }, [])

    const setUserSession = (email: string) => {
        console.log("Set USR", email);

        sessionStorage.setItem(SESSION_KEY, email)
        setUserEmail(email)
    }

    return (
        <AuthContext.Provider value={{ userEmail, setUserSession }}>
            {children}
        </AuthContext.Provider>

    );
}

const useAuth = () => useContext(AuthContext);

export { AuthProvider, useAuth }
