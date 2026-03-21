export default function HeroCard() {
    const socialLinks = [
        {name: "spotify", src: "/spotify.svg", link: "https://open.spotify.com/user/1nu4f4lvpd9n5t6o3l4qwhg2x?si=b5f61a5997f341cb"},
        {name: "instagram", src: "/instagram.svg", link: "https://www.instagram.com/kritigoomer/"},
        {name: "linkedin", src: "/linkedin.svg", link: "https://www.linkedin.com/in/kritigoomer/"},
        {name: "github", src: "/github.svg", link: "https://github.com/kritigoomer"},
        {name: "email", src: "/email.svg", 
            link: "mailto:kritigoomer@gmail.com?subject=Hey Kriti!&body=Hi,\nI saw your portfolio and wanted to get in contact."},
    ]
    const resume = {link: "/resume.pdf"}
    return(
        <div className="flex items-center justify-center h-screen">
           <div className="flex gap-4 justify-center h-59 p-4 items-center rounded-2xl hover:bg-white/5">
                <div className="flex w-54 h-full rounded-xl outline-2 outline-violet-300">
                    <img className="w-full h-full object-cover rounded-xl transition-transform hover:scale-[1.05]" 
                        src="/KritiGoomer_Headshot.jpg" alt="Kriti Goomer"/>
                </div>
                <div className="flex flex-col h-full justify-between">
                    <div className="flex flex-col justify-center">
                        <h1 className="font-heading text-6xl">hi, i am</h1>
                        <h1 className="font-heading text-6xl">Kriti Goomer</h1>
                    </div>
                    <div className="flex flex-col gap-4">
                        <div className="flex gap-4">
                            {socialLinks.map((link) => (
                                <a 
                                key={link.name}
                                href={link.link}
                                className="flex transition-transform hover:scale-[1.15] items-center" 
                                >
                                    <img src={link.src} 
                                        alt={link.name}
                                    />
                                </a>
                            ))}
                        </div>
                        <button className="transition-transform hover:scale-[1.1]">
                            <a href={resume.link}>resume</a>
                        </button>
                    </div>
                </div>
           </div> 
       </div>
    );
}