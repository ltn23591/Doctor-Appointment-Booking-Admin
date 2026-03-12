import axios from 'axios';
import { createContext, useState } from 'react';
import { toast } from 'react-toastify';
// eslint-disable-next-line react-refresh/only-export-components
export const AdminContext = createContext();

const AdminContextProvider = (props) => {
    const [aToken, setAtoken] = useState(
        localStorage.getItem('aToken') ? localStorage.setItem('aToken') : '',
    );
    const [doctors, setDoctors] = useState([]);
    const backendUrl = import.meta.env.VITE_BACKEND_URL;

    const getAllDoctors = async () => {
        try {
            const {data} = await axios.post(
                backendUrl + '/api/admin/all-doctors',
                {},
                { headers: { aToken } },
            );
            if (data.success) {
                setDoctors(data.doctors);
                console.log('>>>>>Check doctor', data.doctors);
            } else {
                toast.error(data.message);
            }
        } catch (error) {
            toast.error(error.message);
            console.log(error);
        }
    };

    const values = { aToken, setAtoken, backendUrl, getAllDoctors, doctors };
    return (
        <AdminContext.Provider value={values}>
            {props.children}
        </AdminContext.Provider>
    );
};

export default AdminContextProvider;
