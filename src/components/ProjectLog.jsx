import {projects} from "../data/projects.js";
import ProjectCard from "./ProjectCard";

function ProjectLog() {
    return (
        <>
            <div className="inline-block bg-base/70 border border-line rounded-md px-3 py-1 text-xs text-text-2 tracking-wide mb-5">// cool stuff</div>
            <div className="flex flex-col gap-3.5">
                {
                    projects.map((project) => (
                        <ProjectCard key={project.id} {...project} />
                    ))
                }
            </div>
        </>
    );
}
export default ProjectLog;