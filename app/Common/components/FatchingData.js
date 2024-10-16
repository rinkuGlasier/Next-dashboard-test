// components/ClientSideContent.js
import { useState, useEffect } from "react";

const ClientSideContent = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    // Simulate fetching data
    const fetchData = async () => {
      const response = await fetch("/api/data");
      const result = await response.json()
      setData(result);
    };

    fetchData();
  }, []);

  return (
    <div>
      <h2>Client-Side Dynamic Content</h2>
      <ul>
      {data.length > 0 ? (
        data.map(( item, index) => 
        <li key={index} >{item}</li>
      )) : (
        <p>not product found</p>
      ) }
      </ul>
    </div>
  );
};

export default ClientSideContent;
