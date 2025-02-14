import React, { useState } from "react";
import { Chart, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import "./ManagerDashboard.css";

Chart.register(ArcElement, Tooltip, Legend);

const ManagerDashboard = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const data = {
    labels: ["Completed", "Pending"],
    datasets: [
      {
        data: [75, 25],
        backgroundColor: ["#4CAF50", "#FF9800"],
        borderWidth: 1,
      },
    ],
  };

  return (
    <div className="dashboard-container">
      {/* Sidebar Toggle Button for Mobile */}
      <button className="sidebar-toggle" onClick={toggleSidebar}>
        ☰
      </button>

      {/* Sidebar */}
      <div className={`sidebar ${sidebarOpen ? "open" : ""}`}>
        <h2>Hi! Ravindra Kulkarni</h2>
        <ul>
          <li><a href="#">Dashboard</a></li>
          <li><a href="#">My Team</a></li>
          <li><a href="#">My Profile</a></li>
        </ul>
      </div>

      {/* Main Content */}
      <div className="main-content">
        <div className="dashboard-header">
          <h1>Dashboard</h1>
          <button className="logout-btn">Logout</button>
        </div>

        <div className="stats-container">
          <div className="stat-card">
            <h2>Total Team Members</h2>
            <p>24</p>
          </div>
          <div className="stat-card">
            <h2>Assessments Pending</h2>
            <p>18/24 (75%)</p>
          </div>
          <div className="stat-card">
            <h2>Assessments Complete</h2>
            <p>20/24 (83%)</p>
          </div>
        </div>

        {/* Chart Section */}
        <div className="chart-container">
          <h3 className="chart-title">Assessment Completion Status</h3>
          <div className="chart-wrapper">
            <Doughnut data={data} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ManagerDashboard;