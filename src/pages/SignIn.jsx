import React, {useContext, useState} from 'react';
import { Link } from 'react-router-dom';
import {AuthContext} from "../context/AuthContext";
import axios from "axios";

function SignIn() {
    const {login} = useContext(AuthContext)
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    async function handleLogin (f) {
        f.preventDefault();
        const controller = new AbortController();
        try {
            const response = await axios.post("http://localhost:3000/login", {
                email,
                password, //hello12345
            }, {
                signal: controller.signal
            })

            console.log("Gebruiker is succesvol ingelogd!")
            login(response.data.accessToken)
        } catch (e) {
            console.error(e)
        }
        return function cleanup() {
            controller.abort();
        }
    }

  return (
    <>
      <h1>Inloggen</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab alias cum debitis dolor dolore fuga id molestias qui quo unde?</p>

      <form onSubmit={handleLogin}>
          <label htmlFor="input-email">
              Email:
              <input type="text" id="input-email-signin" name="email" onChange={(e) => {setEmail(e.target.value)}}/>
          </label>
          <label htmlFor="input-password">
              Wachtwoord:
              <input type="password" id="input password signin" name="password" onChange={(e) => {setPassword(e.target.value)}}/>
          </label>
        <button type="submit">Inloggen</button>
      </form>

      <p>Heb je nog geen account? <Link to="/signup">Registreer</Link> je dan eerst.</p>
    </>
  );
}

export default SignIn;