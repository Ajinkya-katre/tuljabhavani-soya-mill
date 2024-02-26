import Image from "next/image";
import { NavbarDemo } from "./navbar";
import { ImagesSliderDemo } from "./home-section-slider";

export default function Home() {
  return (
    <main >
      <ImagesSliderDemo />
      <NavbarDemo />
    </main>
  );
}
