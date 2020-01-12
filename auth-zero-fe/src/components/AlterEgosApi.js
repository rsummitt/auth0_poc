
// src/components/AlterEgos.js

import React, { useState } from "react";
import { useAuth0 } from "../react-auth0-spa";

const AlterEgosApi = () => {
  const [showResult, setShowResult] = useState(false);
  const [apiMessage, setApiMessage] = useState("");
  const { getTokenSilently } = useAuth0();

  const callApi = async () => {
    try {
      const token = await getTokenSilently();

      const response = await fetch("/api/alter-egos", {
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
      <h1>Alter Egos</h1>
      <button onClick={callApi}>Get Alter Egos</button>
      <div>
        {showResult && <code>{JSON.stringify(apiMessage, null, 2)}</code>}
      </div>
    </>
  );
};

export default AlterEgosApi;