import React, { useState } from "react";
import "./Team.css"; // Importing the CSS file
import { FaSearch } from "react-icons/fa";
import logo from '../../../assets/images/nikithas-logo.png';

const teamMembers = [
  { name: "Sarah Wilson", department: "Product Design", position: "Senior Designer", email: "sarah.w@company.com", image: "https://randomuser.me/api/portraits/women/1.jpg" },
  { name: "John Doe", department: "Engineering", position: "Software Engineer", email: "john.d@company.com", image: "https://randomuser.me/api/portraits/men/1.jpg" },
  { name: "Alex Johnson", department: "Marketing", position: "Content Strategist", email: "alex.j@company.com", image: "https://randomuser.me/api/portraits/men/2.jpg" },
  { name: "David Lee", department: "Sales", position: "Sales Director", email: "david.l@company.com", image: "https://randomuser.me/api/portraits/men/3.jpg" },
  { name: "Emily Brown", department: "HR", position: "HR Manager", email: "emily.b@company.com", image: "https://randomuser.me/api/portraits/women/2.jpg" },
  { name: "Robert Taylor", department: "Engineering", position: "DevOps Engineer", email: "robert.t@company.com", image: "https://randomuser.me/api/portraits/men/4.jpg" },
  { name: "Lisa Wang", department: "Product Design", position: "UI/UX Designer", email: "lisa.w@company.com", image: "https://randomuser.me/api/portraits/women/3.jpg" },
  { name: "James Wilson", department: "Marketing", position: "SEO Specialist", email: "james.w@company.com", image: "https://randomuser.me/api/portraits/men/5.jpg" },
  { name: "Maria Garcia", department: "Sales", position: "Account Manager", email: "maria.g@company.com", image: "https://randomuser.me/api/portraits/women/4.jpg" },
  { name: "Thomas Anderson", department: "Engineering", position: "Backend Developer", email: "thomas.a@company.com", image: "https://randomuser.me/api/portraits/men/6.jpg" },
  { name: "Maria Garcia", department: "Sales", position: "Account Manager", email: "maria.g@company.com", image: "https://randomuser.me/api/portraits/women/4.jpg" },
  { name: "Thomas Anderson", department: "Engineering", position: "Backend Developer", email: "thomas.a@company.com", image: "https://randomuser.me/api/portraits/men/6.jpg" },

];

export default function TeamPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const entriesPerPage = 10;

  const filteredTeam = teamMembers.filter(member =>
    member.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    member.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const totalPages = Math.ceil(filteredTeam.length / entriesPerPage);
  const startIndex = (currentPage - 1) * entriesPerPage;
  const currentEntries = filteredTeam.slice(startIndex, startIndex + entriesPerPage);

  const handlePageChange = (newPage) => {
    if (newPage > 0 && newPage <= totalPages) {
      setCurrentPage(newPage);
    }
  };

  return (
    <div className="team-container">
      <div className="content">
        <div className="header">
          <h1>My Team</h1>
          <div className="search-bar">
            <FaSearch className="search-icon" />
            <input
              type="text"
              placeholder="Search team members..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <img src={logo} alt="Company Logo" className="company-logo" />
        </div>

        <div className="table-container">
          <table className="team-table">
            <thead>
              <tr>
                <th>Name</th>
                <th>Department</th>
                <th>Position</th>
                <th>Email</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {currentEntries.map((member, index) => (
                <tr key={index}>
                  <td className="team-member">
                    <img src={member.image} alt={member.name} className="profile-pic" />
                    {member.name}
                  </td>
                  <td>{member.department}</td>
                  <td>{member.position}</td>
                  <td>{member.email}</td>
                  <td>
                    <button className="contact-button">Start PMS</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="pagination">
          <button onClick={() => handlePageChange(currentPage - 1)} disabled={currentPage === 1}>
            Prev
          </button>
          <span> Page {currentPage} of {totalPages} </span>
          <button onClick={() => handlePageChange(currentPage + 1)} disabled={currentPage === totalPages}>
            Next
          </button>
        </div>
      </div>
    </div>
  );
}
