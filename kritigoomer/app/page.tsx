import Navbar from "../components/Navbar"
import HeroCard from "../components/HeroCard"

export default function Home() {
  return (
    <main className="flex items-center flex-col">
      <Navbar/>
      <HeroCard/>
    </main>
  );
}