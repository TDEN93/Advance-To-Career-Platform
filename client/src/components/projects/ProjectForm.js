import React, { useState, useContext, useEffect } from 'react'
import ProjectContext from '../../context/project/projectContext';

const ProjectForm = () => {
    const projectContext = useContext(ProjectContext);

    const { addProject, updateProject, clearCurrent, current } = projectContext;

    useEffect(() => {
        if(current !== null) {
            setProject(current);
        } else {
            setProject({
                title: '',
                desc: '',
                active: 'active'
            });
        }
    }, [projectContext, current]);

    const [project, setProject] = useState({
        title: '',
        desc: '',
        active: 'active'
    });

    const { title, desc, active } = project;

    const onChange = e => setProject({ ...project, [e.target.name]: e.target.value });

    const onSubmit = e => {
        e.preventDefault();
        if(current === null) {
            addProject(project);
        } else {
            updateProject(project);
        };
        // projectContext.addProject(project);
        setProject({
            title: '',
            desc: '',
            active: 'active'
        });
    };

    const clearAll = () => {
        clearCurrent();
    }

    return (

        <form onSubmit={onSubmit}>
            <h2 className="text-primary">{current ? 'Edit Project' : 'Add Project'}</h2>
            <div className="form-row ">
                <div className="form-group col-md-4">
                    <label htmlFor="text">Title</label>
                    <input className="form-control" type='text' name='title' value={title} onChange={onChange} required />
                </div>
                <div className="form-group col-md-4">
                    <label htmlFor="text">Description</label>
                    <input className="form-control" type='text' name='desc' value={desc} onChange={onChange} required />
                </div>
                <div className="form-group col-md-4">
                    <label htmlFor="text">Active</label>
                    <input className="form-control" type='text' name='active' value={active} onChange={onChange} required />
                </div>

            </div>
            {/* <input type="text" placeholder="title" name="title" value={title} onChange={onChange}></input>
            <input type="text" placeholder="desc" name="desc" value={desc} onChange={onChange}></input>
            <input type="text" placeholder="active" name="active" value={active} onChange={onChange}></input> */}

            <div>
                <input type="submit" value={current ? 'Update Project' : 'Add Project'} className="btn btn-primary btn-block"></input>
            </div>
            {current && (
                <div>
                    <button className='btn btn-light btn-block' onClick={clearAll}>
                        Clear
                    </button>
                </div>
            )}
        </form>
    )
}

export default ProjectForm
