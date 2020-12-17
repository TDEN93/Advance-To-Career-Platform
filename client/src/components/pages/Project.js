import React, { useContext, useEffect } from 'react'
import Projects from '../projects/Projects';
import ProjectForm from '../projects/ProjectForm';
import ProjectFilter from '../projects/ProjectFilter';
import AuthContext from '../../context/auth/authContext';

const Project = () => {
    const authContext = useContext(AuthContext);
    const { user } = authContext;

    useEffect(() => {
        authContext.loadUser();
        // eslint-disable-next-line
    }, []);

    if(authContext.loading !== true) {
        console.log(authContext.loading);
        return (
            <div className="grid-2 container mb-4">
                {user.usertype === "1" ? <ProjectForm /> : null}
            <div className="mt-3">
                <ProjectFilter />
                <Projects />
            </div>
        </div>
        )
    }

    return (
        <div>

        </div>
    )
}

export default Project
