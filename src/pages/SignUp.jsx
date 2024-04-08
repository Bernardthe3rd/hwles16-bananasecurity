import React, {useState} from 'react';
import {Link, useNavigate} from 'react-router-dom';
import axios from "axios";

function SignUp() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");

    const navigate = useNavigate();

    async function handleRegister (e) {
        e.preventDefault();
        try {
            const response = await axios.post("http://localhost:3000/register", {
                email,
                password,
                username,
            })
            console.log("de gebruiker is succesvol geregistreerd!")
        } catch (e) {
            console.error(e)
        }
        navigate("/signin")
    }

  return (
    <>
      <h1>Registreren</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur atque consectetur, dolore eaque eligendi
        harum, numquam, placeat quisquam repellat rerum suscipit ullam vitae. A ab ad assumenda, consequuntur deserunt
        doloremque ea eveniet facere fuga illum in numquam quia reiciendis rem sequi tenetur veniam?</p>
      <form onSubmit={handleRegister}>
          <label htmlFor="input-email-signup">
              Email:
              <input type="text" id="input email signup" name="email signup" onChange={(e) => setEmail(e.target.value)}/>
          </label>
          <label htmlFor="input-password-signup">
              Wachtwoord:
              <input type="password" id="input-password-signup" name="password signup" onChange={(e) => {setPassword(e.target.value)}}/>
          </label>
          <label htmlFor="input-username">
              Gebruikersnaam:
              <input type="text" id="input username" name="username" onChange={(e) => {setUsername(e.target.value)}}/>
          </label>
          <button type="submit">Registreer</button>
      </form>
      <p>Heb je al een account? Je kunt je <Link to="/signin">hier</Link> inloggen.</p>
    </>
  );
}

export default SignUp;