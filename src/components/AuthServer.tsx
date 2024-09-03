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
  const access_token = localStorage.getItem("id_token");
  console.log("tokenn", access_token);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const config = {
          headers: {
            Authorization: `Bearer ${access_token}`,
          },
        };
        const response = await axios.get(
          "http://localhost:8084/authServer/authServerList",
          config
        );
        const data = response.data;
        setData(data);
        setLoading(false);
      } catch (error: any) {
        setError(error.message);
        setLoading(false);
        setLoading(false);
      }
    };
    fetchData();
  }, [access_token]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }
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
