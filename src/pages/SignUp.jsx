import React from 'react';
import { Link } from 'react-router-dom';

function SignUp() {
  return (
    <>
      <h1>Registreren</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur atque consectetur, dolore eaque eligendi
        harum, numquam, placeat quisquam repellat rerum suscipit ullam vitae. A ab ad assumenda, consequuntur deserunt
        doloremque ea eveniet facere fuga illum in numquam quia reiciendis rem sequi tenetur veniam?</p>
      <form>
          <label htmlFor="input-email-signup">
              Email:
              <input type="text" id="input email signup" name="email signup"/>
          </label>
          <label htmlFor="input-password-signup">
              Wachtwoord:
              <input type="text" id="input-password-signup" name="password signup"/>
          </label>
          <label htmlFor="input-username">
              Gebruikersnaam:
              <input type="text" id="input username" name="username"/>
          </label>
      </form>
      <p>Heb je al een account? Je kunt je <Link to="/signin">hier</Link> inloggen.</p>
    </>
  );
}

export default SignUp;