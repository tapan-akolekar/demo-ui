import React, { useState, useEffect } from "react";
import axios from "axios";
import Card from "./Card/Card";

interface DataType {
  id: number;
  name: string;
  audience: string;
  issuerUri: string;
  status: string;
}

const AuthServer = () => {
  const [data, setData] = useState<DataType[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "http://localhost:8084/authServer/authServerList"
        );
        const data = response.data;
        setData(data);
        setLoading(false);
      } catch (error: any) {
        setError(error);
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  // console.log("Data", data);
  console.log("Hello!");
  console.warn("Careful there!");
  console.error("Oh, no!");

  return (
    <div>
      <Card>
        <br></br>
        <br></br>
        <br></br>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Audience</th>
              <th>IssueURL</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item) => (
              <tr key={item.id}>
                <td>{item.name}</td>
                <td>{item.audience}</td>
                <td>{item.issuerUri}</td>
                <td>{item.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
      </Card>
    </div>
  );
};

export default AuthServer;
