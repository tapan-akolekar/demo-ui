import React, { useState } from "react";
import { fetchUserData } from "../features/application/applicationSlice";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import Card from "./Card/Card";

const Home = () => {
  const dispatch = useAppDispatch();
  const { data, loading, error } = useAppSelector((state) => state.user);
  const [showData, setShowData] = useState(false);

  const handleClick = () => {
    dispatch(fetchUserData());
    setShowData(true);
  };

  return (
    <div className="home">
      <Card>
        <button onClick={handleClick}>Search Data</button>
        {showData && data && (
          <table>
            <thead>
              <tr>
                <th>AppName</th>
                <th>Client/Okta ID</th>
                <th>Okta Domain</th>
                <th>Sign On Mode</th>
                <th>Status</th>
                <th>AppUrl</th>
              </tr>
            </thead>
            <tbody>
              {data.map((userData) => (
                <tr key={userData.id}>
                  <td>{userData.appName}</td>
                  <td>{userData.clientOrOktaId}</td>
                  <td>{userData.oktaDomain}</td>
                  <td>{userData.signOnMode}</td>
                  <td>{userData.status}</td>
                  <td>{userData.appUrl}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
        {loading && <div>Loading...</div>}
        {error && <div>Error: {error}</div>}
      </Card>
    </div>
  );
};
export default Home;
