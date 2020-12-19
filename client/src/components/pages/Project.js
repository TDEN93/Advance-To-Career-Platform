import React, { useContext, useEffect } from 'react'
import Projects from '../projects/Projects';
import ProjectForm from '../projects/ProjectForm';
import ProjectFilter from '../projects/ProjectFilter';
import AuthContext from '../../context/auth/authContext';

const Project = () => {
    return (
        <div>
            <div className="grid-2 container mb-4">
                <div className="mt-3">
                    <ProjectFilter />
                    <Projects />
                </div>
            </div>
        </div>
    )
}

export default Project
