import React, { useContext, useRef, useEffect } from 'react'
import ProjectContext from '../../context/project/projectContext';

const ProjectFilter = () => {
    const projectContext = useContext(ProjectContext);
    const text = useRef('');

    const { filterProjects, clearFilter, filtered } = projectContext;

    useEffect(() => {
        if(filtered === null) {
            text.current.value = '';
        }
    })

    const onChange = e => {
        if(text.current.value !== '') {
            filterProjects(e.target.value);
        } else {
            clearFilter();
        }
    }

    return (
        <form>
            <input className="form-control" ref={text} type="text" placeholder="filter contacts.." onChange={onChange}/>
        </form>
    )
}

export default ProjectFilter
