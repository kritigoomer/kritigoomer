export default function SongCard() {
    return (
        <div className="absolute flex p-3 gap-3 top-1 md:top-28 right-6 rounded-lg 
                        opacity-85 outline-[1px] outline-white/30 
                        dark:outline-white/10 text-shadow-black/50 text-shadow-xs
                        backdrop-blur-2xl ease-in-out bg-white/10">
            <div className="aspect-square w-10">
                <img src="/song.webp" className="w-full rounded-xs"/>
            </div>
            <div className="flex flex-col align-top">
                <h1 className="font-body leading-none text-md">chalo tumko lekar</h1>
                <h2 className="font-body text-xs">shreya ghoshal</h2>
                <div className="mt-1 w-full bg-gray-300 rounded-full h-0.5">
                    <div id="progress-bar-fill"
                        className="w-0 bg-indigo-500 h-0.5 rounded-full transition-all duration-100 ease-linear"
                    ></div>
                </div>
            </div>
            <div className="flex h-fill items-center justify-center">
                <img src="/play.svg" className="w-6" />
            </div>
        </div>
    );
}