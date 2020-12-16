import React, { useContext, useEffect } from 'react'
import Projects from '../projects/Projects';
import ProjectForm from '../projects/ProjectForm';
import ProjectFilter from '../projects/ProjectFilter';


const Project = () => {
    return (
        <div className="grid-2 container mb-4">
            <div>
                <ProjectForm />
            </div>
            <div className="mt-3">
                <ProjectFilter />
                <Projects />
            </div>
        </div>
    )
}

export default Project
