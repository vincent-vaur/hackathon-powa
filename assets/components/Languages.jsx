import React, { useEffect, useState } from "react";
import axios from "axios";

export default function Languages() {
  const [languages, setLanguages] = useState();

  const fetchLanguages = () => {
    axios
      .get("/api/language")
      .then((r) => r.data)
      .then(setLanguages);
  };

  useEffect(() => {
    fetchLanguages();
  }, []);

  return (
    <>
      <h1>Languages</h1>
      {languages && (
        <ul>{languages[0] && languages[0].map((e) => <li>{e}</li>)}</ul>
      )}
    </>
  );
}
