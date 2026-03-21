import Navbar from "../components/Navbar"
import HeroCard from "../components/HeroCard"
import Footer from "../components/Footer"

export default function Home() {
  return (
    <main className="flex items-center flex-col">
      <Navbar/>
      <HeroCard/>
      <Footer/>
    </main>
  );
}