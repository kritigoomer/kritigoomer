const Navbar = () => {

    const navLinks = [
        {name: "experience", link: "#"},
        {name: "projects", link: "#"},
    ]

    return (
        <nav className="fixed flex align-center justify-center items-center hover:scale-[1.1] transition-transform">
            <h1 className="font-heading text-4xl hover:text-amber-300 transition-colors">kg</h1>
            <div className="font-body flex gap-6 text-xl">
                {navLinks.map((link) => (
                    <a key = {link.name}
                    href={link.link} className="transition-transform hover:scale-[1.1] dark:hover:text-violet-300 hover:text-violet-800">
                        <text>{link.name}</text>
                    </a>

                ))}
            </div>
        </nav>
    );
}

export default Navbar;