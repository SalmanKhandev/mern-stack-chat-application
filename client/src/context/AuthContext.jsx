import React, { Children, createContext,useCallback,useEffect,useState } from "react";
import { baseUrl, postRequest } from "../utils/services";

export const AuthContext = React.createContext();

export const AuthContextProvider = ({children})=>{
    const [user,setUser] = useState(null);
    const [registerError,setRegisterError] = useState(null);
    const [isRegisterLoading,setIsRegisterLoading] = useState(false);
    const [loginError,setLoginError] = useState(null);
    const [isLoginLoading,setIsLoginLoading] = useState(false);
    const [registerInfo,setRegisterInfo] = useState({
        name:"",
        email:"",
        password:""
    });
    const [loginInfo,setLoginInfo] = useState({
        email:"",
        password:""
    });
    
    console.log(loginInfo);

    console.log(user);

    useEffect(()=>{
      const getUser = localStorage.getItem("user");
      setUser(JSON.parse(getUser));
    },[]);

    const updateRegisterInfo = useCallback((info)=>{
       setRegisterInfo(info);
    },[]);

    const updateLoginInfo = useCallback((info)=>{
        setLoginInfo(info);
     },[]);
 
    const registerUser = useCallback(async(e)=>{
        e.preventDefault();

        setIsRegisterLoading(true);
        setRegisterError(null);
        const response =  await postRequest(`${baseUrl}/users/register`,JSON.stringify(registerInfo));

        if(response.error){ 
            return setRegisterError(response);
        }
        setIsRegisterLoading(false);

        localStorage.setItem("user",JSON.stringify(response));
        setUser(response);
    },[registerInfo]);


    const logoutUser = useCallback(async(e)=>{
        localStorage.removeItem("user");
        setUser(null); 
    },[]);

    const loginUser = useCallback(async (e)=>{
        e.preventDefault();
        setIsLoginLoading(true);
        setLoginError(null);
        console.log(loginInfo);
        const response =  await postRequest(`${baseUrl}/users/login`,JSON.stringify(loginInfo));
        console.log(response);
        
        if(response.error){ 
            return setLoginError(response);
        }
        setIsLoginLoading(false);

        localStorage.setItem("user",JSON.stringify(response))
        setUser(response);
    },[loginInfo]);



    return (
        <AuthContext.Provider value={{user,registerInfo,updateRegisterInfo,registerUser,registerError,isRegisterLoading,logoutUser,updateLoginInfo,loginError,isLoginLoading,loginInfo,loginUser}}>
            {children}
        </AuthContext.Provider>
    )
}