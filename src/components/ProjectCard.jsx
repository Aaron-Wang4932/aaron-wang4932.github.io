function ProjectCard({status, date, title, description}) {
    const isShipped = (status === "shipped");
    return (
        <div className="bg-base/70 border border-line rounded-md p-5 cursor-pointer transition duration-200 hover:-translate-y-1 hover:border-accent-dark hover:bg-card">
            <div className="flex gap-3 items-baseline mb-2 text-xs">
                <span className={isShipped ? "text-shipped" : "text-wip"}>
                    [{status}]
                </span>
                <span className="text-text-5">
                    {date}
                </span>
            </div>
            <div className="text-lg text-text-1 mb-1.5">
                {title}
            </div>
            <div className="text-sm leading-relaxed text-text-2 max-w-lg">
                {description}
            </div>
        </div>
    )
}

export default ProjectCard;