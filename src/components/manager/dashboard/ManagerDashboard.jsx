import React, { useState, useEffect } from "react";
import { Chart, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";
import { Link } from "react-router-dom";
import { Users, NotebookPen, CheckCircle, Bell } from "lucide-react";
import axios from "axios";

import "./ManagerDashboard.css";
import logo from "../../../assets/images/nikithas-logo.png";
import profile from "../../../assets/images/profile1.jpg";

Chart.register(ArcElement, Tooltip, Legend);

const ManagerDashboard = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen((prevState) => !prevState);
  };

  const [managerData, setManagerData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:8080/api/v1/pms/manager/profile", {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        });
        setManagerData(response.data);
        // console.log(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const data = {
    labels: ["Completed", "Pending"],
    datasets: [
      {
        data: [50, 50],
        backgroundColor: ["#4CAF50", "#FF9800"],
        borderWidth: 1,
      },
    ],
  };

  return (
    <div className="dashboard-container">
      <button className="sidebar-toggle" onClick={toggleSidebar}>
        ☰
      </button>

      <div className={`sidebar ${sidebarOpen ? "open" : ""}`}>
        <div className="profile-container">
          <img src={profile} alt="Profile" className="profile-pic" />
          <h2>{managerData?.firstName || "First Name"} {managerData?.lastName || "Last Name"}</h2>
        </div>
        <ul>
          <li>
            <Link to="/manager-dashboard">Dashboard</Link>
          </li>
          <li>
            <Link to="#">My Team</Link>
          </li>
          <li>
            <Link to="/manager-profile">My Profile</Link>
          </li>
        </ul>
      </div>

      <div className="main-content">
        <div className="dashboard-header">
          <h1>Manager Dashboard</h1>
          <img src={logo} alt="Logo" className="dashboard-logo" />
          <div className="header-icons">
            <Bell className="notification-icon" />
            <button className="logout-btn">Logout</button>
          </div>
        </div>

        <div className="stats-container">
          <div className="stat-card">
            <Users className="stat-icon team-icon" />
            <div className="stat-text">
              <h2>Total Team Members</h2>
              <p>24</p>
            </div>
          </div>
          <div className="stat-card">
            <NotebookPen className="stat-icon pending-icon" />
            <div className="stat-text">
              <h2>Assessments Pending</h2>
              <p>18/24 (75%)</p>
            </div>
          </div>
          <div className="stat-card">
            <CheckCircle className="stat-icon complete-icon" />
            <div className="stat-text">
              <h2>Assessments Complete</h2>
              <p>20/24 (83%)</p>
            </div>
          </div>
        </div>

        <div className="chart-container">
          <h3 className="chart-title">Assessment Completion Status</h3>
          <div className="chart-wrapper">
            <Pie data={data} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ManagerDashboard;
