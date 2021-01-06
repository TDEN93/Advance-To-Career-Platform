import React, { useContext } from 'react';
import ShowMoreText from 'react-show-more-text';
import { Link } from 'react-router-dom'
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
            <button className="btn btn-success project-options btn-sm px-3 py-1">Apply</button>
            {/* Add apply function to onclick that checks if the user is already applied to the job or not. Change apply to leave if already applied */}
        </p>
    )

    const isAuthAndOwner = (
        <p className="d-flex justify-content-end">
            {/* Make sure current user is owner of project */}
            <button className="btn btn-dark project-options mr-2" onClick={() => setCurrent(project)}>Edit</button>
            <button className="btn btn-danger project-options" onClick={onDelete}>Delete</button>
        </p>
    )


    if(user.usertype === "1" && postedBy === user._id) {
        console.log(date);
        let fetchedDate = new Date(date);
        let convert = fetchedDate.getMonth() + 2 + "/";
        convert += fetchedDate.getDate() + 1 + "/";
        convert += fetchedDate.getFullYear();
        const convertedDate = convert;

        console.log(convertedDate);
        return (
        <div className='projects-section'>
            <div className='card rounded-0 col-md-12'>
                <div className="px-0 pt-3">
                    <div className="row">
                        <div className="col-8 col-md-9 d-flex px-0">
                            <h5 className='text-left font-weight-bold'>{title}{' '}</h5>
                        </div>
                        <div className="col px-0">
                          <span style={{ float: 'right'}} className={'badge py-1 px-2 ' + (active === 'active' ? 'badge-success' : 'badge-secondary')}>{active.charAt(0).toUpperCase() + active.slice(1)}</span>
                        </div>
                    </div>
                    <p className="pt-2 text-muted">Posted on {convertedDate}</p>
                    <ShowMoreText className="w-75">{desc}{desc}</ShowMoreText>
                    <div className="row pt-3">
                        <div className="col-8 col-md-9 d-flex px-0">
                            <small>Current Applicants: Less than 5</small>
                        </div>
                        <div className="col px-0">
                             {isAuthAndOwner}
                        </div>
                    </div>
                </div>
            </div>
        </div>
        )
    } else {
        return (
            <div className='projects-section'>
                <div className='card rounded-0 col-md-12'>
                    <div className="px-0 pt-3">
                        <div className="row d-flex">
                            <div className="col-8 d-flex px-0 ">
                                <h5 className='text-left font-weight-bold'>{title}{' '}</h5>
                            </div>
                            <div className="col-3 d-flex justify-content-sm-center justify-content-md-end">
                                <i class="far fa-bookmark pt-1"></i>
                            </div>
                            <div className="col-1 px-0 ml-auto">
                              <span style={{ float: 'right'}} className={'badge py-2 px-2 ' + (active === 'active' ? 'badge-success' : 'badge-secondary')}>{active.charAt(0).toUpperCase() + active.slice(1)}</span>
                            </div>
                        </div>
                        <p className="pt-2 text-muted">Posted on {date}</p>
                        <ShowMoreText className="w-75">{desc}{desc}</ShowMoreText>
                        <div className="row pt-3">
                            <div className="col-8 col-md-9 d-flex px-0">
                                <small>Current Applicants: Less than 5</small>
                            </div>
                            <div className="col px-0">
                                { isAuthAndStudentAndMentor }
                            </div>
                        </div>
                    </div>
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
