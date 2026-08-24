function Footer() {
    return (
        <div className="flex gap-6 mt-14 pt-6 border-t border-line text-xs text-text-4">
            <a href="https://github.com/Aaron-Wang4932/" target="_blank" rel="noopener noreferrer" className="transition hover:underline hover:text-highlight">github</a>
            <span className="text-text-2">·</span>
            <a href="mailto:aaronh.wang@mail.utoronto.ca" className="transition hover:underline hover:text-highlight">email</a>
            <span className="text-text-2">·</span>
            <a href="https://www.linkedin.com/in/aaron-wang-046529318/" target="_blank" rel="noopener noreferrer" className="transition hover:underline hover:text-highlight">linkedin</a>
            <span className="text-text-2">·</span>
            <a href="https://discordapp.com/users/645301647278604298" target="_blank" rel="noopener noreferrer" className="transition hover:underline hover:text-highlight">discord</a>
        </div>
    );
}

export default Footer;