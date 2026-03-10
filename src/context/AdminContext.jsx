import { createContext, useState } from 'react';

export const AdminContext = createContext();

const AdminContextProvider = (props) => {
    const [aToken, setAtoken] = useState(
        localStorage.getItem('aToken') ? localStorage.setItem('aToken') : '',
    );
    const backendUrl = import.meta.env.VITE_BACKEND_URL;

    const values = { aToken, setAtoken, backendUrl };

    return (
        <AdminContext.Provider value={values}>
            {props.children}
        </AdminContext.Provider>
    );
};

export default AdminContextProvider;
