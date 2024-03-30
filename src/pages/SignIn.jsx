import React, {useContext, useState} from 'react';
import { Link } from 'react-router-dom';
import {AuthContext} from "../context/AuthContext";

function SignIn() {
    const {login} = useContext(AuthContext)
    const [email, setEmail] = useState("")

    function handleLogin () {
        login(email)
    }

  return (
    <>
      <h1>Inloggen</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab alias cum debitis dolor dolore fuga id molestias qui quo unde?</p>

      <form>
          <label htmlFor="input-email">
              Email:
              <input type="text" id="input-email-signin" name="email" value={email} onChange={(e) => {setEmail(e.target.value)}}/>
          </label>
          <label htmlFor="input-password">
              Wachtwoord:
              <input type="text" id="input password signin" name="password"/>
          </label>
        <button type="submit" onClick={handleLogin}>Inloggen</button>
      </form>

      <p>Heb je nog geen account? <Link to="/signup">Registreer</Link> je dan eerst.</p>
    </>
  );
}

export default SignIn;