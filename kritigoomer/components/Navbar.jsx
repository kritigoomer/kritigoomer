const Navbar = () => {

    const navLinks = [
        {name: "experience", link: "#"},
        {name: "projects", link: "#"},
    ]

    return (
        <nav className="fixed flex align-center justify-center">
            <h1 className="font-heading text-3xl hover:text-amber-300">Kriti Goomer</h1>
            <div className="font-body flex gap-6 text-xl">
                {navLinks.map((link) => (
                    <a key = {link.name}
                    href={link.link} className="dark:hover:text-violet-400 hover:text-violet-900">
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