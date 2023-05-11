import React, { createContext, useContext, useState } from 'react'

const AuthContext = createContext(null)

export const getLocalStorage = () => {
  const localStorageAuth = localStorage.getItem('react-router-dom-tut-auth')
  if(!localStorageAuth) return {token: undefined, id: null}
  return JSON.parse(localStorageAuth)

}

const AuthContextProvider = ({children}) => {
  const {token: tokenLS, id: idLS} = getLocalStorage()
  
  const [token, setToken] = useState(tokenLS)
  const [id, setId] = useState(idLS)
  return (
    <AuthContext.Provider value={{token, setToken, id, setId}}>
      {children}
    </AuthContext.Provider>
  )
}

export const useGlobalAuth = () => {
  return useContext(AuthContext)
} 

export default AuthContextProvider
