import { Outlet } from "react-router-dom";
import RecruiterLogin from "../../pages/RecruiterLogin";

const CompanyProtectedRoute = () => {
  const token = localStorage.getItem("companyToken");

  if (!token) {
    return <RecruiterLogin />;
  }

  return <Outlet />;
};

export default CompanyProtectedRoute;
