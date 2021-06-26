import React, { createContext, ReactNode } from "react";
import { useState } from "react";
import { useContext } from "react";

import { CDN_IMAGE, CLIENT_ID, REDIRECT_URI, RESPONSE_TYPE, SCOPE } from '../config/discordAuth'

import * as AuthSession from 'expo-auth-session'
import { api } from "../services/api";

interface IAuthProvider {
  children: ReactNode;
}

interface IUser {
  id: string;
  email: string;
  username: string;
  avatar: string;
  token: string
}

interface IAuthContextData {
  user: IUser;
  signIn: () => Promise<void>;
  loading: boolean;
}

type IAuthorizationResponse = AuthSession.AuthSessionResult & {
  params: {
    access_token: string;
  }
}

const AuthContext = createContext({} as IAuthContextData)

export const AuthProvider = ({children}: IAuthProvider) => {
  const [user, setUser] = useState<IUser>({} as IUser)
  const [loading, setLoading] = useState<boolean>(false)

  async function signIn() {
    try {
      setLoading(true)
      const authUrl = `${api.defaults.baseURL}/oauth2/authorize?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}&scope=${SCOPE}`

      const { type, params } = await AuthSession.startAsync({ authUrl }) as IAuthorizationResponse

      //setando o token n cabeçalho da requisição
      if (type === 'success') {
        api.defaults.headers.authorization = `Bearer ${params.access_token}`
        
        const userInfo = await api.get('/users/@me')

        setUser({
          id: userInfo.data.id,
          email: userInfo.data.email,
          username: userInfo.data.username.split(" ")[0],
          avatar: `${CDN_IMAGE}/avatars/${userInfo.data.id}/${userInfo.data.avatar}.png`,
          token: params.access_token
        })
        setLoading(false)
      } else {
        setLoading(false)
      }      
    } catch (error) {
      setLoading(false)
      throw new Error(error.message);
    }
  }

  return (
    <AuthContext.Provider value={{user, signIn, loading}}>
      { children }
    </AuthContext.Provider>
  )
}

export const useAuth = () => {
  const context = useContext(AuthContext)

  return context
}