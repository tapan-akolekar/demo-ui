import { useState, useEffect } from "react";
import axios from "axios";
import { DataGrid } from "@mui/x-data-grid";
import Card from "./Card/Card";
import "../App.css";
interface DataType {
  id: number;
  name: string;
  audience: string;
  issuerUri: string;
  status: string;
}

const columns = [
  { field: "name", headerName: "Name", width: 150 },
  { field: "audience", headerName: "Audience", width: 150 },
  { field: "issuerUri", headerName: "IssueURL", width: 200 },
  { field: "status", headerName: "Status", width: 100 },
];

const AuthServer = () => {
  const [data, setData] = useState<DataType[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const access_token = localStorage.getItem("id_token");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const config = {
          headers: {
            Authorization: `Bearer ${access_token}`,
          },
        };
        const response = await axios.get(
          "http://localhost:8080/authServer/authServerList",
          config
        );
        const data = response.data;
        setData(data);
        setLoading(false);
      } catch (error: any) {
        setError(error.message);
        setLoading(false);
      }
    };
    fetchData();
  }, [access_token]);

  if (loading) {
    return (
      <div className="loader-container">
        <div className="loader"></div>
      </div>
    );
  }

  if (error) {
    return <div>Error: {error}</div>;
  }
  const getRowId = (row: any) => row.name;
  return (
    <div className="auth">
      <Card>
        <div
          style={{
            height: 400,
            width: "97%",
            paddingLeft: "28px",
            paddingTop: "45px",
          }}
        >
          <DataGrid
            rows={data}
            columns={columns}
            getRowId={getRowId}
            checkboxSelection
          />{" "}
        </div>
      </Card>
    </div>
  );
};

export default AuthServer;
