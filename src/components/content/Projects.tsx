import { ProjectManager } from "../../data/ProjectManager"
import ProjectThumbnail from "../common/ProjectThumbnail";

export default function Projects() {
    const projectManager = ProjectManager.getInstance();
    return (
        <div className={""}>
            <p>Projects</p>
            <div className={""}>
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
        </div>
    )
}