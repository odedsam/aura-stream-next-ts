import { sampleMovies } from "@/config/mock";
import { StreamVibeApp } from "../components/sections/AbouSection";
import { HeroSlider } from "../components/sliders/HeroSlider";

export default function page() {
  return (
    <div className="">
      <HeroSlider movies={sampleMovies} />
      <StreamVibeApp />
    </div>
  );
}
