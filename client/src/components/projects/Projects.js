import React, { Fragment, useContext, useEffect } from 'react'
import ProjectItem from './ProjectItem';
import ProjectContext from '../../context/project/projectContext';
import Spinner from '../layouts/Spinner';
import AuthContext from '../../context/auth/authContext';
import ProjectForm from './ProjectForm';


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

        return (
            <Fragment>
            {user !== null && !loading && user.usertype === "1" ? <ProjectForm /> : null}
            <h4 className="mt-4 ml-2">No projects listed</h4>
            </Fragment>
        )
    }

    return (
        <Fragment>
            {user !== null && !loading && user.usertype === "1" ? <ProjectForm /> : null}
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
