// import { useState } from "react";
// import { fetchUserData } from "../features/application/applicationSlice";
// import { useAppDispatch, useAppSelector } from "../app/hooks";
// import Card from "./Card/Card";

// const Home = () => {
//   const dispatch = useAppDispatch();
//   const { data, loading, error } = useAppSelector((state) => state.user);
//   const [showData, setShowData] = useState(false);

//   const handleClick = () => {
//     dispatch(fetchUserData());
//     setShowData(true);
//   };

//   return (
//     <div className="home">
//       <Card>
//         <button onClick={handleClick}>Search Data</button>
//         {showData && data && (
//           <table>
//             <thead>
//               <tr>
//                 <th>AppName</th>
//                 <th>Client/Okta ID</th>
//                 <th>Okta Domain</th>
//                 <th>Sign On Mode</th>
//                 <th>Status</th>
//                 <th>AppUrl</th>
//               </tr>
//             </thead>
//             <tbody>
//               {data.map((userData) => (
//                 <tr key={userData.id}>
//                   <td>{userData.appName}</td>
//                   <td>{userData.clientOrOktaId}</td>
//                   <td>{userData.oktaDomain}</td>
//                   <td>{userData.signOnMode}</td>
//                   <td>{userData.status}</td>
//                   <td>{userData.appUrl}</td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         )}
//         {loading && <div>Loading...</div>}
//         {error && <div>Error: {error}</div>}
//       </Card>
//     </div>
//   );
// };
// export default Home;

import { useState } from "react";
import { fetchUserData } from "../features/application/applicationSlice";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import Card from "./Card/Card";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { Button, TextField } from "@mui/material";
const Home = () => {
  const dispatch = useAppDispatch();
  const { data, loading, error } = useAppSelector((state) => state.user);
  const [showData, setShowData] = useState(false);

  const columns: GridColDef[] = [
    { field: "appName", headerName: "App Name" },
    { field: "clientOrOktaId", headerName: "Client/Okta ID" },
    { field: "oktaDomain", headerName: "Okta Domain" },
    { field: "signOnMode", headerName: "Sign On Mode" },
    { field: "status", headerName: "Status" },
    { field: "appUrl", headerName: "App URL" },
  ];

  const handleSearchClick = () => {
    dispatch(fetchUserData());
    setShowData(true);
  };
  const getRowId = (row: any) => row.appName;
  return (
    <div className="home">
      <Card>
        {" "}
        <TextField label="Search Term" className="m-2" />
        <Button className="m-3" variant="contained" onClick={handleSearchClick}>
          Search
        </Button>
        {showData && data && (
          <div style={{ height: 350, width: "97%", paddingLeft: "28px" }}>
            <DataGrid
              rows={data}
              columns={columns}
              checkboxSelection
              getRowId={getRowId}
            />
          </div>
        )}
        {loading && <div>Loading...</div>}
        {error && <div>Error: {error}</div>}
      </Card>
    </div>
  );
};
export default Home;
