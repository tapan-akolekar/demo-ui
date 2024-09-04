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
    <div>
      <Card>
        {data && (
          <table className="mx-4">
            <thead className="mx-4">
              <tr className="mx-4">
                <th>Name</th>
                <th>Locale</th>
                <th>Email</th>
                <th>Username</th>
                <th>UserType</th>
                <th>UserID</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td> {data.name}</td>
                <td>{data.locale}</td>
                <td>{data.email}</td>
                <td>{data.preferred_username}</td>
                <td>{data.userType}</td>
                <td>{data.userID}</td>
              </tr>
            </tbody>
          </table>
        )}
      </Card>
    </div>
  );
};

export default MyInfo;
