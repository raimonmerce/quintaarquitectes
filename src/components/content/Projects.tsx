import { ProjectManager } from "../../data/ProjectManager"
import ProjectThumbnail from "../common/ProjectThumbnail";
import "./Projects.css"

export default function Projects() {
    const projectManager = ProjectManager.getInstance();
    return (
        <>
            <p>Projects</p>
            <div className="project-grid">
                {(() => {
                    const projects = projectManager.getAllIDs();
                    return projects.map((item, num) => {
                        const projectItem = projectManager.getById(item);
                        if (!projectItem) return;
                        return (
                            <ProjectThumbnail key={num} project={projectItem} />
                        )
                    })
                })()}
            </div>
        </>
    )
}