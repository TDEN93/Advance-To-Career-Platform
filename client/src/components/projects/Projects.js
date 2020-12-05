import React, { Fragment, useContext, useEffect } from 'react'
import ProjectItem from './ProjectItem';
import ProjectContext from '../../context/project/projectContext';
import Spinner from '../layouts/Spinner';
import AuthContext from '../../context/auth/authContext';


const Projects = () => {
    const projectContext = useContext(ProjectContext);
    const authContext = useContext(AuthContext);

    const { user } = authContext;
    


    const { projects, filtered, getProjects, loading } = projectContext;

    useEffect(() => {
        authContext.loadUser();
        getProjects();
        // eslint-disable-next-line
    }, []);

    if(projects !== null && projects.length === 0 && !loading) {
        return <h4>No projects listed</h4>
    }

    return (
        <Fragment>
            {projects !== null && !loading ? (
                <Fragment>
                {filtered !== null ? filtered.map(project => (
                    <ProjectItem key={project._id} project={project} user={user}></ProjectItem>
                ))
                : projects.map(project => (
                    <ProjectItem key={project._id} project={project} user={user}></ProjectItem>
                ))}
            </Fragment>
            ) : <Spinner />}
        </Fragment>
    )
}

export default Projects

