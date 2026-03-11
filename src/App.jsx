import React, { useContext } from 'react';
import { ToastContainer } from 'react-toastify';
import Login from './pages/Login.jsx';
import { AdminContext } from './context/AdminContext.jsx';
import Navbar from './components/Navbar.jsx';
import Sidebar from './components/Sidebar.jsx';
import { Route, Routes } from 'react-router-dom';
import Dashboard from './pages/Admin/Dashboard.jsx';
import AllApoinments from './pages/Admin/AllApoinments.jsx';
import AddDoctor from './pages/Admin/AddDoctor.jsx';
import DoctorsList from './pages/Admin/DoctorsList.jsx';
const App = () => {
    const { aToken } = useContext(AdminContext);

    return aToken ? (
        <div className="bg-[#f8f9fd]">
            <ToastContainer />
            <Navbar />
            <div className="flex items-start">
                <Sidebar />
                <Routes>
                    <Route path="/" element={<></>} />
                    <Route path="/admin-dashboard" element={<Dashboard />} />
                    <Route path="/all-appoinments" element={<AllApoinments/>} />
                    <Route path="/add-doctor" element={<AddDoctor/>} />
                    <Route path="/doctor-list" element={<DoctorsList/>} />
                </Routes>
            </div>
        </div>
    ) : (
        <>
            <Login />
            <ToastContainer />
        </>
    );
};

export default App;
