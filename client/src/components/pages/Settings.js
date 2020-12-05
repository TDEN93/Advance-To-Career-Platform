import React, { useContext, useEffect } from 'react';
import AuthContext from '../../context/auth/authContext';



const Setting = () => {

    const authContext = useContext(AuthContext);


    useEffect(() => {
        authContext.loadUser();
        // eslint-disable-next-line
    }, []); 

    return (
        <div>
            <h1>Settings</h1>
        </div>
    )
}

export default Setting
