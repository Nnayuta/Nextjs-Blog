import { createContext, useEffect, useState } from "react";
import { setCookie, parseCookies } from 'nookies'
import Router from "next/router";

import { UserModel } from "../models/user.model";

export const AuthContext = createContext({} as AuthContextType);

interface User {
    email: string;
    password: string;
}

interface AuthContextType {
    isAuthenticated: boolean;
    user: UserModel | null;
    signIn: (user: User) => Promise<void>;
}
export function AuthProvider({ children }: { children: React.ReactNode }) {
    const [user, setUser] = useState<UserModel | null>(null)

    const isAuthenticated = !!user;

    useEffect(() => {
        const { 'blog-token': token } = parseCookies();

        const user =
        {
            name: 'Nayuta',
            email: 'nayuta@email.com',
            avatar: 'https://github.com/Nnayuta.png',
        }


        if (token) {
            setUser(user)
        }

    }, [])

    async function signIn({ email, password }: User) {
        const user =
        {
            name: 'Nayuta',
            email: 'nayuta@email.com',
            avatar: 'https://github.com/Nnayuta.png',
        }

        const TOKEN = '123';

        if (TOKEN) {
            setCookie(null, 'blog-token', TOKEN, {
                maxAge: 60 * 60 * 1 // 1 hour,
            })
            setUser(user)
            Router.push('/')
        }
    }

    return (
        <AuthContext.Provider value={{ user, isAuthenticated, signIn }}>
            {children}
        </AuthContext.Provider>
    )
}