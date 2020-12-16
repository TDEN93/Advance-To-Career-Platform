import React, { useContext } from 'react'
import PropTypes from 'prop-types';
import ProjectContext from '../../context/project/projectContext';


const ProjectItem = ({ project, user }) => {
    const projectContext = useContext(ProjectContext);


    const { deleteProject, setCurrent, clearCurrent } = projectContext;

    const { _id, title, desc, postedBy, date, active } = project;

    const onDelete = () => {
        deleteProject(_id);
        clearCurrent();
    }

    const isAuthAndStudentAndMentor = (
        <p>
            <button className="btn btn-success btn-sm">Apply</button>
            {/* Add apply function to onclick that checks if the user is already applied to the job or not. Change apply to leave if already applied */}
        </p>
    )

    const isAuthAndOwner = (
        <p>
            {/* Make sure current user is owner of project */}
            <button className="btn btn-dark btn-sm" onClick={() => setCurrent(project)}>Edit</button>
            <button className="btn btn-danger btn-sm" onClick={onDelete}>Delete</button>
        </p>
    )


    return (
        <div className='card bg-light col-md-12'>
            <div className="container">
                <h3 className='text-primary text-left'>
                    {title}{' '}<span style={{ float: 'right'}} className={'badge mt-1 ' + (active === 'active' ? 'badge-success' : 'badge-primary')}>{active.charAt(0).toUpperCase() + active.slice(1)}</span>
                </h3>
                <ul className="list ml-4">
                    {desc && (<li>
                        {desc}
                    </li>)}
                    {postedBy && (<li>
                        {postedBy}
                    </li>)}
                    {date && (<li>
                        {date}
                    </li>)}
                </ul>
                {/* Check if the current user is an project owner or a student */}
                    {user.usertype === "1" ? isAuthAndOwner : isAuthAndStudentAndMentor}
            </div>
        </div>
    )
}

ProjectItem.propTypes = {
    project: PropTypes.object.isRequired,
    user: PropTypes.object.isRequired
}

export default ProjectItem
