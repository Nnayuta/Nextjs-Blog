import Router from "next/router";
import { parseCookies, setCookie } from 'nookies';
import { createContext, useEffect, useState } from "react";
import { User } from "../models/User";
import { recoveryUserByToken } from "../providers/user-Provider";

export const AuthContext = createContext({} as AuthContextType);

interface UserLogin {
    email: string;
    password: string;
}

interface AuthContextType {
    isAuthenticated: boolean;
    user: User | null;
    signIn: (user: User) => Promise<void>;
}
export function AuthProvider({ children }: { children: React.ReactNode }) {
    const [user, setUser] = useState<User | null>(null)

    const isAuthenticated = !!user;

    useEffect(() => {
        const { 'blog-token': token } = parseCookies();

        const user = recoveryUserByToken(token)

        if (user) {
            setUser(user)
        }

    }, [])

    async function signIn({ email, password }: UserLogin) {

        try {

            const credentials = Buffer.from(`${email}:${password}`).toString('base64');
            const auth = { Authorization: `Basic ${credentials}` };

            const data = await fetch(`/api/login`, {
                method: 'POST',
                headers: {
                    ...auth,
                }
            }).then(res => res.json());

            console.log(data)

            if (data) {
                setUser(data.user);
                setCookie(null, 'blog-token', data.token, {
                    maxAge: 60 * 5, // 5 minutes
                    path: '/'
                })
                Router.push('/')
            }

        } catch (error) {
            throw error;
        }
    }

    return (
        <AuthContext.Provider value={{ user, isAuthenticated, signIn }}>
            {children}
        </AuthContext.Provider>
    )
}