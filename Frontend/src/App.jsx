import axios from "axios";
import React, { useEffect, useState } from "react";

const App = () => {
  const [Resturants, setResturants] = useState([]);
  useEffect(() => {
    axios
      .get("/api/resturants")
      .then((response) => {
        setResturants(response.data);
      })
      .catch((error) => console.log(error));
  });
  return (
    <div>
      <h1>This is Resturants Frontend</h1>
      <p>Resturants: {Resturants.length}</p>
      {Resturants.map((resturants, index) => (
        <div key={resturants.id}>
          <h3>{resturants.name}</h3>
          <p>{resturants.location}</p>
        </div>
      ))}
    </div>
  );
};

export default App;
