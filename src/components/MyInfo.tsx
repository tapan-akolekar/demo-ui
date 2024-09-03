import React, { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import Card from "./Card/Card";
import { fetchUserInfo } from "../features/myInfo/myInfoSlice";

const MyInfo = () => {
  const dispatch = useAppDispatch();
  const { data, loading, error } = useAppSelector((state) => state.userinfo);

  console.log(data);

  useEffect(() => {
    dispatch(fetchUserInfo());
  }, [dispatch]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="home">
      <Card>
        {data && (
          <>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <table>
              <thead>
                <tr>
                  &nbsp; <th>Name</th>
                  <th>Sub</th>
                  <th>Email</th>
                  <th>Preferred_username</th>&nbsp; <th>LastName</th>
                  <th>FirstName</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  &nbsp;<td> {data.name}</td>
                  <td>{data.sub}</td>
                  <td>{data.email}</td>
                  <td>{data.preferred_username}</td>
                  <td>{data.lastName}</td>
                  <td>{data.firstName}</td>
                </tr>
              </tbody>
            </table>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
          </>
        )}
      </Card>
    </div>
  );
};

export default MyInfo;
