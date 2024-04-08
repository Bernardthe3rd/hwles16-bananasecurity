import React, {useContext, useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
import {AuthContext} from "../context/AuthContext";
import axios from "axios";

function Profile() {
    const {isAuth, user} = useContext(AuthContext)
    const [privateContent, setPrivateContent] = useState({});

    useEffect(() => {
        const controller = new AbortController();
        async function getProfile() {
            try {
                const response = await axios.get("http://localhost:3000/660/private-content", {
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${localStorage.getItem("token")}`,
                    },
                    signal: controller.signal,
                })
                setPrivateContent(response.data)
            } catch (e) {
                console.error(e)
            }
        }
        void getProfile();

        return function cleanup() {
            controller.abort();
        }
    }, []);

    console.log(privateContent)

  return (
    <>
      <h1>Profielpagina</h1>
      <section>
        <h2>Gegevens</h2>
        <p><strong>Gebruikersnaam:</strong> {user.username}</p>
        <p><strong>Email:</strong> {user.email}</p>
      </section>
      <section>
        <h2>Strikt geheime profiel-content</h2>
          {isAuth === true ?
              <div>
                <h3>{privateContent.title}</h3>
                <p>{privateContent.content}</p>
              </div>:
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab alias cum debitis dolor dolore fuga id molestias qui quo unde?</p>
          }
      </section>
      <p>Terug naar de <Link to="/">Homepagina</Link></p>
    </>
  );
}

export default Profile;