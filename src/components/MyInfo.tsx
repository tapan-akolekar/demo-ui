import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import Card from "./Card/Card";
import { fetchUserInfo } from "../features/myInfo/myInfoSlice";
import "./MyInfo.css";
const MyInfo = () => {
  const dispatch = useAppDispatch();
  const { data, loading, error } = useAppSelector((state) => state.userinfo);
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
          <div className="infodetail">
            <table className="myinfo">
              <thead>
                <tr>
                  <th>Name</th>
                  <td> {data.name}</td>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th>Sub</th>
                  <td>{data.sub}</td>
                </tr>
                <tr>
                  <th>Locale</th>
                  <td>{data.locale}</td>
                </tr>
                <tr>
                  <th>Email</th>
                  <td>{data.email}</td>
                </tr>
                <tr>
                  <th>Username</th>
                  <td>{data.preferred_username}</td>
                </tr>
                <tr>
                  <th>given_name</th>
                  <td>{data.given_name}</td>
                </tr>
                <tr>
                  <th>family_name</th>
                  <td>{data.family_name}</td>
                </tr>
                <tr>
                  <th>zoneinfo</th>
                  <td>{data.zoneinfo}</td>
                </tr>

                <tr>
                  <th>lastName</th>
                  <td>{data.lastName}</td>
                </tr>
                <tr>
                  <th>firstName</th>
                  <td>{data.firstName}</td>
                </tr>
                <tr>
                  <th>firstName</th>
                  <td>{data.lastName}</td>
                </tr>
                <tr>
                  <th>oktaSelfServiceToolPermissionGroups</th>
                  <td>{data.oktaSelfServiceToolPermissionGroups}</td>
                </tr>
                <tr>
                  <th>userType</th>
                  <td>{data.userType}</td>
                </tr>
                <tr>
                  <th>userID</th>
                  <td>{data.userID}</td>
                </tr>
                <tr>
                  <th>sstGSECGroups</th>
                  <td>{data.sstGSECGroups}</td>
                </tr>
              </tbody>
            </table>
          </div>
        )}
      </Card>
    </div>
  );
};

export default MyInfo;
