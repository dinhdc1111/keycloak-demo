import React, { useEffect, useState } from "react";
import axios from "axios";

const Protected = () => {
  const [fruits, setFruits] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const data = await axios.get(`http://localhost:5000/documents`).then((res) => {
        return res.data;
      });
      setFruits(data);
    };
    fetchData();
  }, []);

  return (
    <div>
      {fruits?.map((fruit, index) => (
        <h2 key={index}>{fruit}</h2>
      ))}
    </div>
  );
};

export default Protected;
