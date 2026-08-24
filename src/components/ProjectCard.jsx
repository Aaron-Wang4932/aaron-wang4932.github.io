function ProjectCard({status, date, title, description, url}) {
    const isDone = (status === "done :)");
    return (
        <a href={url} target="_blank" rel="noopener noreferrer">
            <div
                className="bg-base/70 border border-line rounded-md p-5 cursor-pointer transition duration-200 hover:-translate-y-1 hover:border-accent-dark hover:bg-card">
                <div className="flex gap-3 items-baseline mb-2 text-xs">
                <span className={isDone ? "text-done" : "text-wip"}>
                    [ {status} ]
                </span>
                    <span className="text-text-5 select-none">
                    {date}
                </span>
                </div>
                <div className="text-lg text-text-1 mb-1.5 transition hover:underline hover:text-highlight">
                    {title}
                </div>
                <div className="text-sm leading-relaxed text-text-2 max-w-lg">
                    {description}
                </div>
            </div>
        </a>
    )
}

export default ProjectCard;