import { sampleMovies } from "@/config/mock";
import { Header, HeroSlider, StreamVibeApp } from "../components/sections/AbouSection";

export default function page() {
  return (
    <div className="">
      <Header />
      <HeroSlider movies={sampleMovies} />
      <StreamVibeApp />
    </div>
  );
}
