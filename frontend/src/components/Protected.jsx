import React, { useEffect, useState } from "react";
import axios from "axios";

const Protected = ({ token }) => {
  const [fruits, setFruits] = useState([]);
  useEffect(() => {
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    const fetchData = async () => {
      await axios.get(`http://localhost:5000/documents`, config).then((res) => {
        setFruits(res.data);
      });
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
