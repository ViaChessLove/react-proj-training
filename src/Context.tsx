import React, { createContext, useState } from "react";

const initialState = {
        currentPage: 'home',
        setCurrentPage: (state: string) => {}
};
export const CurrentPage = createContext(initialState);

interface ContextProps {
        children?: React.ReactNode | JSX.Element | JSX.Element[];
}

const Context: React.FC<ContextProps> = ({children}) => {
        const [currentPage, setCurrentPage] = useState(initialState.currentPage);
        return (
                <CurrentPage.Provider value={{currentPage, setCurrentPage}}>
                        {children}
                </CurrentPage.Provider>
        );
}

export default Context;