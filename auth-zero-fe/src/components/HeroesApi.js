
// src/components/Heroes.js

import React, { useState } from "react";
import { useAuth0 } from "../react-auth0-spa";

const HeroesApi = () => {
  const [showResult, setShowResult] = useState(false);
  const [apiMessage, setApiMessage] = useState("");
  const { getTokenSilently } = useAuth0();

  const callApi = async () => {
    try {
      const token = await getTokenSilently();

      const response = await fetch("/api/heroes", {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });

      const responseData = await response.json();

      setShowResult(true);
      setApiMessage(responseData);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <h1>Heroes</h1>
      <button onClick={callApi}>Get Heroes</button>
      <div>
        {showResult && <code>{JSON.stringify(apiMessage, null, 2)}</code>}
      </div>
    </>
  );
};

export default HeroesApi;