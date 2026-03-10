import React, { useContext } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import Login from './pages/Login.jsx';
import { AdminContext } from './context/AdminContext.jsx';
const App = () => {
    const { aToken } = useContext(AdminContext);

    return aToken ? (
        <div>
            <ToastContainer />
        </div>
    ) : (
        <>
            <Login />
            <ToastContainer />
        </>
    );
};

export default App;
