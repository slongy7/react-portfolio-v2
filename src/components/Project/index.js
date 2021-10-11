import React from "react";
import projects from "../../projects.json";
import TechListItem from "../TechListItem";

function Project() {
    return projects.map((project, index) => {
        
        if (projects.indexOf(project) === 0 || projects.indexOf(project) %2 === 0 ) {
            return (
                <div key={index} className="row projectRow">
                    <div className="col-md-4">
                        <img src={project.image} alt={project.title} width="200px"></img>
                    </div>
                    <div className="col-md-8">
                        <h4 className="projectTitle">{project.title}</h4>
                        <p className="projectAbout">{project.about}</p>
                        <ul className="technologies">
                            {/* <TechListItem techItems={project.technologies}></TechListItem> */}
                        </ul>
                        <div className="row">
                            <button type="button" className="btn btn-info"><a className="repoLink" href={project.repo}>Repo</a></button>
                        </div>
                    </div>
                 
                </div>
            )
            
        } else {
            return (
                <div key= {index} className="row projectRow">
                    <div className="col-md-8">
                    <h4 className="projectTitle">{project.title}</h4>
                    <p className="projectAbout">{project.about}</p>
                    <ul className="technologies">
                        {/* <TechListItem techItems={project.technologies}></TechListItem> */}
                    </ul>
                        <div className="row">
                            <button type="button" className="btn btn-info"><a className="repoLink" href={project.repo}>Repo</a></button>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <img src={project.image} alt={project.title} width="200px"></img>
                    </div>
                </div>
            )
        }
    })
}

export default Project;