import { createContext } from 'react';
// eslint-disable-next-line react-refresh/only-export-components
export const DoctorContext = createContext();

const DoctorContextProvider = (props) => {
    const values = {};

    return (
        <DoctorContext.Provider value={values}>
            {props.children}
        </DoctorContext.Provider>
    );
};
export default DoctorContextProvider;
