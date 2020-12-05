import React, { Fragment, useContext, useEffect } from 'react';
import AuthContext from '../../context/auth/authContext';



const Profiles = () => {

    const authContext = useContext(AuthContext);
    const { user } = authContext;

    useEffect(() => {
        authContext.loadUser();
        console.log(authContext.loading);
        // eslint-disable-next-line
    }, []);

    if(authContext.loading !== true) {
        return (
            <ul>
                <li>{user._id}</li>
                <li>{user.firstname}</li>
                <li>{user.lastname}</li>
                <li>{user.age}</li>
                <li>{user.gender}</li>
                <li>{user.email}</li>
                <li>{user.usertype}</li>
            </ul>
        )
    }
    return (
        <div>
            
        </div>
    )
}

export default Profiles
