import React, { useEffect, useState } from "react";
import axios from "axios";

export default function Categories() {
  const [categories, setCategories] = useState();
  const [underCategory, setUnderCategory] = useState();

  const fetchCategories = async () => {
    axios
      .get("/api/category")
      .then((r) => r.data)
      .then(setCategories);
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  return (
    <>
      <h1>Categories</h1>
      {categories && (
        <ul>
          {categories[0] &&
            categories[0].map((e) => (
              <li>
                {e}
                <button onClick={() => setUnderCategory(e)}>set</button>
              </li>
            ))}
        </ul>
      )}
      {underCategory && (
        <>
          <h3>{underCategory}</h3>
          <ul>
            {categories[1][underCategory].map((e) => (
              <li>{e}</li>
            ))}
          </ul>
        </>
      )}
    </>
  );
}
