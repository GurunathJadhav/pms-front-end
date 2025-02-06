
import Login from './components/login-component/Login';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import HrDashboard from './components/hr/HrDashboard';
import EmployeeDashboard from './components/employee/EmployeeDashboard';
import ManagerDashboard from './components/manager/dashboard/ManagerDashboard';
import Registration from './components/registration/Registration';




function App() {
  return (
    <div className="App">
       <Router>
        <Routes>
          <Route exact path="/" element={<Login/>} />
          <Route exact path="/manager-dashboard" element={<ManagerDashboard/>} />
          <Route exact path="/hr-dashboard" element={<HrDashboard/>} />
          <Route exact path="/employee-dashboard" element={<EmployeeDashboard/>} />
          <Route exact path="/signup" element={<Registration/>} />
          
          
          
          
          

        </Routes>
      
      </Router>
      
      
    </div>
  );
}

export default App;
