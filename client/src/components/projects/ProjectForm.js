import React, { Fragment, useState, useContext, useEffect } from 'react'
import ProjectContext from '../../context/project/projectContext';
import AuthContext from '../../context/auth/authContext';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';


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

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <Fragment>
        <Button variant="primary" onClick={handleShow}>
              Create
            </Button>
      
            <Modal show={show} onHide={handleClose}>
                <form onSubmit={onSubmit}>

                <Modal.Header closeButton>
                    <Modal.Title>Create A Project</Modal.Title>
                </Modal.Header>
                <Modal.Body>
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
              </Modal.Body>
              <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                  Cancel
                </Button>
                <Button type="submit" variant="primary" onClick={handleClose}>
                  Create Project
                </Button>
              </Modal.Footer>
              </form>
            </Modal>
        {/* <form onSubmit={onSubmit}>
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
        </form> */}
        </Fragment>
    )
}

export default ProjectForm
