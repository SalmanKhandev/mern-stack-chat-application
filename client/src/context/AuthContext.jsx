import React, { Children, createContext,useState } from "react";

export const AuthContext = React.createContext();


export const AuthContextProvider = ({children})=>{

    const [user,setUser] = useState({
        name:"Charles"
    });

    return (
        <AuthContext.Provider value={{user}}>
            {children}
        </AuthContext.Provider>
    )

}