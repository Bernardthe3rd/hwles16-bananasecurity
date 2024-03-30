import {createContext, useState} from "react";
import {useNavigate} from "react-router-dom";

export const AuthContext = createContext({})

function AuthContextProvider ({children}) {
    const [isAuth, setIsAuth] = useState({
        isAuth: false,
        user: "",
    })
    const navigate = useNavigate();

    function login (email) {
        setIsAuth({
            isAuth: true,
            user: email,
        })
        console.log("gebruiker is ingelogd")
        navigate("/profile")
    }

    function logout () {
        setIsAuth({
            isAuth: false,
            user: "",
        })
        console.log("gebruiker is uitgelogd")
        navigate("/")
    }

    const data = {
        isAuth: isAuth.isAuth,
        user: isAuth.user,
        login,
        logout
    }

    return (
        <AuthContext.Provider value={data}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContextProvider