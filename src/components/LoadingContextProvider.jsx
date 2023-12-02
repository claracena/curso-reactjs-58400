import React, { useState, createContext } from 'react';
export const LoadingContext = createContext();

const LoadingContextProvider = (props) => {
    const [loading, setLoading] = useState({ loading: true });
    return <LoadingContext.Provider value={{ loading, setLoading }}>{props.children}</LoadingContext.Provider>;
};

export default LoadingContextProvider;
