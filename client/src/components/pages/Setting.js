import React, { useContext, useEffect } from 'react';
import AuthContext from '../../context/auth/authContext';
import Settings from '../settings/Settings';


const Setting = () => {

    const authContext = useContext(AuthContext);


    useEffect(() => {
        authContext.loadUser();
        // eslint-disable-next-line
    }, []); 

    return (
        <div>
            <Settings />
        </div>
    )
}

export default Setting
