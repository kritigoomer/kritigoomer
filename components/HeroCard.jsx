export default function HeroCard() {
  const socialLinks = [
    {
      name: "spotify",
      src: "/spotify.png",
      link: "https://open.spotify.com/user/1nu4f4lvpd9n5t6o3l4qwhg2x?si=b5f61a5997f341cb",
    },
    {
      name: "instagram",
      src: "/instagram.webp",
      link: "https://www.instagram.com/kritigoomer/",
    },
    {
      name: "linkedin",
      src: "/linkedin.webp",
      link: "https://www.linkedin.com/in/kritigoomer/",
    },
    {
      name: "github",
      src: "/github.webp",
      link: "https://github.com/kritigoomer",
    },
    {
      name: "email",
      src: "/email.webp",
      link: "mailto:kritigoomer@gmail.com?subject=Hey Kriti!&body=Hi,\nI saw your portfolio and wanted to get in contact.",
    },
  ];

  const resume = { link: "/resume.pdf" };

  return (
    <div className="absolute w-screen flex items-center justify-center h-screen">
      <div
        className="flex flex-col md:flex-row justify-center items-center p-4 gap-4 h-hug md:h-59 mx-4 rounded-2xl 
                outline-1 outline-white/30 dark:outline-white/15 backdrop-blur-lg
                transition-transform dark:hover:shadow-2xl dark:hover:shadow-black/50
                hover:bg-white/5 hover:scale-[1.025] hover:shadow-2xl hover:shadow-black/20 
                hover:backdrop-blur-2xl hover: hover:outline-1 hover:outline-white/20"
      >
        <div className="flex aspect-square h-50 md:h-full rounded-xl outline-2 dark:outline-violet-300/50 outline-white/50">
          <img
            className="h-50 md:h-full rounded-xl"
            src="/headshot.jpg"
            alt="Kriti Goomer"
          />
        </div>
        <div className="flex flex-col h-full justify-between">
          <div className="flex flex-col justify-center">
            <h1 className="font-heading text-5xl md:text-6xl">hi, i am</h1>
            <h1 className="font-heading text-5xl md:text-6xl">Kriti Goomer</h1>
          </div>
          <div className="flex flex-col gap-4 pt-4 items-center md:items-start">
            <div className="flex gap-4">
              {" "}
              {/*social links incl. resume*/}
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.link}
                  className="flex relative transition-transform hover:scale-[1.15] items-center"
                >
                  <img
                    src={link.src}
                    alt={link.name}
                    className="w-6 aspect-square hover:shadow-black/30 dark:hover:shadow-black/50 hover:shadow-xl hover:backdrop-blur-xl "
                  />
                </a>
              ))}
            </div>
            <button className="hover:scale-[1.1] transition-transform">
              <a className="transition-colors" href={resume.link}>
                resume
              </a>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
