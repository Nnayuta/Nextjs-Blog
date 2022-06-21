import Router from "next/router";
import { parseCookies, setCookie } from 'nookies';
import { createContext, useEffect, useState } from "react";
import { IUserLogin } from "../interface/IUserLogin";
import { UserModel } from "../models/UserModel";
import { JWToken } from "../services/JWToken";

export const AuthContext = createContext({} as AuthContextType);
const jwt = new JWToken();

interface AuthContextType {
    isAuthenticated: boolean;
    user: UserModel | null;
    signIn: ({ username, password }: IUserLogin) => Promise<void>;
}

interface IAuthProviderProps {
    children: React.ReactNode;
}

export function AuthProvider({ children }: IAuthProviderProps) {
    const [user, setUser] = useState<UserModel | null>(null)

    const isAuthenticated = !!user;

    useEffect(() => {
        async function findUser() {
            const { 'blog-token': token } = parseCookies();

            if (token) {
                const userJWT = jwt.verify(token);
                if (userJWT) {
                    const data = await fetch(`/api/user/${userJWT.sub}`).then(res => res.json());
                    if (data) {
                        setUser(data);
                    }
                }
            }
        }

        findUser()
    }, [])

    async function signIn({ username, password }: IUserLogin) {
        try {
            const credentials = Buffer.from(`${username}:${password}`).toString('base64');
            const auth = { Authorization: `Basic ${credentials}` };

            const data = await fetch(`/api/login`, {
                method: 'POST',
                headers: {
                    ...auth,
                }
            }).then(res => res.json());

            if (data.token) {
                const tokenPayload = jwt.verify(data.token)

                if (typeof tokenPayload !== 'object' || !tokenPayload.sub) {
                    throw new Error('Invalid token');
                }

                const DToken = data.token as string;
                const DUser = tokenPayload.user as UserModel;

                setUser(DUser);
                setCookie(null, 'blog-token', DToken, {
                    maxAge: 30 * 24 * 60 * 60, // 30 days
                    path: '/'
                })
                Router.push('/')
            } else {
                return Promise.reject(data.message)
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