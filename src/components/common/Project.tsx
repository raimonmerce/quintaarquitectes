import { ProjectManager } from "../../data/ProjectManager"

type ProjectProps = {
    id: string;
}

export default function Project({id}: ProjectProps) {
    const projectManager = ProjectManager.getInstance();
    const project = projectManager.getById(id);
    if (!project) return;
    return (
        <div className={""}>
            <h1>{project.name}</h1>
            <h2>{project.location}</h2>
            <h2>{project.date}</h2>
            <h2>{project.type}</h2>
            <h2>{project.state}</h2>
            <p>{project.description}</p>
            <img src={project.thumbnail} alt="logo" className="header-logo"/>
        </div>
    )
}