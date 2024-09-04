import React from "react";
import Card from "./Card/Card";

const Admin = () => {
  // const { getIdTokenClaims } = useAuth0();
  // const [roles, setRoles] = useState<string[]>([]);

  // useEffect(() => {
  //   getIdTokenClaims().then((claims) => {
  //     if (claims) {
  //       const roles = claims.autorization.authorization?.roles;
  //       setRoles(roles);
  //       console.log(roles);
  //     }
  //   });
  // }, [getIdTokenClaims]);

  return (
    <div>
      <Card>
        <h5>This is Admin page!</h5>
        <br></br>
      </Card>
    </div>
  );
};
export default Admin;
