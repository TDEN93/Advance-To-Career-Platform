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
        <p className="d-flex justify-content-end">
            <button className="btn btn-success btn-sm px-3 py-1">Apply</button>
            {/* Add apply function to onclick that checks if the user is already applied to the job or not. Change apply to leave if already applied */}
        </p>
    )

    const isAuthAndOwner = (
        <p className="d-flex justify-content-end">
            {/* Make sure current user is owner of project */}
            <button className="btn btn-dark px-3 py-1 mr-2" onClick={() => setCurrent(project)}>Edit</button>
            <button className="btn btn-danger px-2 py-1" onClick={onDelete}>Delete</button>
        </p>
    )


    if(user.usertype === "1" && postedBy === user._id) {
        return (
        <div className='card bg-light col-md-12'>
            <div className="container pt-3">
                <h3 className='text-primary text-left'>
                    {title}{' '}<span style={{ float: 'right'}} className={'badge mt-1 py-2 ' + (active === 'active' ? 'badge-success' : 'badge-primary')}>{active.charAt(0).toUpperCase() + active.slice(1)}</span>
                </h3>
                <ul className="list ml-4">
                    {desc && (<li className="">
                        {desc}
                    </li>)}
                    {postedBy && (<li className="pt-3">
                        {postedBy}
                    </li>)}
                    {date && (<li className="pt-3">
                        {date}
                    </li>)}
                </ul>
                {isAuthAndOwner}
            </div>
        </div>
        )
    } else {
        return (
            <div className='card bg-light col-md-12'>
                <div className="container pt-3">
                    <h3 className='text-primary text-left'>
                        {title}{' '}<span style={{ float: 'right'}} className={'badge mt-1 py-2 ' + (active === 'active' ? 'badge-success' : 'badge-primary')}>{active.charAt(0).toUpperCase() + active.slice(1)}</span>
                    </h3>
                    <ul className="list ml-4">
                        {desc && (<li className="">
                            {desc}
                        </li>)}
                        {postedBy && (<li className="pt-3">
                            {postedBy}
                        </li>)}
                        {date && (<li className="pt-3">
                            {date}
                        </li>)}
                    </ul>
                    {isAuthAndStudentAndMentor}
                </div>
            </div>
            )
    }


    return (
        <div>

        </div>
    )
}

ProjectItem.propTypes = {
    project: PropTypes.object.isRequired,
    user: PropTypes.object.isRequired
}

export default ProjectItem
