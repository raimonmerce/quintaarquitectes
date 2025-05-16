import { ProjectManager } from "../../data/ProjectManager"

export default function Projects() {
    const projectManager = ProjectManager.getInstance();
    return (
        <>
            <p>Projects</p>
            {(() => {
                const projects = projectManager.getAllIDs();
                return projects.map((item, num) => {
                    const projectItem = projectManager.getById(item);
                    if (!projectItem) return;
                    return (
                    <div>{projectItem.name}</div>
                )})
            })()}
        </>
    )
}