import { useState,useEffect,useContext,createContext, Children } from "react";

const AuthContext = createContext()
import axios from "axios";

const AuthProvider = ({children}) => {
    const [auth, setAuth] = useState({
        user: null,
        token: ""
    });

    
    useEffect(() => {
        const data = localStorage.getItem("auth");
        if (data) {
          const parseData = JSON.parse(data);
          setAuth({
            ...auth,
            user: parseData.user,
            token: parseData.token,
          });
          axios.defaults.headers.common['Authorization'] = auth?.token
        }
      }, []);

    return(
        <AuthContext.Provider value={[auth,setAuth]}>
            {children}
           
        </AuthContext.Provider>
    )
} 

const useAuth = () => useContext(AuthContext)
export {useAuth, AuthProvider}