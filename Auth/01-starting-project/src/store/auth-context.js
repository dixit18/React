import React, { useState } from "react";

let logoutTimer;

const AuthContext = React.createContext({
    token:'',
    isLoggedIn:false,
    login:(token)=>{},
    logout:()=>{}
})
const calculateRemainingTime = (expirationTime) =>{
    const currentTime = new Date().getTime()
    const adjExpirationTime = new Date(expirationTime).getTime();
    
    const remainingDuration = adjExpirationTime - currentTime;

    return remainingDuration
}

const retrivesStoredToken = ()=>{
    const storedToken = localStorage.getItem('token')
    const storedExpirationDate = localStorage.getItem('expirationTime');

    const remainingTime = calculateRemainingTime(storedExpirationDate)

    if(remainingTime <= 3600){
        
    }
}

export const AuthContextProvider = (props)=>{
   const initialToken = localStorage.getItem('token')
   const [token,setToken] = useState(initialToken)

   const userIsLoggedIn = !!token

   
   const logoutHandler = () =>{
       setToken(null)
       localStorage.removeItem('token')

       if(logoutHandler){
        clearTimeout(logoutHandler)
       }
    }
    const loginHandler = (token,expirationTime) => {
     setToken(token)
     localStorage.setItem('token',token)
     localStorage.setItem('expirationTime',expirationTime)
 
     const remainingTime = calculateRemainingTime(expirationTime)
 
     logoutTimer =  setTimeout(logoutHandler,remainingTime)
 
    }

   const contextValue ={
    token:token,
    isLoggedIn:userIsLoggedIn,
    login:loginHandler,
    logout:logoutHandler
   }
   return <AuthContext.Provider
   value={contextValue}>
        {props.children}
    </AuthContext.Provider>
}

export default AuthContext