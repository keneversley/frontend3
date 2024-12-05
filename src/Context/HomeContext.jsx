import React, { createContext } from "react";



export const HomeContext = createContext(null);

const HomeContextProvider = (props) => {

    const contextValue = {};

    return (
        <HomeContext.Provider value={contextValue}>
            {props.children}
        </HomeContext.Provider>
    )
}

export default HomeContextProvider;