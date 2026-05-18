import { Analytics } from "@vercel/analytics/next"
import Navbar from "../components/Navbar"
import HeroCard from "../components/HeroCard"
import Footer from "../components/Footer"


export default function Home() {
  return (
    <main className="relative z-0 flex items-center flex-col min-h-screen bg-violet-300 dark:bg-violet-600 transition-colors duration-300">
      {/* 2. ISOLATED BACKGROUND LAYER */}
      <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
        {/* The original black SVG file */}
        <div className="absolute inset-0 bg-[url('/bg.svg')] bg-cover bg-center bg-no-repeat blur-xs" />
        
        {/* The color overlay layer (Screen blends perfectly over pure black) */}
        <div 
          className="absolute inset-0 backdrop-blur-xs bg-violet-800 opacity-30 transition-colors duration-300"
          style={{ mixBlendMode: 'screen' }} 
        />
      </div>

      <Navbar/>
      <div className="min-h-screen flex items-center justify-center">
        <HeroCard />
      </div>
      <Footer/>
      <Analytics/>
    </main>
  );
}