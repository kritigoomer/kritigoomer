"use client";
import { useState, useRef, useEffect } from "react";


export default function SongCard() {
    const song = {name: "chalo tumko lekar", 
                singer: "shreya ghoshal",
                songUrl: "/chalotumkolekar.mp3"}

    const audioRef = useRef(null);
    const [isPlaying, setIsPlaying] = useState(false);

    // useEffect(() => {
    //     audioRef.current = new Audio(song.songUrl);
    // }, []);

    const togglePlayPause = () => {
        try {
            if (!audioRef.current) return;

            if (isPlaying) {
                audioRef.current.pause();
            } else {
                audioRef.current.play();
            }
            setIsPlaying(!isPlaying);
        } catch (error) {
            console.error("Playback failed: ", error);
        }
        
    }

    return (
        <div className="absolute flex p-3 gap-3 top-1 md:top-28 right-6 rounded-lg 
                        opacity-85 outline-[1px] outline-white/30 
                        text-shadow-black/50 text-shadow-xs
                        backdrop-blur-2xl bg-white/10">
            <audio ref={audioRef} src={song.songUrl} preload="metadata" />
            <div className="aspect-square w-10">
                <img src="/song.webp" className="w-full rounded-xs"/>
            </div>
            <div className="flex flex-col align-top">
                <h1 className="font-body leading-none text-md">{song.name}</h1>
                <h2 className="font-body text-xs">{song.singer}</h2>
                <div className="mt-1 w-full bg-gray-300 rounded-full h-0.5">
                    <div id="progress-bar-fill"
                        className="w-0 bg-indigo-500 h-0.5 rounded-full transition-all duration-100 ease-linear"
                    ></div>
                </div>
            </div>
            <div className="flex h-fill items-center justify-center"
                    onClick={togglePlayPause}>
                <img src={isPlaying ? "/pause.svg": "/play.svg"} className="w-6" />
            </div>
        </div>
    );
}