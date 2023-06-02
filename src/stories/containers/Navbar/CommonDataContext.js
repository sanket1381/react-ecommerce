import React, { useState } from 'react'
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export const commonData = React.createContext()

const CommonData = ({ children }) => {
    const location = useLocation();
    const [commonData1, setCommonData1] = useState(
        {
            open: true
        }
    );
 
    return (
        <commonData.Provider value={[commonData1, setCommonData1]}>
            {children}
        </commonData.Provider>
    );
};

export default CommonData;
