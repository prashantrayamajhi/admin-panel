import { Outlet, Navigate } from "react-router-dom";
import { checkJwtToken } from "../../helper/helper";

const PrivateRoute = () => {
  // remove the not operator from the checkJwtToken function to make the routes private
  return !checkJwtToken() ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRoute;
