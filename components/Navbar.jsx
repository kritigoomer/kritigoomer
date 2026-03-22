const Navbar = () => {

    const navLinks = [
        // {name: "experience", link: "#"},
        // {name: "projects", link: "#"},
    ]

    return (
        <div className="flex w-screen justify-items-start md:justify-center">
            <nav className="fixed flex align-center justify-center items-center mx-4 hover:scale-[1.1] transition-transform">
            <a href="#">
                <h1 className="font-heading text-3xl md:text-4xl hover:text-amber-300 hover:scale-[1.1] transition-all ease-in-out">kg</h1>
            </a>
            {/* <div className="font-body flex gap-6 text-xl">
                {navLinks.map((link) => (
                    <a key = {link.name}
                    href={link.link} className="transition-transform hover:scale-[1.1] dark:hover:text-violet-300 hover:text-violet-800">
                        <text>{link.name}</text>
                    </a>

                ))}
            </div> */}
        </nav>
        </div>
        
    );
}

export default Navbar;