function Navbar() {
    const handleClick = () => {
      alert("nothing here yet :3");
    };
    return(
        <div className="flex justify-between items-baseline text-sm text-text-4">
            <span className="text-accent">~/thunderborb.</span>
            <div className="flex gap-3">
                <span onClick={handleClick} className="cursor-pointer transition hover:underline hover:text-highlight">home</span>
                <span className="text-text-2">·</span>
                <span onClick={handleClick} className="cursor-pointer transition hover:underline hover:text-highlight">about</span>
                <span className="text-text-2">·</span>
                <span onClick={handleClick} className="cursor-pointer transition hover:underline hover:text-highlight">skills</span>
                <span className="text-text-2">·</span>
                <span onClick={handleClick} className="cursor-pointer transition hover:underline hover:text-highlight">contact</span>
            </div>
        </div>
    );
}

export default Navbar;