import {createContext, useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";
import { jwtDecode } from "jwt-decode";
import axios from "axios";


export const AuthContext = createContext({})

function AuthContextProvider ({children}) {
    const [auth, setAuth] = useState({
        isAuth: false,
        user: null,
        status: "pending",
    })
    const navigate = useNavigate();

    useEffect(() => {
        const storedToken = localStorage.getItem("token");
        if (storedToken) {
            void login(storedToken);
        } else {
            void logout();
        }
    }, []);

    async function login (jwtToken) {
        const decodedToken = jwtDecode(jwtToken);
        localStorage.setItem("token", jwtToken);

        try {
            const response = await axios.get(`http://localhost:3000/600/users/${decodedToken.sub}`, {
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${jwtToken}`,
                }
            });
            setAuth({
                ...auth,
                isAuth: true,
                user: {
                    username: response.data.username,
                    email: response.data.email,
                    id: response.data.id,
                },
                status: "done"
            })

        } catch (e) {
            console.error(e)
        }

        console.log("gebruiker is ingelogd")
        navigate("/profile")
    }

    function logout () {
        setAuth({
            ...auth,
            isAuth: false,
            user: null,
            status: "done",
        })
        localStorage.clear();
        console.log("gebruiker is uitgelogd")
        navigate("/")
    }

    const data = {
        isAuth: auth.isAuth,
        user: auth.user,
        login,
        logout
    }

    return (
        <AuthContext.Provider value={data}>
            {auth.status === "done" ? children : <p>Loading...</p>}
        </AuthContext.Provider>
    )
}

export default AuthContextProvider