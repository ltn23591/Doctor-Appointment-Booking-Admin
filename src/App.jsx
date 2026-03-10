import React, { useContext } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import Login from './pages/Login.jsx';
import { AdminContext } from './context/AdminContext.jsx';
import Navbar from './components/Navbar.jsx';
const App = () => {
    const { aToken } = useContext(AdminContext);

    return aToken ? (
        <div className="bg-[#f8f9fd]">
            <ToastContainer />
            <Navbar />
        </div>
    ) : (
        <>
            <Login />
            <ToastContainer />
        </>
    );
};

export default App;
