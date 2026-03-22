import { Analytics } from "@vercel/analytics/next"
import Navbar from "../components/Navbar"
import HeroCard from "../components/HeroCard"
import SongCard from "../components/SongCard"
import Footer from "../components/Footer"

export default function Home() {
  return (
    <main className="flex items-center flex-col">
      <Navbar/>
      <div className="w-screen h-screen items-center">
        <div className="relative flex flex-col">
          <SongCard/>
          <HeroCard/>
        </div>
      </div>
      <Footer/>
      <Analytics/>
    </main>
  );
}