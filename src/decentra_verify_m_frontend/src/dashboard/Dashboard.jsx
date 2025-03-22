import { useEffect } from "react";
import Credentials from "../credentials/Credentials";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../auth/AuthContext";
import "./dashboard.css";

const Dashboard = () => {
  const { isAuthenticated, logout, actor } = useAuth();
  let navigate = useNavigate();

  useEffect(() => {
    if (!isAuthenticated) {
      navigate("/");
    }
  }, [isAuthenticated, navigate]);

  return (
    <div>
      <div className="dashboard-header">
        <div className="dashboard-nav">
          <h2>Dashboard</h2>
          <button onClick={logout}>Logout</button>
        </div>
        {isAuthenticated ? (
          <p>Welcome to the dashboard!</p>
        ) : (
          <p>Not logged in</p>
        )}
      </div>
      <div className="dashboard-items">
        <Credentials />
        {/* <Block />
        <ECDSASigning />
        <SchnorrSigning /> */}
      </div>
    </div>
  );
};

export default Dashboard;
