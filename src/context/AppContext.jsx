import { createContext } from 'react';
// eslint-disable-next-line react-refresh/only-export-components
export const AppContext = createContext();

const AppContextProvider = ( props ) => {
    const values = {};

    return (
        <AppContext.Provider value={values}>
            {props.children}
        </AppContext.Provider>
    );
};
export default AppContextProvider;
