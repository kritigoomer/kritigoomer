const Navbar = () => {

    const navLinks = [
        {name: "experience", link: "#"},
        {name: "projects", link: "#"},
    ]

    return (
        <nav className="align-center flex justify-center rounded-4xl items-center mt-6 gap-6
                        py-4 px-6 bg-white/10 w-fit border-1 border-violet-300 bg-blend-luminosity
                        shadow-olive-900">
            <h1 className="font-heading text-3xl hover:text-amber-300">Kriti Goomer</h1>
            <div className="font-body flex gap-6 text-xl">
                {navLinks.map((link) => (
                    <a key = {link.name}
                    href={link.link} className="hover:text-violet-400">
                        <text>{link.name}</text>
                    </a>

                ))}
            </div>
        </nav>
    );
}


// export default function Navbar() {
//     return (
//         <nav className="flex justify-between items-center p-4">
//             <h1 className="font-heading text-2xl">Kriti Goomer</h1>
//             <div className="font-body flex gap-6 text-xl">
//                 <a href="#">Home</a>
//                 <a href="#">About</a>
//             </div>
//         </nav>
//     );
// }

export default Navbar;